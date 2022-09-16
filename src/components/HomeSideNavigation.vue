<script setup>

</script>

<template>
  <!-- Left side navigation -->
  <aside class="left">
    <a href="https://github.com/jiasuo" target="_blank" class="sm"><span class="icon"><img
          src="../assets/img/github-i20.svg" alt="github" /></span></a><a href="https://fb.me/gabx91" target="_blank"
      class="sm"><span class="icon"><img src="../assets/img/fb-i20.svg" alt="facebook" /></span></a><a
      href="https://www.linkedin.com/in/acsjiasuo" target="_blank" class="sm"><span class="icon"><img
          src="../assets/img/in-i20.svg" alt="linkedin" /></span></a>
  </aside>

  <!-- Right side navigation -->
  <aside class="right">
    <a href="mailto:coucou@jiasuo.fr">coucou@jiasuo.fr</a>
  </aside>
</template>

<style scoped>
/* #region |||Asides||| */

/* Common */
aside.left,
aside.right {
  position: fixed;
  bottom: 0px;
  z-index: 10;
  color: #ccd6f6;
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

aside.left::after,
aside.right::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color: #8892b0;
}

/* Left */
aside.left {
  left: 40px;
  right: auto;
}

/* Left items */
aside.left>a.sm {
  width: 40px;
  height: 46px;
  padding: 10px;
}

/* Left last item */
aside.left>a.sm:last-child {
  margin-bottom: 20px;
}

/* Right */
aside.right {
  left: auto;
  right: 40px;
}

/* Right items */
aside.right a {
  margin: 20px auto;
  padding: 10px;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-family: "SF Mono", arial;
  font-size: 12px;
  color: #8892b0;
}

/* #endregion */
</style>