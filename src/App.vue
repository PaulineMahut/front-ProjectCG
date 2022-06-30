<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    

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

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
background: rgb(255, 255, 255);
}

a,
.green {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(0, 35%, 45%, 0.2);
  }
}



nav a.router-link-exact-active {
  color: var(--color-text);
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
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 20px;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
