import { defineStore } from "pinia";
import { useCategorieStore } from "./categories";

const categoriesStore = useCategorieStore();

export const useArticleStore = defineStore({
  id: "articles",
  state: () => ({
    articles: [],
    nom: [],
    // error: ""
  }),
  persist: true,
  getters: {
    getArticles: (state) =>
    state.articles.map((article: articleType) => {
      categoriesStore.categories.map((categorie: categorieType) => {
        if (article.categorie == categorie["@id"]) {
          article.categoriename = categorie.nom;
        }
      });
    }),
    getArticle: (state) =>
    state.articles.map((article: articleType) => {
      categoriesStore.categorie.map((categorie: categorieType) => {
        if (article.categorie == categorie["@id"]) {
          article.categoriename = categorie.nom;
        }
      });
    }),
  },
  actions: {
  },
});

type articleType = { categorie: string; categoriename?: string };
type categorieType = { nom: string; "@id": string };
