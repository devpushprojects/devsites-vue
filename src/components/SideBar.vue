<script setup lang="ts">
  import { onMounted, ref, type Ref } from 'vue'
  import { onBeforeRouteUpdate, RouterLink, RouterView } from 'vue-router'
  import type { SiteCategory } from '../types/.'
  import sendRequest from '../utils/api'

  const props = defineProps<{ categoryId: number }>()

  const siteCategories: Ref<SiteCategory[]> = ref([])
  const currentCategoryId: Ref<number> = ref(props.categoryId)

  const normalLinkClass: string      = 'block w-[inherit] text-left p-3 text-slate-700'
  const normalLinkHoverClass: string = 'hover:data-normal:underline hover:data-normal:underline-offset-8'
  const activeLinkClass: string      = 'data-active:underline data-active:underline-offset-4 data-active:decoration-2 data-active:font-extrabold'
  const categoryClass: string        = `${normalLinkClass} ${normalLinkHoverClass} ${activeLinkClass}`

  onMounted(async () => {
    const url: string = `${import.meta.env.VITE_API_URL}/devsites/site-categories`
    siteCategories.value = await sendRequest<SiteCategory[]>(url)
  })

  onBeforeRouteUpdate(async (to, from) => {
    if (to.params.id !== from.params.id && to.params.id != '0') {
      currentCategoryId.value = Number(to.params.id)
    }
  })
</script>

<template>
  <div v-if="siteCategories.length > 0" class="w-60 pl-10">
    <h2 class="font-extrabold text-xl pb-3">Categories</h2>
    <RouterLink
      :to="{ name: 'home' }"
      :class="categoryClass"
      :data-state="props.categoryId === 0 ? 'active' : 'normal'">
      All
    </RouterLink>
    <RouterLink
      v-for="siteCategory in siteCategories"
      :to="{ name: 'category-sites', params: { id: siteCategory.id }}"
      :class="categoryClass"
      :data-state="props.categoryId === siteCategory.id ? 'active' : 'normal'">
      {{ siteCategory.name }}
    </RouterLink>
  </div>
</template>
