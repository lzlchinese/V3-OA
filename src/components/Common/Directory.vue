<template>
  <ul>
    <!-- 遍历目录项 -->
    <li v-for="(item, index) in directoryList" :key="index">
      <a :href="item.link">{{ item.title }}</a>
      <span>{{ item.date }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
// const directoryList = ref([
//   { title: "章节 1", link: "#chapter1", date: "2025-01-23" },
//   { title: "章节 2", link: "#chapter2", date: "2025-01-22" },
//   { title: "章节 3", link: "#chapter3", date: "2025-01-21" },
//   { title: "章节 4", link: "#chapter4", date: "2025-01-20" },
//   { title: "章节 1", link: "#chapter1", date: "2025-01-23" },
//   { title: "章节 2", link: "#chapter2", date: "2025-01-22" },
//   { title: "章节 3", link: "#chapter3", date: "2025-01-21" },
//   { title: "章节 4", link: "#chapter4", date: "2025-01-20" },
//   { title: "章节 1", link: "#chapter1", date: "2025-01-23" },
//   { title: "章节 2", link: "#chapter2", date: "2025-01-22" },
//   { title: "章节 3", link: "#chapter3", date: "2025-01-21" },
//   { title: "章节 4", link: "#chapter4", date: "2025-01-20" },
//   { title: "章节 3", link: "#chapter3", date: "2025-01-21" },
//   { title: "章节 4", link: "#chapter4", date: "2025-01-20" },
//   { title: "章节 1", link: "#chapter1", date: "2025-01-23" },
//   { title: "章节 2", link: "#chapter2", date: "2025-01-22" },
//   { title: "章节 3", link: "#chapter3", date: "2025-01-21" },
//   { title: "章节 4", link: "#chapter4", date: "2025-01-20" },
// ]);

defineProps({
  directoryList: Array
});
</script>

<style scoped>
ul {
  /* list-style-type: none; */
  padding: 0 15px;
  margin: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}

a {
  color: #000;
  text-decoration: none;
}

span {
  margin-left: 10px;
  color: gray;
}
</style>
