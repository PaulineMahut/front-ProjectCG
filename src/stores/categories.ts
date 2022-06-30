import { defineStore } from "pinia";

export const useCategorieStore = defineStore({
  id: "categories",
  state: () => ({
    categories: [],
    categorie: [],
  }),
  persist: true,
  getters: {
    getCategories: (state) => state.categories,
    getCategorie: (state) => state.categorie,
  },
  actions: {},
});
