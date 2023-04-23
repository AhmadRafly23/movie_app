<template>
  <div class="flex flex-col items-center py-5">
    <div class="text-input flex items-center">
      <input type="text" placeholder="Search" v-model="searchQuery" />
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div v-if="isLoading" class="mt-6 flex justify-center">
      <Loading />
    </div>
    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 lg:px-0 pt-8 pb-20"
    >
      <div
        class="rounded-3xl"
        v-for="(item, index) in searchMovies"
        v-bind:key="index"
      >
        <router-link
          :to="{ name: 'MovieDetail', params: { id: item.show.id } }"
        >
          <CardMovie
            :data="item"
            :handleLoadImage="handleLoadImage"
            :loadImage="loadImage"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import Loading from "@/components/Loading.vue";
import { computed, ref } from "vue";
import { useFetch } from "@/utils/useFetch";

export default {
  name: "MovieList",
  components: {
    CardMovie,
    Loading,
  },
  setup() {
    const searchQuery = ref("");
    const loadImage = ref(false);

    const handleLoadImage = () => {
      loadImage.value = true;
    };

    const { data, isLoading } = useFetch("/search/shows?q=girls");

    const searchMovies = computed(() => {
      return data.value.filter((item) => {
        return (
          item.show.name
            .toLowerCase()
            .indexOf(searchQuery.value.toLowerCase()) != -1
        );
      });
    });

    return {
      data,
      isLoading,
      searchQuery,
      searchMovies,
      handleLoadImage,
      loadImage,
    };
  },
};
</script>

<style></style>