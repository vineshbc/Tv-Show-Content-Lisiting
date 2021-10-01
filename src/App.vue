<template>
  <div class="main">
    <router-view/>
    <!-- <Home/> -->
  </div>
</template>

<script>
// import Home from './components/home/Home.vue';
// import TabMain from './components/tab/TabMain.vue';
export default {
  name: "App",
  data() {
    return {
      checkedData: [],
    };
  },
  components:{
    // Home,
    // TabMain
  },
  created(){
    let userData = localStorage.getItem('userData')
    if(!userData){
      this.$router.push({name:"login"})
    }
  },
  // watch:{
  //   $route(to,from){
  //     console.log("to route",to)
  //     console.log("form route",from)
  //   }
  // }
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
