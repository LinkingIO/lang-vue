<template>
 <div>
  D
  <button @click="jump">jump</button>
  <div>{{$store.state.a.data}}</div>
  <div>{{$store.state.b.data}}</div>
  <button @click="update('a')">update a</button>
  <button @click="update('b')">update b</button>
 </div>
</template>

<script>
    export default {
        name: "D",
        methods:{
         jump(){
          this.$router.push({
           path: '/c/cc',
           query: {
            message: "hello world!"
           }
          })
         }
         , update(ns){
          this.$store.dispatch(`${ns}/setData`, `${ns} data updated`)
         }
        }
    }
</script>

<style scoped>

</style>
