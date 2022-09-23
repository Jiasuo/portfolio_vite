<script setup>
import HomeSectionHeading from './HomeSectionHeading.vue';
import { skills } from '../data';

defineEmits(["imageLoaded"])

</script>

<template>
  <section class="about" id="about">
    <!-- Heading -->
    <HomeSectionHeading text="À propos" number="1"/>
    <!-- Content -->
    <div class="content">
      <!-- Left -->
      <div class="left">
        <p>
          Hello! Je m’appelle Jiasuo et j’adore créer toute sorte de choses
          sur internet. Mon intérêt dans le développement web a débuté en
          2017 lorsque j’ai décidé d’apprendre à coder pour créer des trucs
          cools. J’ai fait mes premiers pas avec Python.
        </p>
        <p>
          Aujourd’hui, j’ai eu le privilège de travailler dans une agence de
          com’, une start-up, une grande entreprise, et un studio de design
          amateur. Ma priorité actuelle est d’aider les start-ups et les
          PMEs à transmettre leurs valeurs de marque à travers des produits
          et services digitaux.
        </p>
        <p id="skills">
          Voici quelques technologies avec lesquelles j’ai travaillé
          récemment :
        </p>
        <ul class="skilllist">
          <li v-for="skill in skills" :key="`${skill}skill`" class="skill">{{skill}}</li>
        </ul>
      </div>
      <!-- Right -->
      <div class="right">
        <div class="imagewrapper">
          <div class="pic">
            <img src="../assets/img/jj_optimized.png" alt="jiasuo picture" @load="$emit('imageLoaded')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* #region |||ABOUT||| */
/* Container */
section.about {
  padding: 100px 0;
  max-width: 900px;
  margin: 0 auto;
}

/* Content */
section.about>.content {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 3fr 50px 2fr;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
}

/* Left content */
section.about>.content>.left {
  font-family: "Calibre Regular", arial, sans-serif;
  font-size: 20px;
  line-height: 1.3;
}

/* Left content paragraphs */
section.about>.content>.left>p:not(:last-child) {
  margin-bottom: 15px;
}

/* Left content list */
section.about>.content>.left>ul {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: minmax(140px, 200px) 10px minmax(140px, 200px);
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  font-family: "SF Mono", arial, sans-serif;
  font-size: 13px;
}

/* Left content list item */
section.about>.content>.left>ul>li {
  position: relative;
  padding-left: 20px;
}

/* Left content list item decorator */
section.about>.content>.left>ul>li::before {
  content: "▹";
  position: absolute;
  left: 0px;
  color: #64ffda;
  font-size: 12px;
  line-height: 12px;
}

/* Right content */
section.about>.content>.right {
  max-width: 300px;
  position: relative;
}

/* Picture wrapper */
section.about>.content>.right>.imagewrapper {
  display: block;
  position: relative;
  width: 100%;
  max-width: 100%;
}

/* Picture */
section.about>.content>.right .pic>img {
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
}

/* Picture offset stroke */
section.about>.content>.right .pic::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 2px solid #64ffda;
  top: 20px;
  left: 20px;
  z-index: -1;
}

/* #endregion */

@media screen and (max-width: 768px) {
  /* Section About's content */
  section.about .content {
    display: block;
  }
  /* Section About's content image */
  section.about .content .right {
    margin: 50px auto 0px;
    width: 70%;
  }
  section.about{
      padding: 80px 0;
  }
}
</style>