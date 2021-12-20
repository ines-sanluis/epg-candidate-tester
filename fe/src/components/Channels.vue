<template>
    <div class="channels d-flex flex-column flex-shrink-0 primary" align="center">
        <div class="header">
            <v-icon icon color="primary lighten-4">mdi-star</v-icon>
        </div>
        <div class="channel pa-2" v-for="channel in channels" :key="channel.id">
            <v-img :src="channel.images.logo" max-width="40" max-height="40"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ["channels"]
}
</script>

<style scoped>
.header{
    line-height: var(--hours-height);
    border-bottom: 1px solid var(--v-primary-lighten1);
    border-top: 1px solid var(--v-primary-lighten1);
    border-right: 1px solid var(--v-primary-lighten1);
}
.channels{
    flex-basis: 100px
}
.channel{
    height: var(--row-height);
    border-bottom: 1px solid var(--v-primary-lighten1);
    box-shadow: 10px 0 5px -2px var(--v-primary-darken2);
}
</style>