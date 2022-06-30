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
      <!-- <img src='http://127.0.0.1:8000/images/articles/62b479def1f76.png' alt="l'image"> -->
      <!-- <img src="http://127.0.0.1:8000{{article.img}}" alt=""> -->
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

onMounted(() => {
  fetchCategories();
})


//fonction qui permet de récuperer l'images envoyée
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

// async function envoi() {
//   // Récupération de l'image
//   let img = document.getElementById("picture").files[0];
//   // Création d'un formData obligatoire pour envoi de l'image
//   var formData = new FormData();
//   formData.append("img", img);
//   // Envoi des données sur l'url du serveur (mettez la votre) en POST en envoyant le formData contenant notre image et notre texte
//   axios
//     .post("http://localhost:8000/articles", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((resp) => {
//       console.log(resp);
//     })
//     .catch((err) => {
//       console.log(err.response);
//     });
// }

//transformer l'image en base64
//base 64 enregistrer chemin de l'image en bdd symfony créer un dossier eventlistener dans src
//pas v-model le fichier, mais garder en memoire qlq part, passer l'image en base 64 javascript, avec une image recuperer dans un formulaire
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
