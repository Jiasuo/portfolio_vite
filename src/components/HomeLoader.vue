<script setup>
import { gsap } from "gsap"
import { onMounted } from "vue";

const logoAnimation = gsap.timeline({
  defaults: {
    duration: 0.5
  },
  repeat: -1,
  yoyo: true
})

onMounted(() => {
  logoAnimation
    .fromTo("#logo-letter", {
      x: -50,
      fill: "#ccd6f6"
    }, {
      opacity: 1,
      fill: "#64ffda"
    })
    .addLabel("letter")
    .to("#logo-letter", {
      x:0
    })
    .to("#logo-shadow", {
      opacity: 0.1
    }, "letter")
    .fromTo("#logo-left-bracket",{
      x: -20
    }, {
      opacity: 1,
      x: 0
    }, "letter+=0.2")
    .fromTo("#logo-right-bracket",{
      x: 20
    }, {
      opacity: 1,
      x: 0
    }, "letter+=0.2")
})
</script>

<template>
  <div class="loaderContainer">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <path id="logo-shadow" d="M259,141.16V358.84H200V327h23.45V173" />
      <path id="logo-letter" d="M223,358.84V327h23.45V173h-23V141.16H282V358.84Z" />
      <path id="logo-left-bracket"
        d="M125,141.16c-24.33,34.47-51.36,67.39-78.66,99.56L34.53,254.43l0-7.89c27.54,31.54,54.83,64.13,79.86,97.66,3,4.07,7.73,10.46,10.63,14.64-2.24-2-4.41-4.12-6.62-6.18-32.41-31-63.22-64.53-92.89-98.2L22,250.52c7.51-8.64,19.78-22.54,27.45-31.08C73.76,192.56,98.57,166,125,141.16Z" />
      <path id="logo-right-bracket"
        d="M375,141.16c26.43,24.83,51.24,51.4,75.54,78.28,7.66,8.57,19.94,22.43,27.45,31.08l-3.48,3.94c-29.68,33.68-60.47,67.17-92.89,98.2-2.21,2.06-4.38,4.15-6.62,6.18,2.9-4.21,7.53-10.44,10.63-14.64,25-33.52,52.33-66.12,79.86-97.66l0,7.89-11.81-13.71c-27.3-32.17-54.32-65.08-78.66-99.56Z" />
    </svg>
  </div>
</template>

<style scoped>
.loaderContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 150px;
  height: 150px;
}

#logo-shadow,
#logo-letter {
  fill: var(--primary);
}

#logo-left-bracket,
#logo-right-bracket {
  fill: var(--white);
}

#logo-shadow,
#logo-letter,
#logo-left-bracket,
#logo-right-bracket {
  opacity: 0;
}
</style>