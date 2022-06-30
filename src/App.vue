<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
      <div class="logo">
        <p>Catherine Guerre</p>
        <p>Création</p>
      </div>
    <nav>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/about">Oeuvres</RouterLink>
      <RouterLink to="/about">Livre d'or</RouterLink>
      <RouterLink to="/about">Évènements</RouterLink>
      <RouterLink to="/inscription">Inscription</RouterLink>
      <RouterLink to="/connexion">Connexion</RouterLink>
      <RouterLink to="/addarticle">Ajouter un article</RouterLink>
      <RouterLink to="/boutique">Boutique</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.logo {
  width: 25%;
}
.logo p {
    font-family: 'Italianno', cursive;
  color: rgb(255, 255, 255);
  font-size: 30px;
  padding-left: 10px;
  margin: 0;
}


#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

header {
  margin-bottom: 20px;
  display: flex;
  background-color: black;
  align-items: center;
}

a,
.green {
  text-decoration: none;
  color: rgb(255, 255, 255);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(0, 1%, 47%, 0.2);
  }
}

nav a.router-link-exact-active {
  color: white;
  text-decoration: underline;
  transition: 0.4s;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    /* grid-template-columns: 1fr 1fr;
    padding: 0 2rem; */
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 20px;
    background: black;
    padding: 2rem 0;
    justify-content: center;
    display: flex;
  }
}
</style>
