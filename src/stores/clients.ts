import { defineStore } from "pinia";

export const useClientStore = defineStore({
  id: "clients",
  state: () => ({
    clients: [],
    // error: ""
  }),
  persist: true,
  getters: {},
  actions: {},
});