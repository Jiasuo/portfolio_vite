<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';


  const isMenuShow = ref(false)

  const menuIconSrc = computed(() => isMenuShow.value ? `/close-i40.svg` : `/menu-i40.svg`)
function toggleMenu(e){
  isMenuShow.value = !isMenuShow.value
}
</script>

<template>
  <div class="topbar">
    <router-link :to="{name: 'HomePage'}" class="logo"><img src="../assets/img/logo.svg" alt="J" width="40px"
        height="40px" /></router-link>
    <nav>
      <ul class="navbar">
        <li class="navitem">
          <a href="#about"><span class="navindicator">01.</span>&nbsp;À propos</a>
        </li>
        <li class="navitem">
          <a href="#skills"><span class="navindicator">02.</span>&nbsp;Compétences</a>
        </li>
        <li class="navitem">
          <a href="#portfolio"><span class="navindicator">03.</span>&nbsp;Réalisations</a>
        </li>
        <li class="navitem"><a href="#contact" class="button">Contact</a></li>
      </ul>
      <div class="overlay" :class="{show:isMenuShow}" id="overlay">
        <aside class="navbar">
          <ul>
            <li><a href="#about" id="menulink1">À Propos</a></li>
            <li><a href="#skills" id="menulink2">Compétences</a></li>
            <li><a href="#portfolio" id="menulink3">Réalisations</a></li>
            <li><a href="#contact" id="menulink4">Contact</a></li>
          </ul>
        </aside>
      </div>
      <div class="menu" id="menucontainer" @click="toggleMenu">
        <img :src="menuIconSrc" alt="menu" id="menu">
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* #region |||NAVBAR||| */

/* Container */
.topbar {
  position: fixed;
  /* basic */
  width: 100%;
  height: 100px;
  background-color: var(--black);
  -webkit-box-shadow: var(--shadow);
  box-shadow: var(--shadow);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  /* Layout */
  padding: 29px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

/* Logo */
.logo{
  width: 60px;
  height: 100%;
}
.logo img {
  object-fit: contain;
}

/* navitems container */
.navbar {
  /* layout */
  display: flex;
}

/* nav items link */
.navbar a {
  color: var(--white);
  font-family: var(--accentFont);
  font-size: 13px;
  line-height: 40px;
}

/* nav items on hover */
.navbar a:hover {
  color: var(--primary);
}

/* nav item spacing */
.navbar .navitem:not(:last-child) {
  /* spacing */
  margin-right: 20px;
}

/* nav item indicator */
.navindicator {
  /* color */
  color: var(--primary);
}

/* Contact button */.button {
  color: var(--primary);
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 0.75rem 1rem;
}

/* Menu  */
.menu {
  display: none;
}

/* Menu Overlay */
.overlay {
  display: none;
}

/* #endregion */

/* #region MEDIUM < 1080px */
@media screen and (max-width: 1079px) {
  .topbar{
    padding: 29px 40px;
  }
}
/* #endregion */

/* #region SMALL <= 768px */
@media screen and (max-width: 768px) {
  .topbar{
    padding: 29px 25px;
  }
  /* hide navigation items */
  .topbar > nav > ul.navbar {
    display: none;
  }
  /* display menu button */
  .topbar > nav > div.menu {
    display: block;
    height: 40px;
    width: 40px;
  }
  /* menu image */
  .topbar > nav .menu > img {
    position: relative;
    z-index: 20;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
  .topbar > nav > .overlay.show{
      display: block;
  }

  /* Overlay */
  .topbar > nav > .overlay.show {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(2,12,27,0.85);
    backdrop-filter: blur(100px);
    z-index: 8;
  }
  /* Menu block */
  .topbar > nav > .overlay.show > aside.navbar {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: var(--blackL);
    box-shadow: var(--shadow);
    z-index: 9;
    transform: translateX(0vw);
    visibility: visible;
  }
  /* Menu itemlist */
  .topbar > nav > .overlay.show > aside > ul {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    color: var(--white);
    font-family: var(--accentFont);
    text-align: center;
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li {
    position: relative;
    margin: 0px auto 20px;
    font-size: clamp(var(14px), 4vw, var(18px));
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li > a {
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 3px 20px 20px;
    color: var(--white);
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li > a:hover {
    color: var(--primary);
  }
  .topbar > nav > .overlay > aside.navbar > ul > li::before{
      content: '';
    display: block;
    margin-bottom: 5px;
    color: var(--primary);
    font-size: 14px;
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li:first-child::before {
    content: "01.";
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li:nth-child(2)::before {
    content: "02. ";
  }
  .topbar > nav  > .overlay > aside.navbar > ul > li:nth-child(3)::before {
    content: "03. ";
  }
  .topbar > nav > .overlay > aside.navbar > ul > li:last-child > a {
    color: var(--primary);
    background-color: transparent;
    border: 1px solid var(--primary);
    border-radius: 4px;
    padding: 0.75rem 1rem;
  }
}
/* #endregion */

</style>