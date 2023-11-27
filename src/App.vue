<template>
  <ThemeSwitcher />
  <RouterLink to="/contact">Go to contact</RouterLink>
  <br />
  <div>Hello world, meet Uche Azubuko in Vueland.</div>
  <br />
  <FocusManagement />

  <button ref="openModalBtn" @click.prevent="openModal">Open modal</button>
  <AppModal :is-open="modalIsOpen" @close="closeModal" />
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import AppModal from "./components/AppModal.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
import FocusManagement from "./pages/FocusManagement.vue";

const modalIsOpen = ref(false);

const closeModal = () => {
  modalIsOpen.value = false;
};

const openModal = () => {
  modalIsOpen.value = true;
};

const openModalBtn = ref<HTMLElement | null>(null);

watch(
  () => modalIsOpen.value,
  (newVal, oldVal) => {
    if (newVal === false && oldVal === true) {
      openModalBtn.value?.focus();
    }
  }
);
</script>
