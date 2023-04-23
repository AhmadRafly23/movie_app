<template>
  <img
    class="h-[400px] w-full object-cover rounded-3xl hover:scale-105 hover:border-[4px] hover:border-blue-600 hover:duration-[0.3s] hover:ease-linear"
    v-bind:src="data.show.image.original"
    @load="handleLoadImage"
    :style="loadImage ? 'opacity: 1' : 'opacity: 0'"
    alt=""
  />
  <div class="flex justify-between mt-4">
    <p class="font-semibold text-lg">{{ data.show.name }}</p>
    <div class="flex items-center space-x-1">
      <svg
        class="w-4 h-4 text-gray-500"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#6b7280"
        ></path></svg
      ><span class="font-semibold text-sm text-gray-500">{{
        data.show.rating.average
      }}</span>
    </div>
  </div>
  <p class="text-xs">
    {{ data.show.genres[0] }}
    {{ data.show.genres[1] }}
    {{ data.show.genres[2] }}
  </p>
</template>

<script>
export default {
  name: "CardMovie",
  props: {
    data: Object,
    handleLoadImage: Function,
    loadImage: Boolean,
  },
};
</script>

<style>
</style>