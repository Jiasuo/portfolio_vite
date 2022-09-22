<script setup>
import HomeTopBar from './HomeTopBar.vue';
import HomeSideNavigation from './HomeSideNavigation.vue';
import HomeFooter from './HomeFooter.vue';
import HomeSectionHero from './HomeSectionHero.vue';
import HomeSectionAbout from './HomeSectionAbout.vue';
import HomeSectionPortfolio from './HomeSectionPortfolio.vue';
import HomeSectionOtherprojects from './HomeSectionOtherprojects.vue';
import HomeSectionContact from './HomeSectionContact.vue';

</script>

<template>
  <HomeTopBar />
  <HomeSideNavigation />
  <main>
    <HomeSectionHero />
    <HomeSectionAbout />
    <HomeSectionPortfolio />
    <HomeSectionOtherprojects />
    <HomeSectionContact />
  </main>
  <HomeFooter />
</template>

<style scoped>
main {
  min-height: 100vh;
  padding: 0 150px;
}

@media screen and (max-width: 1079px) {
  /* Main padding from 150px to 100px */
  main {
    padding: 0 100px;
  }
}

@media screen and (max-width: 768px) {
  main {
    padding: 0 50px;
  }
}

@media screen and (max-width: 480px) {
  main {
    padding: 0 25px;
  }
}
</style>