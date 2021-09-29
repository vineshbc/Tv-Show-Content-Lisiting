<template>
  <h1>Season Listing</h1>
  <div class="container-main">
    <div
      class="container-section"
      v-for="(seasonData, index) in groupbySeason"
      :key="index"
    >
      <h2>Season {{ seasonData[index].season }}</h2>

      <EpisodeDesc :episodeLists="seasonData">
        <template v-slot:btn1>
          <button>Button 1</button>
        </template>
                <template v-slot:btn2>
          <button>Button 2</button>
        </template>

      </EpisodeDesc>
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

  methods: {},
};
</script>

<style>
</style>