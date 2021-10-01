<template>
  <div class="container--episode">
    <div class="section" v-for="(episode, index) in episodeLists" :key="index">

        <div class="card" @click="getContent(episode)">
          <img :src="episodeImage(episode)" alt="images" style="width: 100%" />
          <p class="info" style="font-weight: 700">
            Episode {{ episode.number }}
          </p>
          <p class="info" style="font-weight: 500">{{ episode.name }}</p>
          <div class="desc info" v-html="episode.summary"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    episodeLists: {
      type: Object,
      default: null,
    },
  },
  methods: {
    episodeImage(episode) {
      return episode && episode.image && episode.image.medium;
    },

    getContent(episode){
      this.$router.push({name:'detailpage',params:{id:episode.id,details:JSON.stringify(episode)}})
    }
  },
};
</script>

<style>
.container--episode {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.section {
  margin-bottom: 40px;
}
.card {
  height: 275px;
  width: 275px;
  border: 2px solid black;
  text-align: center;
}
.info {
  margin: 2px;
  font-size: 14px;
}
p {
  margin: 0px;
}
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
}
</style>