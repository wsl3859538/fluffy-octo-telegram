<template>
  <div class="mod-home">
    <main-navbar ref="navBar" @askEvent="clickAskBtn"></main-navbar>
    <div
      class="site-content__wrapper"
      :style="{ height: documentClientHeight + 'px' }"
      @click="mainClick()"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MainNavbar from "./main-navbar";
export default {
  components: {
    MainNavbar,
  },
  computed: {
    documentClientHeight: {
      get() {
        return this.$store.state.common.documentClientHeight;
      },
      set(val) {
        this.$store.commit("common/updateDocumentClientHeight", val);
      },
    },
  },


  data() {
    return {
      clickEvent: false,
    };
  },

  methods: {
    resetDocumentClientHeight() {
      this.documentClientHeight = document.documentElement["clientHeight"];
      window.onresize = () => {
        this.documentClientHeight = document.documentElement["clientHeight"];
      };
    },

    // 点击提问
    clickAskBtn(){
      console.log('ask')
    },

    // 点击主页面,隐藏展开的navBar
    mainClick() {
      if (this.$refs.navBar.popover_info) {
        this.$refs.navBar.clickAvatar();
      }
    },
  },
  mounted() {
    this.resetDocumentClientHeight();
  },
};
</script>

<style scoped>
</style>
