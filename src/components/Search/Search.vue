<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

const search = ref("");
</script>

<template>
  <div class="search-main">
    <div class="search-item">
      <el-input v-model="search"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<style scoped>
.search-main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .search-item {
  display: flex;
  justify-content: center;
} */

.el-input {
  width: 300px;
  margin-right: 5px;
}
</style>
