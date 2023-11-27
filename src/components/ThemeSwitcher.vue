<template>
  <form class="theme-switcher">
    <label for="theme-switcher">Theme Switcher</label>
    <input type="checkbox" id="theme-switcher" v-model="isDarkTheme" />
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const isDarkTheme = ref(false);

watch(
  isDarkTheme,
  () => {
    document.body.classList.toggle("light");
  },
  { immediate: true }
);
</script>

<style>
.light {
  background: #fff;
  color: #1e202a;
  transition: all 0.3s;
}

label,
input {
  cursor: pointer;
}
</style>
