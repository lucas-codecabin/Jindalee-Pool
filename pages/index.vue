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
  <h1>Hello</h1>
  {{ location }}
</template>
