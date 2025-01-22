<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>
  搜索：<Input></Input>
</template>

<style scoped>

</style>
