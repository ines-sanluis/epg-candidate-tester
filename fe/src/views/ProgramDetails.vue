<template>
    <v-container fluid class="primary darken-2">
        <template v-if="program">
            <v-row :class="{'img-icon': !$vuetify.breakpoint.xs}">
                <v-img gradient="to bottom, rgba(0,0,0, 0), rgba(0,0,0, 100)" :src="program.images.icon"/>
            </v-row>
            <Live class="live" :start="program.start" :end="program.end"/>
            <div>
                <ProgramHeader :program="program"/>
                <ProgramDescription :program="program"/>
            </div>
            <ProgramSeasons :seasons="program.series"/>
        </template>
        <template v-else>
            <v-progress-linear indeterminate color="accent darken-2" ></v-progress-linear>
        </template>
    </v-container>
</template>

<script>
import api from "@/mixins/api"
import ProgramHeader from "@/components/program/Header.vue"
import ProgramSeasons from '@/components/program/Seasons.vue'
import ProgramDescription from '@/components/program/Description.vue'
import Live from '@/components/program/Live.vue'
export default {
    mixins: [api],
    components: {
        ProgramHeader,
        ProgramSeasons,
        ProgramDescription,
        Live
    },
    data(){
        return {
            id: "dummy_program_id",
            program: null
        }
    },
    async created(){
        let response = await this.$api.get(`api/program/${this.id}`)
        if (response.ok) {
            this.program = await response.json()
        }
    },
}
</script>

<style scoped>
.img-icon{
    max-height: 200px;
    opacity: 0.3;
}
.live{
    top: 20px;
    right: 0;
    position: absolute;
}
</style>