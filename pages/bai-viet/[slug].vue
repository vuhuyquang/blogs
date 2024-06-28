<template>
  <div class="h-screen">
    Bài viết: {{ slug }} 
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;
</script>