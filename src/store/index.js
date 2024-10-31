import { createStore } from "vuex";

export default createStore({
  state: {
    parts: [
      { name: "Фільтр повітря", carBrand: "Toyota", year: 2018 },
      { name: "Масляний фільтр", carBrand: "BMW", year: 2020 },
      { name: "Свічка запалювання", carBrand: "Audi", year: 2019 },
      { name: " Водяний насос", carBrand: "Mercedes", year: 2023 },
      { name: "Радіатори", carBrand: "", year: 2003 },
      { name: "Рейки", carBrand: "Nissan", year: 2016 },
    ],
  },
  mutations: {
    addPart(state, part) {
      state.parts.push(part);
    },
    removePart(state, partId) {
      state.parts = state.parts.filter((part) => part.id !== partId);
    },
  },
  actions: {
    addPart({ commit }, part) {
      commit("addPart", part);
    },
    removePart({ commit }, partId) {
      commit("removePart", partId);
    },
  },
  getters: {
    filteredParts: (state) => (query) => {
      return state.parts.filter(
        (part) =>
          part.name.toLowerCase().includes(query.toLowerCase()) ||
          part.carBrand.toLowerCase().includes(query.toLowerCase()) ||
          part.year.toString().includes(query)
      );
    },
  },
});
