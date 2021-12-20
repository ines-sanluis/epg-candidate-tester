<template>
    <v-container fluid class="pa-0">
        <template v-if="channels">
            <Week class="primary pt-2" v-bind:date.sync="date"/>
            <div class="d-flex cursor-pointer">
                <Channels :channels="channels"/>
                <Schedule :date="date" :channels="channels"/>
            </div>
        </template>
        <template v-else>
            <v-progress-linear indeterminate color="accent darken-2" ></v-progress-linear>
        </template>
    </v-container>
</template>
<script>
import Week from "@/components/Week"
import Channels from "@/components/Channels"
import Schedule from "@/components/Schedule"
import api from "@/mixins/api"
import moment from "moment"
export default {
    name: 'EPG',
    mixins: [api],
    components: {
        Week,
        Channels,
        Schedule
    },
    data(){
        return {
            date:  sessionStorage.getItem('date') == null? new Date() : new Date(sessionStorage.getItem('date')),
            channels: null
        }
    },
    async created(){
        let response = await this.$api.get('api/epg')
        if (response.ok) {
            response = await response.json()
            this.channels = response.channels
        }
        this.formatPrograms()
    },
    methods: {
        getProgramDuration(program){
            const start = moment(program.start)
            const end = moment(program.end)
            var duration = moment.duration(end.diff(start))
            return duration.asMinutes()
        },
        formatPrograms(){
            for (const channel of this.channels) {
                const schedules = channel.schedules
                for (const program of schedules) {
                    program["duration"] = {
                        "minutes": this.getProgramDuration(program),
                        "text": `${moment(program.start).format("HH:mm")} - ${moment(program.end).format("HH:mm")}`
                    }
                }
            }
        }
    }
}
</script>