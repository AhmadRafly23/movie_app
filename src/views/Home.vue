<template>
  <div class="pb-[116px] px-5 2xl:px-0">
    <section class="py-6">
      <h1 class="text-4xl font-semibold mb-5">
        Recomended <span class="font-normal">to you</span>
      </h1>
      <div class="w-full">
        <swiper
          :autoplay="{
            delay: 3500,
          }"
          :loop="true"
          :slides-per-view="1"
          :pagination="{
            dynamicBullets: true,
          }"
          :modules="modules"
          class="h-[500px] rounded-3xl"
        >
          <swiper-slide v-for="(item, index) in data" v-bind:key="index">
            <ContentSwiper
              :image="item.show.image.original"
              :id="item.show.id"
            />
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section>
      <div class="flex justify-between items-center py-5">
        <h2 class="text-3xl font-semibold">Most popular</h2>
        <router-link to="/movies"
          ><p
            class="text-primary font-semibold cursor-pointer hover:text-secondary"
          >
            View all
          </p></router-link
        >
      </div>
      <div v-if="isLoading" class="flex justify-center mt-6">
        <Loading />
      </div>
      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <div
          class="rounded-3xl"
          v-for="(item, index) in sliceData(data)"
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
    </section>
  </div>
</template>

<script>
import ContentSwiper from "@/components/ContentSwiper.vue";
import CardMovie from "@/components/CardMovie.vue";
import Loading from "@/components/Loading.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import { useFetch } from "@/utils/useFetch";
import { ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    ContentSwiper,
    CardMovie,
    Loading,
  },
  setup() {
    const { data, isLoading } = useFetch("/search/shows?q=girls");

    const loadImage = ref(false);

    const handleLoadImage = () => {
      loadImage.value = true;
    };

    const sliceData = (value) => {
      if (!value) return;
      const sortData = value.sort((a, b) => {
        return b.show.rating.average - a.show.rating.average;
      });

      return sortData.slice(0, 4);
    };

    return {
      modules: [Autoplay, Pagination],
      data,
      isLoading,
      sliceData,
      handleLoadImage,
      loadImage,
    };
  },
};
</script>