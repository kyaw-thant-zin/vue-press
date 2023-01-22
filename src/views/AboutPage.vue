<script setup>
import { usePageStore } from '@/stores/page';
const pageStore = usePageStore();
await pageStore.fetchPage();
const page = pageStore._page;
</script>

<template>
  <h3>{{ page.title.rendered }}</h3>
</template>

<style scoped lang="scss">

</style>
