<template>
<div>
    <v-row class="hidden-xs-only">
        <v-col cols="auto" v-for="season in seasons" :key="season.title"><v-btn @click="selectedSeason = season.title" outlined :class="selectedSeason == season.title? 'active-btn' : ''">{{season.title}}</v-btn></v-col>
    </v-row>
    <v-col>
        <v-select class="hidden-sm-and-up text-uppercase fw-bold" v-model="selectedSeason" :items="seasons" item-text='title' item-value='title' solo></v-select>
    </v-col>
    <v-card v-for="(episode, i) in episodes" :key="episode" outlined class="ma-2">
        <v-card-title>{{episode}}</v-card-title>
        <v-card-subtitle class="grey--text">Episode {{i+1}}</v-card-subtitle>
        <v-card-actions>
            <v-btn fab icon height="40px" right width="40px">
                <v-icon>mdi-play</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
    name: "ProgramSeasons",
    props: ["seasons"],
    data(){
        return{
            selectedSeason: this.seasons.length > 0 ? this.seasons[0].title : ""
        }
    },
    computed: {
        episodes(){
            let episodes = []
            const season = this.seasons.find(season => {
                return season.title === this.selectedSeason
            })
            if(season){
                for (const episode of season.episodes) {
                    episodes.push(episode.title)
                }
            }
            return episodes
        }
    }
}
</script>

<style scoped>
.active-btn{
    background-color: var(--v-primary-lighten1)
}
</style>