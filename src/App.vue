<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full max-w-7xl m-[auto] px-10">
    <header class="pt-6 pb-6">
      <h1 class="text-slate-900 font-extrabold text-4xl tracking-tight">DevSites</h1>
      <div class="mt-2 text-lg">Technologies and services related to PHP development</div>
    </header>
    <main class="flex flex-row pb-20">
      <RouterView />
    </main>
  </div>
</template>
