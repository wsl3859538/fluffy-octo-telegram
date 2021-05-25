<template>
  <div id="app"  v-loading.fullscreen.lock="Loading">
    <router-view />
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {  
  name: 'App',
  computed: {
    ...mapState({
      Loading: (state) => state.common.Loading,
    }),
  },
  components: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
</style>
