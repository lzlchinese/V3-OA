import { defineStore } from "pinia";

export const useCounterStore = defineStore("loginState", {
  state: () => {
    return { level: 0 };
  },
  // getters: {
  //   doubleCount: (state) => {
  //     return state.count * 2;
  //   }
  // },
  actions: {
    setLevel(nV) {
      this.level = nV;
    },
  },
});
