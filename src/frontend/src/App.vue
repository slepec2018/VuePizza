<template>
  <div id="app">
    <AppLayoutHeader :show-menu="false" />
    <router-view>
      <Index />
    </router-view>
  </div>
</template>

<script>
import AppLayoutHeader from '@/layouts/AppLayout.vue';
import Index from '@/views/Index';
import { mapActions } from 'vuex';


export default {
  name: 'App',
  components: {
    AppLayoutHeader,
    Index
  },

  created() {
    // Note: fetch initial data
    this.initPizzaData();
    this.initMiscData();
    this.initUserData();
  },

  methods: {
    ...mapActions('Builder', ['initPizzaData']),
    ...mapActions('Cart', ['initMiscData']),
    ...mapActions('Auth', ['initUserData'])
  }

};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
