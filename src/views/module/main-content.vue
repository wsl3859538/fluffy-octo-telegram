<template>
  <div class="mod-main">
      
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
</style>
