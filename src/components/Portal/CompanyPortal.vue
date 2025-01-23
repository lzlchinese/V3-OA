<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>我是公司门户</template>

<style scoped></style>
