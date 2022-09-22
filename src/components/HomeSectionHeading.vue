<script setup>
import { onMounted, ref } from 'vue';

  const props = defineProps(["text", "number"])

  const heading = ref(null)

  onMounted(() => {
    heading.value.setAttribute('data-number', `${props.number.padStart(2, '0')}. `)
  })

</script>

<template>
  <div class="heading" ref="heading">
      <h2 class="title">À propos</h2>
    </div>
</template>

<style scoped>
  /* Section headings */
.heading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  margin: 10px 0 40px;
  font-family: "Calibre SemiBold", arial, sans-serif;
  font-size: 32px;
  white-space: nowrap;
  line-height: 1.1;
  color: #ccd6f6;
  position: relative;
}
/* Section headings before */
.heading::before {
  content: attr(data-number);
  font-family: "SF Mono", arial, sans-serif;
  color: #64ffda;
  font-size: 20px;
  margin-right: 10px;
  position: relative;
  top: -4px;
}
/* Section heading after */
.heading::after {
  content: "";
  display: block;
  position: relative;
  top: -5px;
  width: 300px;
  height: 1px;
  margin-left: 20px;
  background-color: #8892b0;
}


</style>