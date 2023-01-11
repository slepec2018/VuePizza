<template>
  <div id="app">
    <AppLayoutHeader />
    <router-view>
      <Index />
    </router-view>
  </div>
</template>

<script>
import AppLayoutHeader from '@/layouts/AppLayout.vue';
import Index from '@/views/Index';

export default {
  name: 'App',
  components: {
    AppLayoutHeader,
    Index
  }
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
