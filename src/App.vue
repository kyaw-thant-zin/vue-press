<script setup>
import './assets/scss/top-page.scss';
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import './assets/scss/top-page.scss';

</script>

<template>
  <Header></Header>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade">
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
  <Footer></Footer>
</template>

<style scoped lang="scss">

</style>
