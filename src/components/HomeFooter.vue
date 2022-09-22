<script setup>
import { links } from '../data';
</script>

<template>
  <!-- Footer -->
  <footer class="bottom">
    <div class="socialmedias">
      <ul class="socialmediaslist">
        <li class="socialmedia"><a :href="`https://github.com/${links.github}`" target="_blank"><img src="../assets/img/github-i20.svg"
              alt=""></a></li>
        <li class="socialmedia"><a :href="`https://fb.me/${links.facebook}`" target="_blank"><img src="../assets/img/fb-i20.svg"
              alt=""></a></li>
        <li class="socialmedia"><a :href="`https://linkedin.com/in/${links.linkedin}`" target="_blank"><img
              src="../assets/img/in-i20.svg" alt=""></a></li>
        <li class="socialmedia"><a :href="`mailto:${links.email}`"><img src="../assets/img/mail-i20.svg" alt=""></a></li>
      </ul>
    </div>
    <p class="text">Développé avec ❤️ par Jiasuo</p>
  </footer>
</template>

<style scoped>
/* #region |||FOOTER||| */
/* Container */
.bottom {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  font-family: "SF Mono", arial, sans-serif;
  font-size: 12px;
  color: #8892b0;
}
.socialmedias{
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
}
.socialmediaslist{
    display: flex;
    justify-content: center;
}
.socialmedia a{
    padding: 10px;
}
.socialmedia a img{
    width: 20px;
    height: 20px;
}
/* Hide social medias */
.socialmedias{
    display: none;
}
/* #endregion */

/* #region Small */
@media screen and (max-width: 768px) {
  /* show social medias block */
  .socialmedias{
      display: block;
  }
}
/* #endregion */
</style>