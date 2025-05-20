<script setup>
const location = ref(null);

const { data: locationDetails, error: locationDetailsError } = await useFetch(
  "/api/locations"
);

watchEffect(() => {
  if (locationDetailsError.value) {
    console.error("Error fetching location:", locationDetailsError.value);
  }

  if (locationDetails.value) {
    location.value = locationDetails.value;
  }
});
</script>

<template>
  <main>
    <section
      class="bg-gradient-to-r from-sky-950 to-sky-800 flex items-center justify-center text-white text-center"
    >
      <div
        class="container mx-auto mt-20 justify-center items-center flex flex-col md:flex-row md:gap-16"
      >
        <div class="w-[90%] md:w-[60%] py-8">
          <div class="flex flex-col gap-8">
            <h1 class="text-6xl text-left font-title font-bold text-sky-400">
              Welcome to <br />{{ location.name }}
            </h1>
            <p class="text-justify">{{ location.site_description }}</p>
            <NuxtLink
              :to="`http://google.com/maps/place/${location.street},+${location.suburb}+${location.state}+${location.zip_code}`"
              target="_blank"
              class="bg-sky-400 text-white px-6 py-2 rounded-full w-fit self-center hover:bg-white hover:text-sky-400 transition-colors"
              ><div class="flex gap-2 items-center">
                <i class="pi pi-map-marker"></i>Directions
              </div></NuxtLink
            >
          </div>
        </div>

        <div class="w-[90%] md:w-[40%] py-8">
          <div class="rounded-lg shadow-lg">
            <div
              class="p-4 flex flex-col gap-2 bg-white text-black rounded-t-2xl shadow-md"
            >
              <div class="flex gap-4 items-center">
                <i class="pi pi-map-marker text-sky-400"></i>
                <NuxtLink
                  :to="`http://google.com/maps/place/${location.street},+${location.suburb}+${location.state}+${location.zip_code}`"
                  target="_blank"
                  ><p class="hover:text-sky-400 transition-colors">
                    {{ location.street }}, {{ location.suburb }},
                    {{ location.zip_code }}, {{ location.state }}
                  </p></NuxtLink
                >
              </div>

              <div class="flex gap-4 items-center">
                <i class="pi pi-phone text-sky-400 transition-colors"></i>
                <NuxtLink
                  :to="`tel:${location.phone}`"
                  class="hover:text-sky-400"
                  >{{ location.phone }}</NuxtLink
                >
              </div>

              <div class="flex gap-4 items-center">
                <i class="pi pi-envelope text-sky-400"></i>
                <NuxtLink
                  :to="`mailto:${location.email}`"
                  class="hover:text-sky-400 transition-colors"
                  >{{ location.email }}</NuxtLink
                >
              </div>
            </div>

            <img
              src="/assets/images/home-card.jpg"
              alt="Miami Indoor Pool"
              class="rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-stone-50 py-20">
      <div class="container mx-auto flex flex-col gap-8 w-[90%] md:w-[100%]">
        <a
          id="operating-hours"
          class="text-5xl font-title font-bold text-sky-400 scroll-mt-20"
        >
          Operating Hours
        </a>

        <DataTable
          :value="location.operating_hours"
          tableStyle="width: 100%"
          stripedRows
        >
          <Column field="Day" header="Day"></Column>
          <Column field="Open" header="Open"></Column>
          <Column field="Close" header="Close"></Column>
        </DataTable>
      </div>
    </section>

    <section class="bg-stone-50 py-20">
      <div class="container mx-auto flex flex-col gap-8 w-[90%] md:w-[100%]">
        <a
          id="entry-fees"
          class="text-5xl font-title font-bold text-sky-400 scroll-mt-20"
        >
          Entry Fees
        </a>

        <DataTable
          :value="location.entry_fees"
          tableStyle="width: 100%"
          stripedRows
        >
          <Column field="Category" header="General Admission"></Column>
          <Column field="Price" header="Price"></Column>
        </DataTable>
      </div>
    </section>
  </main>
</template>
