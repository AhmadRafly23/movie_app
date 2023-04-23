<template>
  <header class="max-w-[1280px] mx-auto">
    <div class="flex justify-between items-center py-6 px-5 2xl:px-0">
      <div>
        <router-link to="/">
          <img src="@/assets/icon_movie.png" alt=""
        /></router-link>
      </div>
      <div v-if="width > 768" class="flex justify-center items-center">
        <div class="flex gap-8">
          <router-link to="/movies" class="hover:text-primary">All</router-link>
          <router-link to="/" class="hover:text-primary">Movies</router-link>
          <router-link to="/" class="hover:text-primary">Series</router-link>
          <router-link to="/" class="hover:text-primary">TV Shows</router-link>
          <router-link to="/" class="hover:text-primary">Cartoons</router-link>
        </div>
      </div>
      <div>
        <div v-if="width > 768">
          <svg
            v-if="theme === 'light'"
            class="w-6 h-6 cursor-pointer"
            @click="changeTheme"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6 cursor-pointer"
            @click="changeTheme"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <svg
          v-else
          class="w-6 h-6 cursor-pointer"
          @click="changeStatus"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    width: Number,
    changeStatus: Function,
    theme: String,
    changeTheme: Function,
  },
};
</script>
