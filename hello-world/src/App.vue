<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     <div>
       <router-link to="/c">c</router-link>
     </div>
    <div>
      <router-link to="/d">d</router-link>
    </div>
    <div>
      <router-link to="/hello-world">hello-world</router-link>
    </div>
    <div>

    </div>
    <router-view />
  </div>
</template>

<script>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
