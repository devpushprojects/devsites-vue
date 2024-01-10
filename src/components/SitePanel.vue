<script setup lang="ts">
  import SiteList from './SiteList.vue'
  import SideBar from './SideBar.vue'

  const props = defineProps<{ categoryId?: number }>()
</script>

<template>
  <SiteList :categoryId="props.categoryId ?? 0" />
  <SideBar :categoryId="props.categoryId ?? 0" />
</template>

