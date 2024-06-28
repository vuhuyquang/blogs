<template>
  <div class="h-screen">
    Trang chủ
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Trang chủ',
  meta: [
    { name: 'description', content: 'Đây là blog cá nhân của tôi, nơi tôi chia sẻ về cuộc sống, công nghệ và những điều thú vị.' },
    { name: 'keywords', content: 'Blog cá nhân về cuộc sống, công nghệ, chia sẻ kinh nghiệm' },
    { name: 'author', content: 'Vũ Huy Quang' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'language', content: 'vi' },
  ],
  script: [
    { innerHTML: 'console.log("Chào mừng bạn đến với blog của %cVũ Huy Quang!", "color: #fdcb6e; font-size: 16px;")' }
  ]
});
</script>