<template>
  <div class="content--main">
    <div class="secion--one">
      <div class="image--main">
        <img
          :src="
            contentDetails &&
            contentDetails.image &&
            contentDetails.image.medium
          "
          :alt="contentDetails.name"
          style="width: 90%; height: auto;border-radius:15px"
        />
      </div>
      <div class="details">
      <h1>
        Name:<span>{{ contentDetails.name }}</span>
      </h1>
      <h3>
        Season:<span>{{ contentDetails.season }}</span>
      </h3>
      <h3>
        Episode:<span>{{ contentDetails.number }}</span>
      </h3>
      <h4>
        Runtime:<span>{{ contentDetails.runtime }} minutes</span>
      </h4>
      </div>
    </div>
    <div class="section-two">
        <p v-html="contentDetails.summary"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentDetails: "",
    };
  },
  created() {
    console.log("Route params||", this.$route.params);
    this.contentDetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("contentDetails||", this.contentDetails);
  },
};
</script>

<style  scoped>
.secion--one{
    display: grid;
    grid-template-columns: 65% 35%;
    align-items: center;
}
</style>