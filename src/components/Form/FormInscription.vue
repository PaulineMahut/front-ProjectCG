<template>
  <div class="form">
    <h1>Inscription</h1>
    <form class="form" @submit.prevent="Inscription">
      <label for="nom">Nom</label>
      <input
        type="text"
        name="nom"
        id="nom"
        v-model="newClient.nom"
        placeholder="Nom"
      />
      <label for="prenom">Prénom</label>
      <input
        type="text"
        name="prenom"
        id="prenom"
        v-model="newClient.prenom"
        placeholder="Prénom"
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="newClient.email"
        placeholder="Email"
      />
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="newClient.password"
        placeholder="Mot de passe"
      />
      <label for="adress">Adresse</label>
      <input
        type="text"
        name="adress"
        id="adress"
        v-model="newClient.adress"
        placeholder="Adresse"
      />
      <label for="ville">Ville</label>
      <input
        type="text"
        name="ville"
        id="ville"
        v-model="newClient.ville"
        placeholder="Ville"
      />
      <label for="pays">Pays</label>
      <input
        type="text"
        name="pays"
        id="pays"
        v-model="newClient.pays"
        placeholder="PAys"
      />
      <label for="telephone">Téléphone</label>
      <input
        type="number"
        name="telephone"
        id="telephone"
        v-model="newClient.telephone"
        placeholder="Téléphone"
      />
      <input type="submit" value="S'inscrire !" />
    </form>
  </div>
</template>

<script setup>
import { useClientStore } from "../../stores/clients";
// import { useTokenStore } from "../../stores/token";
import axios from "axios";

// const store = useTokenStore();
const clientStore = useClientStore();

const newClient = {
  nom: "",
  prenom: "",
  email: "",
  roles: ["Client"],
  password: "",
  adress: "",
  ville: "",
  pays: "",
  telephone: 0,
};

async function Inscription() {
  let r = await axios
    .post("http://127.0.0.1:8000/api/clients", newClient, {
      headers: {
        "Content-Type": "application/ld+json",
      },
    })
    .then((resp) => {
      return resp;
      // r.status a mettre dans le .then
    })
    .catch((e) => console.log(e));
  console.log(r);
  //   if (r.status == 400) {
  //     clientStore.error = "Champs invalide";
  //   }

  //   if (r.status == 422) {
  //     clientStore.error = "Unprocessable entity";
  //   }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
