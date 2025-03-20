import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    level: null,
  }),
  getters: {
    getLevel: (state) => {
      return state.level;
    }
  },
  actions: {
    setLevel(nV) {
      this.level = nV;
    },
  },
  // 启用持久化
  persist: {
    key: 'store', // 存储的 key
    storage: sessionStorage, // 使用 sessionStorage 代替 localStorage
    paths: ['level'], // 只持久化 level 字段
    beforeRestore(ctx) {
      console.log('Before restore:', ctx);
    },
    afterRestore(ctx) {
      console.log('After restore:', ctx);
    },
  },
});
