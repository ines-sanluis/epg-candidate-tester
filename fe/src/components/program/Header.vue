<template>
    <v-row>
        <div class="ms-5 d-flex justify-center align-center">
            <v-img :src="program.channelImages.logo" max-width="40" max-height="40"/>
        </div>
        <v-col>
            <div class="d-flex">
                <span class="text-uppercase">{{program.channelTitle}}</span>
                <div class="ms-2 grey--text">
                    <span>{{programDuration}}</span>
                    <span class="bullet"><span class="date">{{programDate}}</span></span>
                </div>
            </div>
            <h2>{{program.title}}</h2>
            <sup class="grey--text">
                <span class="me-2">{{program.meta.year}}</span>
                <span class="me-2" v-for="genre in program.meta.genres" :key="genre">{{genre}}</span>
            </sup>
        </v-col>
    </v-row>
</template>

<script>
import moment from "moment"
export default {
    name: "ProgramHeader",
    props: ["program"],
    computed: {
        programDuration(){
            return `${moment(this.program.start).format("HH:mm")} - ${moment(this.program.end).format("HH:mm")}`
        },
        programDate(){
            return `${moment(this.program.start).format("d MMMM")}`
        }
    }
}
</script>

<style>
.bullet{
    display: list-item;
    list-style-type: disc;
    list-style-position: inside;
    float: right;
    margin-left: 6px;
}
.date{
    position: relative;
    left: -10px;
}
</style>