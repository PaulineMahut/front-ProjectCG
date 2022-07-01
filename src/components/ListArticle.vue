<template>
  <!-- conteneur pricipal -->
  <div class="main">
    <div class="articles-icons">
      <div
        class="background"
        v-for="article in articlesStore.articles"
        :key="article['@id']"
      >
        <img :src="img + article.image" alt="image" />
        <td class="nom">{{ article.nom }}</td>
        <td class="categorie">{{ article.categoriename }}</td>
        <td class="prix">{{ article.prix }} €</td>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useArticleStore } from "../stores/articles";
import { useCategorieStore } from "../stores/categories";
import { onMounted } from "vue";
import axios from "axios";

const categoriesStore = useCategorieStore();
const articlesStore = useArticleStore();
const img = "http://127.0.0.1:8000/";

onMounted(() => {
  fetchArticles();
  fetchCategories();
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

async function fetchCategories() {
  let r = await fetch("http://127.0.0.1:8000/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((e) => console.log(e));
  if (r) {
    categoriesStore.categories = r["hydra:member"];
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  height: 90vh;
}
img {
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.articles-icons {
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  width: 66%;
}

.background {
  background-color: rgb(255, 255, 255);
  padding-bottom: 1rem;
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 300px;
  align-items: center;
  box-shadow: 0px 11px 11px rgba(138, 138, 138, 0.18);
}

.ii {
  display: flex;
  flex-direction: column;
}

.nom {
  color: #7D7979;
}
.categorie {
  color: #848484
}
.prix {
  font-size: 17px;
  color: #7D7979;
}
</style>
