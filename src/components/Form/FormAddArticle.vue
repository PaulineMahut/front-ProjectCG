<template>
  <div>
    <form @submit.prevent="addarticle">
      <label for="nom">Nom de l'article</label>
      <input type="text" name="nom" id="nom" v-model="newArticle.nom"/>
      <div>
          <label for="categorie">Catégorie</label>
          <select
            name="categorie-select"
            id="categorie-select"
            v-model="newArticle.categorie"
          >
            <option
              v-for="categorie in categoriesStore.categories"
              :key="categorie.id"
              :value="categorie['@id']"
            >
              {{ categorie.nom }}
            </option>
          </select>
        </div>
      <label for="description">Description de l'article</label>
      <input type="text" name="description" id="description" v-model="newArticle.description"/>
      <label for="prix">Prix</label>
      <input type="number" name="prix" id="prix" v-model="newArticle.prix"/>
      <label for="longueur">Longueur</label>
      <input type="text" name="longueur" id="longueur" v-model="newArticle.longueur"/>
       <label for="largeur">Largeur</label>
      <input type="text" name="largeur" id="largeur" v-model="newArticle.largeur"/>
      <label for="image">pic</label>
      <input type="file" name="image" id="image">
      <input type="submit" value="Ajouter" />
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { useCategorieStore } from "../../stores/categories";
import { useArticleStore } from "../../stores/articles";
import { onMounted } from "@vue/runtime-core";

const articlesStore = useArticleStore();
const categoriesStore = useCategorieStore();

//constante NewArticle avec les propriétés de base de l'article
const newArticle = {
  nom: "",
  prix: 0,
  longueur: "",
  largeur: "",
  image: "",
  description: "", 
  categorie: ""
};

//lance les fonctions au chargement de la page
onMounted(() => {
  fetchCategories();
})


//fonction qui permet de lire l'images envoyée, en back, elle sera convertie en base64
async function addarticle() {
  let img = document.getElementById("image");
  let reader = new FileReader()

  reader.onloadend = function() {
    if (reader.result == '') {
      return
    }

    console.log(reader.result)
    newArticle.image = reader.result
    sendArticleToApi()
  }
  reader.readAsDataURL(img.files[0])
}

//fonction qui envoit le nouvel article à l'API
async function sendArticleToApi() {
    let r = await axios
    .post("http://127.0.0.1:8000/api/articles", newArticle, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    })
    .then((resp) => {
      return resp;
    })
    .catch((e) => console.log(e));
  console.log(r);
}

//fonction qui récupère les catégories
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
form {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin-left: auto;
  gap: 1rem;
  margin-right: auto
}
form input{
  padding: 1rem;
  border: none;
  border-bottom: solid rgba(0, 0, 0, 0.378) 0.1rem ;
}
form input[type="submit"]{
  padding: 1rem;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  transition: 0.5s
}
form input[type="submit"]:hover{
  background-color: rgba(0, 0, 0, 0.79);
}
form input[type="submit"]:active{
  background-color: rgba(0, 0, 0, 0.583);
}
</style>
