<template>
  <div class="home--main" @scroll="scrollFunc">
    <h1>Season Listing</h1>
    <div class="container-main">
      <div
        class="container-section"
        v-for="(seasonData, index) in groupbySeason"
        :key="index"
      >
        <h2>Season {{ seasonData[index].season }}</h2>

        <EpisodeDesc :episodeLists="seasonData" @trigger-name="receiveEvent">
        </EpisodeDesc>
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/data.json";
import EpisodeDesc from "./EpisodeDesc.vue";
export default {
  components: { EpisodeDesc },
  name: "home",
  data() {
    return {
      episodeLists: [],
    };
  },
  computed: {
    groupbySeason() {
      let list = {};
      this.episodeLists.forEach((ele) => {
        if (Object.keys(list).includes(ele.season.toString())) {
          list[ele.season] = [...list[ele.season], ele];
        } else {
          list[ele.season] = [ele];
        }
      });
      console.log({ list });
      return list;
    },
  },
  created() {
    this.episodeLists = data && data._embedded && data._embedded.episodes;
    console.log(this.episodeLists);
  },

  methods: {
    mainFunc(name) {
      alert(name);
    },
    receiveEvent(name) {
      alert(name);
    },
    scrollFunc(event) {
      console.log(event);
    },
  },
};
</script>

<style >
.home--main {
  height: 80vh;
  overflow: auto;
}
</style>