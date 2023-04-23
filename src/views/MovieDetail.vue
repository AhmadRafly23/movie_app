<template>
  <div class="movie-detail pt-4 pb-24">
    <div v-if="isLoading" class="flex justify-center">
      <Loading />
    </div>
    <div v-else v-for="(data, index) in getDetailMovie()" v-bind:key="index">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center space-y-4 mb-5">
          <h1 class="text-3xl font-semibold">
            {{ data.show.name }}
          </h1>
          <div
            class="image-detail h-80 w-60"
            :style="{ backgroundImage: `url(${data.show.image.original})` }"
          >
            <div
              class="w-full h-full flex justify-center items-center bg-black/50"
            >
              <a
                class="w-fit block rounded-full border-2 border-white p-3"
                v-bind:href="data.show.url"
              >
                <svg
                  class="play w-10 h-10"
                  aria-hidden="true"
                  fill="none"
                  stroke="white"
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
              </a>
            </div>
          </div>
          <div class="flex gap-4 py-2 text-sm bg-[#3c948b] rounded-md">
            <div
              class="flex flex-col items-center min-w-[100px] sm:min-w-[150px]"
            >
              <svg
                class="w-8 h-8 text-white"
                aria-hidden="true"
                fill="none"
                stroke="#f5cf49"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="text-white">
                {{ data.show.rating.average }}
              </p>
            </div>
            <div
              class="flex flex-col items-center min-w-[100px] sm:min-w-[150px]"
            >
              <svg
                class="w-8 h-8 text-white"
                aria-hidden="true"
                fill="none"
                stroke="#4f27fa"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="text-white">
                {{ data.show.schedule.days[0] }} at
                {{ data.show.schedule.time }}
              </p>
            </div>
            <div
              class="flex flex-col items-center min-w-[100px] sm:min-w-[150px]"
            >
              <svg
                class="w-8 h-8 text-white"
                aria-hidden="true"
                fill="none"
                stroke="#eab676"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p class="text-white">
                {{ data.show.language }}
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-[50%] flex flex-col items-center gap-3">
          <div
            class="flex flex-col items-center bg-gray-200 gap-1 p-4 rounded-lg text-center dark:bg-blue-500"
          >
            <h2 class="text-xl font-semibold">Show Info</h2>
            <p class="leading-6 text-sm">
              <span class="font-semibold">Genres:</span>
              {{ data.show.genres[0] }}
              {{ data.show.genres[1] }}
              {{ data.show.genres[2] }}
            </p>
            <p class="leading-6 text-sm">
              <span class="font-semibold">Type:</span>
              {{ data.show.type }}
            </p>
            <p class="leading-6 text-sm">
              <span class="font-semibold">Status:</span>
              {{ data.show.status }}
            </p>
            <p class="leading-6 text-sm">
              <span class="font-semibold">Official site:</span>
              {{ data.show.officialSite }}
            </p>
            <p class="leading-6 text-sm">
              <span class="font-semibold">Network name:</span>
              {{ data.show.network?.name }}
            </p>
          </div>
          <div class="flex flex-col items-center text-center">
            <h2 class="text-xl font-semibold mb-1">Plot Summary</h2>
            <p class="leading-6 text-sm">
              {{
                parser.parseFromString(data.show.summary, "text/html")
                  .documentElement.textContent
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import { useRoute } from "vue-router";
import { useFetch } from "@/utils/useFetch";

export default {
  name: "MovieDetail",
  components: {
    Loading,
  },
  setup() {
    const route = useRoute();

    const parser = new DOMParser();

    const { data, isLoading } = useFetch("/search/shows?q=girls");

    const getDetailMovie = () => {
      if (!data._object.data) return [];
      const filterData = data._object.data.filter((item) => {
        return item.show.id === parseInt(route.params.id);
      });
      return filterData;
    };

    return {
      data,
      isLoading,
      getDetailMovie,
      parser,
    };
  },
};
</script>