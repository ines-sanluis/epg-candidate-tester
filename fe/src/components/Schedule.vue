<template>
  <div class="overflow-x-auto primary" style="position: relative">
    <div class='hour-row d-inline-flex'>
      <div class="hour ps-2" v-for="hour in hours" :key="`hour-${hour}`" :id="`hour-${hour}`">
        <template v-if="hour == 23">
          <div class="d-flex justify-space-between">
            <span>{{hourAsString(hour)}}</span>
            <span class="me-2">{{hourAsString(24)}}</span>
          </div>
        </template>
        <template v-else>
          <span>
            {{hourAsString(hour)}}
          </span>
        </template>
      </div>
    </div>
    <div class="scheduler-row d-inline-flex primary darken-1" v-for="channel in currentSchedule" :key="`${channel.title}-programs`">
        <template v-if="channel.schedules.length > 0">
          <div class="program pa-2 overflow-hidden" :class="isOnAir(program)? 'on-air' : ''" :style="{ width: program.duration.minutes * 5 + 'px' }" v-for="(program, i) in channel.schedules" :key="`${channel.title}-program-${i}`">
            <p class="mb-0">{{program.title}}</p>
            <sup class="grey--text">{{program.duration.text}}</sup>
          </div>
        </template>
        <template v-else>
          <div class="program no-data">No data available</div>
        </template>
    </div>
    <div class="programs-now" :style="{left: nowPosition +'px'}" ref="now"></div>
    <div class="hour-now" :style="{left: nowPosition +'px'}" ref="now"></div>
    <v-btn @click="scrollToNow" class="autoscroll" capitalize>Now</v-btn>
  </div>
</template>

<script>
import moment from "moment"
export default {
  props: ["date", "channels"],
  computed: {
    hours(){
      return [...Array(24).keys()]
    },
    currentSchedule(){
      let channels = JSON.parse(JSON.stringify(this.channels))
      for (const channel of channels) {
        channel.schedules = channel.schedules.filter(program => moment(program.start).isSame(moment(this.date), 'day'))
      }
      return channels
    }
  },
  mounted(){
      this.setNowPosition()
      this.scrollToNow()
      const timer = setInterval(() => {
        this.setNowPosition()
      }, 60000)
      this.$once("hook:beforeDestroy", () => {
        clearInterval(timer);
      })
  },
  data(){
    return {
      nowPosition: 0,
      hourWidth: 300
    }
  },
  methods: {
    scrollToNow(){
      document.getElementById(`hour-${new Date().getHours()}`).scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})
    },
    setNowPosition(){
      const now = new Date()
      this.nowPosition = this.hourWidth * now.getHours() + (this.hourWidth / 60) * now.getMinutes()
      this.$nextTick(() => this.$refs.now.scrollIntoView({inline: "center"}))
    },
    isOnAir(program){
      const now = moment()
      return now.isAfter(moment(program.start)) && now.isBefore(moment(program.end))
    },
    hourAsString(hour){
      return `${hour < 10 ? '0' + hour : hour}:00`
    }
  }
}
</script>

<style>
.no-data{
  width: calc(var(--hour-width) * 24);
}
.autoscroll{
  background-color: var(--v-accent-base) !important;
  position: fixed;
  bottom: 40px;
  z-index: 2;
  right: 0;
  margin-right: 10px;
  margin-bottom: 10px;
}
.hour-row{
  line-height: var(--hours-height);
}
.hour{
  flex: 0 0 var(--hour-width);
}
.scheduler-row{
  height: var(--row-height);
}
.hour, .program{
  border-top: 0.25px solid var(--v-primary-lighten1);
  border-bottom: 0.25px solid var(--v-primary-lighten1);
  border-right: 0.5px solid var(--v-primary-lighten1)
}
.program{
  white-space: nowrap;
}
.on-air{
  border-top: 0.25px solid var(--v-primary-lighten3);
  border-bottom: 0.25px solid var(--v-primary-lighten3);
  border-right: 0.5px solid var(--v-primary-lighten3);
  background-color: var(--v-primary-lighten2)
}
.programs-now, .hour-now{
  position: absolute;
  opacity: 0.85;
  background-color: var(--v-accent-base);
}
.programs-now{
  height: calc(100% - var(--hours-height));
  top: var(--hours-height);
  width: 1px;
  margin-left: 1.5px;
}
.hour-now{
  width: 4px;
  top: 0px;
  height: var(--hours-height);
  border-radius: 10px;
}
</style>