<script setup>
import { usePageStore } from '@/stores/page';
const pageStore = usePageStore();
await pageStore.fetchPage();
const page = pageStore._page;
</script>

<template>
  <h3 v-if="page">{{ page.title.rendered }}</h3>
</template>

<style scoped lang="scss">

</style>

