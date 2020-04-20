<template>
    <div>
        CC
        <div>{{$route.query.message}}</div>
        <button @click="back">back</button>
    </div>
</template>

<script>
    export default {
        name: "CC",
        methods: {
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
