<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>我是新建流程</template>

<style scoped></style>
