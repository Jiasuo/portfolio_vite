<script setup>

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
      <div class="overlay" id="overlay">
        <aside class="navbar">
          <ul>
            <li><a href="#about" id="menulink1">À Propos</a></li>
            <li><a href="#skills" id="menulink2">Compétences</a></li>
            <li><a href="#portfolio" id="menulink3">Réalisations</a></li>
            <li><a href="#contact" id="menulink4">Contact</a></li>
          </ul>
        </aside>
      </div>
      <div class="menu" id="menucontainer">
        <img src="./res/img/menu-i40.svg" alt="menu" id="menu">
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
</style>