<template>
  <form class="form">
    <div class="form-control">
      <label for="email">Email</label>
      <input
        ref="inputOne"
        type="email"
        name="email"
        id="email"
        @keypress.enter="setFocusOnSecondInputField"
      />
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input ref="inputTwo" type="password" name="password" id="password" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

// Initializing the first input field then setting focus to it when page gets mounted
const inputOne = ref<HTMLElement | null>(null);

const inputTwo = ref<HTMLElement | null>(null);

onMounted(() => inputOne.value?.focus());

// Function to set focus to the second input field when the enter key is pressed
const setFocusOnSecondInputField = () => inputTwo.value?.focus();
</script>
