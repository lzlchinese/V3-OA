<template>
  <ul>
    <!-- 遍历目录项 -->
    <li v-for="(item, index) in directoryList" :key="index">
      <a :href="item.link">{{ item.title }}</a>
      <span v-if="item.num">{{ item.num }}</span>
      <span v-if="item.date">{{ item.date }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

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
