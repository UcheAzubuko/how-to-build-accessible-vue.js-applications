<template>
  <ul class="visually-hidden" :aria-live="ariaLive">
    <li v-for="(toastInfo, index) in toasts" :key="index">
      {{ toastInfo }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

type ToastDetail = {
  id?: string;
  title: string;
  description: string;
  type: "error" | "success" | "";
  duration: number;
};

const ariaLive = ref<"off" | "assertive" | "polite">("polite");

const toasts = ref<ToastDetail[]>([]);

const showToast = (toastInfo: ToastDetail) => {
  // Your business logic for deleting a post here
  toasts.value.push({
    ...toastInfo,
    id: (Date.now() + Math.random()).toString(36),
  });
};

onMounted(() =>
  showToast({
    title: "Hello world",
    description: "Uche Azubuko teach accessibility",
    type: "success",
    duration: 5000,
  })
);
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
</style>
