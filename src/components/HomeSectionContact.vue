<script setup>
  
</script>

<template>
  <!-- Contact -->
  <section class="contact" id="contact">
        <p class="outline">Et ensuite ?</p>
        <h2 class="title">Discutons !</h2>
        <p class="desc">Même si je ne suis pas en recherche d'opportunités, ma boîte mail t'est toujours ouverte. Que t'aies une question ou juste pour un coucou, j'essaierai de mon mieux pour te répondre.</p>
        <a href="mailto:coucou@jiasuo.fr" class="button">Faire coucou</a>
      </section>
</template>

<style scoped>
  /* #region |||CONTACT||| */
/* Container */
section.contact {
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 600px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
/* outline */
section.contact .outline {
  margin: 10px 0 20px;
  color: #64ffda;
  font-family: "SF Mono", arial, sans-serif;
  font-size: 16px;
}
/* Title */
section.contact .title {
  font-size: clamp(40px, 5vw, 60px);
  color: #ccd6f6;
  font-family: "Calibre SemiBold", arial, sans-serif;
  margin-bottom: 10px;
}
/* Desc */
section.contact .desc {
  font-family: "Calibre Regular", arial, sans-serif;
  color: #8892b0;
  font-size: 20px;
  line-height: 1.3;
  text-align: center;
}
/* Link */
section.contact a.button {
  margin-top: 50px;
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  font-family: "SF Mono", arial, sans-serif;
  line-height: 1;
}
/* #endregion */
@media screen and (max-width: 768px) {
  section.contact{
      padding: 80px 0;
  }
}
</style>