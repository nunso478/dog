<template>
  <div id="app">
  <appCard cor="lightgreen" >
<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/breeds">breeds</router-link>
    </div>

  </appCard>
    
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import appCard from './components/app-card.vue'
export default {
  name: 'App',
  components:{
    HelloWorld,
    appCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
