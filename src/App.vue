<template>
  <div id="app">
    <main-nav />

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  components: {
    MainNav
  }
};
</script>
