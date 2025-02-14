<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.title {
  border-left: 5px solid rgb(0, 141, 246);
  text-indent: 0.5em;
  font-size: 20px;
  color: #000;
  height: 30px;
  line-height: 30px;
}
</style>
