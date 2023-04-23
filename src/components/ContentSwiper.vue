<template>
  <div
    class="content-swiper p-20 h-full flex justify-center sm:justify-end items-end cursor-pointer"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div
      class="flex justify-center items-center gap-3 bg-primary max-w-[160px] w-full rounded-3xl py-4 hover:bg-violet-600"
    >
      <svg
        class="w-6 h-6 text-white"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <router-link :to="{ name: 'MovieDetail', params: { id } }"
        ><span class="text-white">Watch now</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentSwiper",
  props: {
    image: String,
    id: Number,
  },
};
</script>

<style></style>