<template>
  <div class="relative min-h-screen">
    <div v-if="status" class="bg-black/50 w-full h-screen absolute z-50">
      <div class="bg-secondary w-1/2 h-full p-6">
        <svg
          class="w-6 h-6 cursor-pointer mb-3"
          @click="changeStatus"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
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
        <div class="flex flex-col gap-4 mt-3">
          <router-link to="/movies" class="hover:text-white">All</router-link>
          <router-link to="/" class="hover:text-white">Movies</router-link>
          <router-link to="/" class="hover:text-white">Series</router-link>
          <router-link to="/" class="hover:text-white">TV Shows</router-link>
          <router-link to="/" class="hover:text-white">Cartoons</router-link>
        </div>
      </div>
    </div>
    <Header
      :width="width"
      :changeStatus="changeStatus"
      :theme="theme"
      :changeTheme="changeTheme"
    />
    <main class="max-w-[1280px] mx-auto">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./_child/Header.vue";
import Footer from "./_child/Footer.vue";
import { useBreakpoint } from "@/utils/useBreakpoint";
import { onMounted, onUpdated, ref } from "vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  setup() {
    const { width } = useBreakpoint();

    const status = ref(false);
    const theme = ref(localStorage.getItem("user-theme") || "dark");

    const changeStatus = () => {
      status.value = !status.value;
    };

    const changeTheme = () => {
      if (theme.value === "dark") {
        theme.value = "light";
      } else {
        theme.value = "dark";
      }
    };

    onMounted(() => {
      document.body.classList.add(theme.value);
    });

    onUpdated(() => {
      if (width.value > 768) {
        status.value = false;
      }
      if (status.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      if (theme.value === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("user-theme", theme.value);
      } else {
        document.body.classList.remove("dark");
      }
      if (theme.value === "light") {
        document.body.classList.add("light");
        localStorage.setItem("user-theme", theme.value);
      } else {
        document.body.classList.remove("light");
      }
    });

    return {
      width,
      status,
      changeStatus,
      theme,
      changeTheme,
    };
  },
};
</script>