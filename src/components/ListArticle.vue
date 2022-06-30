<template>
  <div class="articles-icons">
    <div
      class="background"
      v-for="article in articlesStore.articles"
      :key="article['@id']"
    >
      <img :src="img + article.image" alt="image" />
      <td class="nom">{{ article.nom }}</td>
      <td class="description">{{ article.description }}</td>
      <!-- <td class="taille">{{ article.longueur }} cm x {{ article.largeur }} cm</td> -->
      <td class="prix">{{ article.prix }} €</td>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from "../stores/articles";
import { onMounted } from "vue";
import axios from "axios";

const articlesStore = useArticleStore();
const img = "http://127.0.0.1:8000/";

onMounted(() => {
  fetchArticles();
});

async function fetchArticles() {
  let r = await fetch("http://127.0.0.1:8000/api/articles", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  if (r) {
    articlesStore.articles = r["hydra:member"];
  }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}

.articles-icons {
  display: flex;
  gap: 50px;
}

.background {
  background-color: rgb(255, 255, 255);
  border: 1px black solid;
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
}

.ii {
  display: flex;
  flex-direction: column;
}

.nom {
    color: rgba(125, 121, 121, 1);
}


</style>
