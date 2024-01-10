<script setup lang="ts">
  import type { Site } from '@/types';
  import sendRequest from '@/utils/api';
  import { onMounted, ref, type Ref } from 'vue'
  import { onBeforeRouteUpdate } from 'vue-router';

  const props = defineProps<{ categoryId?: number }>()

  const sites: Ref<Site[]> = ref([])

  const loadSites = async (categoryId: number) => {
    const url: string = `${import.meta.env.VITE_API_URL}/devsites/sites${categoryId ? `/category/${categoryId}` : ''}`
    sites.value = await sendRequest<Site[]>(url)
  }

  onMounted(async () => {
    await loadSites(props.categoryId ?? 0)
  })

  onBeforeRouteUpdate(async (to, from) => {
    if (to.params.id !== from.params.id && to.params.id != '0') {
      await loadSites(Number(to.params.id))
    }
  })
</script>

<template>
  <div class="flex flex-wrap gap-10 justify-between after:content-[''] after:flex-auto w-[960px]">
    <a v-for="site in sites"
      :href="site.url" 
      target=”_blank”
      class="flex inline-block w-72 h-60 flex-col bg-slate-50 rounded-lg p-6 border border-gray-300 shadow-lg">
      <figure>
        <img class="rounded-md" :src="site.image_url" alt="" width="384" height="512" />
        <div class="text-slate-900 font-semibold mt-4">{{ site.name }}</div>
      </figure>
    </a>
  </div>
</template>

