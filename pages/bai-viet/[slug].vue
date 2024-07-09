<template>
  <div class="space-y-16">
    <div class="container mx-auto lg:px-24 md:px-16 sm:px-8 px-4 pt-16 space-y-16">
      <div class="flex flex-col lg:flex-row cursor-pointer mb-6 h-[500px]">
        <div
          class="w-full lg:w-7/12 bg-yellow-100 rounded-l-lg lg:rounded-l-2xl shadow-lg mb-6 lg:mb-0 overflow-hidden h-auto">
          <img class="h-full w-full rounded-l-lg lg:rounded-l-2xl zoom-on-hover"
            src="https://wallpaperaccess.com/full/14736.jpg" alt="image">
        </div>
        <div
          class="w-full lg:w-5/12 rounded-r-lg lg:rounded-r-2xl px-3 sm:px-3 md:px-4 lg:px-6 xl:px-6 py-[1.5rem] flex flex-col gap-5 lg:gap-10 shadow-lg">
          <h1
            class="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#000000cc] hover:text-[#000000] transition delay-[45ms]">
            Trên tay Reverb, official WebSocket
            server từ Laravel</h1>
          <p class="text-sm lg:text-base xl:text-lg text-[#475467]">Cách đây không lâu, phiên bản Laravel 11 đã chính
            thức
            ra mắt. Đi với đó là Reverb, package sẽ mang đến giao tiếp WebSocket cho các ứng dụng Laravel hoàn toàn bằng
            PHP (không cần cài đặt thêm extension hoặc sử dụng các stack khác</p>
          <div class="flex justify-between text-xs lg:text-sm">
            <div class="flex justify-between gap-2 items-center xl:flex">
              <img height="26" width="26" class="rounded-full"
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/18810/631175d26916f.png" alt="avatar">
              <span class="text-[#292929] text-[10px] lg:text-sm xl:text-sm">Vũ Huy Quang</span>
            </div>
            <div class="flex justify-between gap-5 text-[#979797] items-center text-[10px] lg:text-sm xl:text-sm">
              <span class="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">Công nghệ</span>
              <span>10 tháng trước</span>
              <span>3 phút đọc</span>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        <div v-for="post in item.data.data" :key="post.id"
          class="flex flex-col cursor-pointer gap-3 p-4 border-2 border-gray-100 rounded-3xl">
          <div class="h-auto max-h-56 overflow-hidden rounded-2xl">
            <img class="h-full w-full zoom-on-hover rounded-2xl" src="https://wallpaperaccess.com/full/14736.jpg"
              alt="image">
          </div>
          <div class="px-1 flex flex-col gap-3">
            <div
              class="text-sm lg:text-base xl:text-lg font-bold text-[#475467] hover:text-[#000000cc] transition delay-[45ms]">
              {{ post.title }}</div>
            <div class="text-[10px] lg:text-[12px] xl:text-[14px] text-[#475467] line-clamp-2">{{ post.short_content }}
            </div>
            <div class="flex justify-start gap-5 text-[#979797] items-center text-[7px] lg:text-[8px] xl:text-[10px]">
              <span class="rounded-full bg-[#f2f2f2] px-2 py-1 flex justify-between items-center">{{ post.category_name }}</span>
              <span>{{ formatDate(post.created_at) }}</span>
              <span>{{ post.reading_time }} phút đọc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="full-width-container h-[410px] bg-[#e1e5ea] px-[50px] lg:px-[280px] md:px-[180px] sm:px-[80px] xs:px-[30px] py-[80px] mt-10">
      <img class="w-full h-full" src="https://wallpaperaccess.com/full/14736.jpg" alt="image">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from '~/composables/ultils';

const route = useRoute();
const item = await getListPost(1, 20, null);

useHead({
  title: 'Bài viết',
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>