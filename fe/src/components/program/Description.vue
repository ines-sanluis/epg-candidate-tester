<template>
    <div class="grey--text">
        <template v-if="$vuetify.breakpoint.xsOnly">
            <p class="mb-0">{{readMore ? program.description : program.description.substring(0, 200) + '...'}}</p>
            <p class="accent--text cursor-pointer" @click="readMore = !readMore">{{readMore ? 'less' : 'more'}}</p>
        </template>
        <template v-else>
            <p>{{program.description}}</p>
        </template>
        <p class="mb-0">Cast: {{members}}</p>
        <p>Creators: {{creators}} </p>
    </div>
</template>

<script>
export default {
    name: "ProgramDescription",
    props: ["program"],
    data(){
        return {
            readMore: false
        }
    },
    computed: {
        members(){
            return this.getNamesAsString(this.program.meta.cast)
        },
        creators(){
            return this.getNamesAsString(this.program.meta.creators)
        }
    },
    methods: {
        getNamesAsString(array){
            return array.map((element) => element.name).join(", ")
        }
    }

}
</script>

<style>

</style>