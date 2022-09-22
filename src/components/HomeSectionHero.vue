<script setup>

</script>

<template>
  <section class="hero">
    <!-- intro text -->
    <p class="intro">Coucou, je m'appelle</p>
    <!-- Big title -->
    <h1 class="bigtitle">Jiasuo.</h1>
    <!-- Big subtitle -->
    <h2 class="bigsubtitle">Je code des trucs sur internet.</h2>
    <!-- Hero description -->
    <p class="desc">
      Je suis développeur web spécialisé dans la création d'expériences digitales exceptionnelles. Actuellement, je suis
      en-train de créer une <a class="mutedLink" href="https://agenceio.fr" target="_blank" title="Agence io">agence Web</a>.
    </p>
    <!-- CTA -->
    <a href="#contact" class="button">Besoin de moi ?</a>
  </section>
</template>

<style scoped>
  /* #region |||HERO||| */
/* Container */
section.hero {
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  min-height: 100vh;
  max-width: 1000px;
}

/* intro text */
section.hero > p.intro {
  margin: 0 0 30px 4px;
  color: var(--primary);
  font-family: var(--accentFont);
  font-size: 16px;
}

/* Big titles common */
section.hero > .bigtitle,
section.hero > .bigsubtitle {
  font-family: var(--primaryFontB);
  font-size: clamp(40px, 8vw, 80px);
}

/* Big title */
section.hero > .bigtitle {
  line-height: 1.1;
  color: var(--white);
}

/* Big subtitle */
section.hero > .bigsubtitle {
  /* margin-top: 10px; */
  color: var(--grey);
  line-height: 0.9;
}

/* Description */
section.hero > .desc {
  margin-top: 20px;
  max-width: 540px;
  font-family: "Calibre Regular";
  font-size: 20px;
}

.mutedLink{
  color: var(--greyL);
  font-weight: 600;
}

/* CTA */
section.hero > a.button {
  margin-top: 50px;
  padding: 20px 28px;
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-family: var(--accentFont);
  font-size: 14px;
}
section.hero > a.button:hover {
  background-color: var(--primaryT);
}

/* #endregion */
</style>