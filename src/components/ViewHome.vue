<script setup>
import HomeTopBar from './HomeTopBar.vue';
import HomeSideNavigation from './HomeSideNavigation.vue';
import HomeFooter from './HomeFooter.vue';

</script>

<template>
  <HomeTopBar />
  <HomeSideNavigation />
  <main>
  </main>
  <HomeFooter />
</template>

<style scoped>
main{
  min-height: 100vh;
}
</style>