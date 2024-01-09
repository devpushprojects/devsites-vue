<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'



const sendRequest = <T>(url: string, config: RequestInit = {}): Promise<T> => {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as T);
}


(async () => {
  try {
    //const user = await sendRequest<User>('/api/users/42');
  }
  catch (error) {
    // Handle any error happened.
  }
})()

</script>

<template>
  <div class="w-60 pl-10">
    <h2 class="font-extrabold text-xl pb-3">Categories</h2>
  </div>
</template>
