<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

const search = ref("");
</script>

<template>
  <div class="search-main">
    <div>
      <div class="search-title">
        <img src="../../images/wslogn_wev8.png" alt="" /><span
          class="search-title-span"
          >微搜</span
        >
      </div>
      <div class="search-item">
        <el-input v-model="search"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
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

.el-input {
  width: 300px;
  margin-right: 5px;
}

.search-title {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.search-title-span {
  font-weight: 500;
  font-size: 30px;
  padding-left: 10px;
  color: rgb(0, 0, 0);
}
</style>
