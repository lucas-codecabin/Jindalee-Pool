<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    url: "/",
  },
  {
    label: "Operating Hours",
    icon: "pi pi-clock",
    url: "#operating-hours",
  },
  {
    label: "Entry Fees",
    icon: "pi pi-dollar",
    url: "#entry-fees",
  },
]);
</script>

<template>
  <div class="sticky top-0 z-50">
    <div
      class="card absolute top-0 left-0 w-full flex bg-white rounded-bl-[40px] md:rounded-bl-full h-20 items-center"
    >
      <div
        class="md:container flex items-center justify-between w-[90%] mx-auto relative"
      >
        <NuxtLink to="/"
          ><img src="/assets/images/city-logo.png" alt="City Logo" class="w-16"
        /></NuxtLink>
        <Menubar
          :model="items"
          class="absolute right-0 justify-end lg:justify-center lg:left-1/2 transform !border-none lg:-translate-x-1/2 w-[70%]"
        />
      </div>
    </div>
  </div>
</template>
