<template>
  <div class="tab--main">
    <div class="tab--list">
      <span
        v-for="(tab, index) in tabArr"
        :key="index"
        class="tabs"
        @click="tabActive(tab)"
        :class="activeClass === tab.id ? 'active' : ''"
        >{{ tab.name }}
      </span>
    </div>
    <div class="content">
      <!-- <component :is="activeComp" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tab1 from "./Tab1.vue";
import Tab2 from "./Tab2.vue";
import Tab3 from "./Tab3.vue";

export default {
  components: { Tab1, Tab2, Tab3 },
  name: "tabmain",
  data() {
    return {
      activeClass: 1,
      tabArr: [
        {
          id: 1,
          name: "Tab 1",
          tab: Tab1,
          routeName:'tab1'
        },
        {
          id: 2,
          name: "Tab 2",
          tab:Tab2,
          routeName:'tab2'

        },
        {
          id: 3,
          name: "Tab 3",
          tab:Tab3,
                    routeName:'tab3'

        },
      ],
      activeComp: Tab1,
    };
  },
  created(){
    console.log('route',this.$route)
            let tabInfo = this.tabArr.filter(ele=>{
          if(ele.routeName === this.$route.name){
            return ele
          }
        })
        this.activeClass = tabInfo && tabInfo[0] &&tabInfo[0].id
  },
  methods: {
    tabActive(tabData) {
      this.activeClass = tabData.id;
      this.activeComp = tabData.tab
      this.$router.push({name:tabData.routeName})
    },
  },
};
</script>

<style scoped>
.tab--main {
  text-align: center;
}
.tabs {
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}
.active {
  border-bottom: 2px solid green;
  color: green;
}
.content {
  margin-top: 100px;
}
</style>