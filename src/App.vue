<template>
  <div class="main">
  <Home/>
  </div>
</template>

<script>
import Home from './components/home/Home.vue';
export default {
  name: "App",
  data() {
    return {
      checkedData: [],
    };
  },
  components:{
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
