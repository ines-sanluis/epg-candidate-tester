<template>
    <div>
        <v-row no-gutters class="justify-space-between">
            <v-btn icon @click="previousDay()"><v-icon>mdi-chevron-left</v-icon></v-btn>
            <v-col class="pa-1" cols="auto" v-for="date in week" v-bind:key="date.toISOString()">
                <button @click="setDay(date)" :class="dateClass(date)" >
                    <p>{{dayOfWeekAsString(date)}}</p>
                    <p>{{dateAsString(date)}}</p>
                </button>
            </v-col>
            <v-btn icon @click="nextDay()"><v-icon>mdi-chevron-right</v-icon></v-btn>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'Week',
    props: ["date"],
    data(){
        return {
            selectedDate: this.date
        }
    },
    computed: {
        week(){
            let daysToShow = 7
            if(this.$vuetify.breakpoint.xs) daysToShow = 4
            let week = []
            for (let i = 0; i < daysToShow; i++) {
                let date = new Date(this.selectedDate.getTime())
                date.setDate(date.getDate() + i)
                week.push(date)
            }
            return week
        }
    },
    methods: {
        setDay(date){
            this.selectedDate = new Date(date)
            this.$emit('update:date', this.selectedDate)
            sessionStorage.setItem('date', this.selectedDate)
            console.log((sessionStorage.getItem('date')))
        },
        previousDay(){
            this.setDay(this.selectedDate.setDate(this.selectedDate.getDate() - 1))
        },
        nextDay(){
            this.setDay(this.selectedDate.setDate(this.selectedDate.getDate() + 1))
        },
        dateClass(date){
            if(date.toString() == this.selectedDate.toString()) return "white--text"
            else return "grey--text"
        },
        dayOfWeekAsString(date) {
            return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()] || ''
        },
        dateAsString(date){
            let d = [ date.getDate(), date.getMonth() + 1, date.getFullYear()].map((a) => (a < 10 ? '0' + a : a)).join(".")
            if(this.$vuetify.breakpoint.xs){
                d = d.replace(date.getFullYear(), "")
            }
            return d
        }
    }
}
</script>