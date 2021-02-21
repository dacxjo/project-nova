<template>
  <main
    class="w-full h-screen bg-purple-200 dark:bg-gray-800 grid grid-cols-8 gap-5 p-5 rounded-lg"
  >
    <div class="col-span-1">
      <app-side-bar></app-side-bar>
    </div>
    <div class="col-span-7">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppSideBar from '@/components/layout/AppSidebar.vue';

export default defineComponent({
  components: {
    AppSideBar,
  },
});
</script>
