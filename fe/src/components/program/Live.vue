<template>
    <div class="d-flex bg-color pt-1 pb-1 ps-4 pe-4" align="center" justify="center" v-if="inProgram">
        <template v-if="isLive">
            <v-icon color="green">mdi-record</v-icon>
            <p class="text-uppercase ma-0 ms-4">Live</p>
        </template>
        <template v-else>
            <p class="mb-0">{{timeLeft}}</p>
        </template>
    </div>
</template>

<script>
import moment from "moment"
export default {
    props: ["start", "end"],
    computed: {
        inProgram(){
            const now = moment()
            const start = moment(start)
            return now.isAfter(start) || start.isAfter(now)
        },
        timeLeft(){
            const now = moment()
            const start = moment(start)
            let duration = "Not in program"
            if(start.isAfter(now)){
                let diff = moment.duration(start.diff(now))
                duration = `${diff.days()} d`
                if(diff.hours() > 0) {
                    duration += ` ${diff.hours()} h`
                }
            }
            return duration
        },
        isLive(){
            const now = moment()
            return now.isAfter(moment(this.start)) && now.isBefore(moment(this.end))
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: rgba(0, 0, 0, 0.507)
}
</style>