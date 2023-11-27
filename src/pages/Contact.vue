<template>
  <a href="#navigation-info" ref="skipLink" class="skip-link"
    >Skip to main content</a
  >
  <ul id="navigation-info" class="visually-hidden" :aria-live="ariaLive">
    <li v-for="(info, index) in infoToRead" :key="index">{{ info }}</li>
  </ul>
  <h1>Contact Page</h1>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const ariaLive = ref<"off" | "assertive" | "polite">("assertive");

const infoToRead = ref<string[]>([]);

const speak = (info: string) => {
  if (info) {
    infoToRead.value.push(info);
  }
};

const skipLink = ref<HTMLElement | null>(null);

watch(
  () => route.path,
  () => {
    document.title = "Contact";
    skipLink.value?.focus();
  },
  { immediate: true }
);

onMounted(() => speak("You are now on contact page"));
</script>

<style>
.visually-hidden {
  position: absolute;
  margin: -1px;
  border: 0;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.skip-link {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}

.skip-link:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
