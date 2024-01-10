<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import SitePanel from '../components/SitePanel.vue'
  import { onMounted, ref, type Ref } from 'vue';

  const route = useRoute()
  const categoryId: Ref<number> = ref(0)

  onMounted(() => {
    categoryId.value = Number(route.params.id)
  })
</script>

<template>
  <SitePanel v-if="categoryId" :categoryId="categoryId" />
</template>
