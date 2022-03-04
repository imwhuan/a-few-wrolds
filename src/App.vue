<template>
<BasicLayout></BasicLayout>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
</template>
<script>
import BasicLayout from './layout/BasicLayout.vue'
export default {
  components:{
    BasicLayout
  }
}
</script>
<style>
.scrollbar{
  overflow: scroll;
}
.scrollbar::-webkit-scrollbar {
    width: 7px;
    height: 1px;
}
.scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 2px;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 20%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}
html,body{
  height: 100%;
}
/*#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
