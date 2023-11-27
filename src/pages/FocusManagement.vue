<template>
  <div class="button-container">
    <button ref="captureButton">Capture</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const captureButton = ref<HTMLElement | null>(null);

const focusOnCaptureButton = () => {
  captureButton.value?.focus();
};

onMounted(() => focusOnCaptureButton());
</script>

<style>
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background-color: white;
}
</style>
