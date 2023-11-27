<template>
  <FocusTrap
    :active="isOpen"
    v-if="isOpen"
    :initial-focus="() => $refs.closeBtn"
  >
    <div tabindex="0" @keyup.esc="close" class="modal-container">
      <div class="modal" role="dialog">
        <header class="modal-header">Login</header>
        <main>
          <form class="modal-form">
            <div class="form-control">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div class="form-control">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <div class="form-btns-wrapper">
              <button ref="closeBtn" @click.prevent="close">Close</button>
              <button @click.prevent="submitForm">Submit form</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  </FocusTrap>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const emits = defineEmits(["close"]);

defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
});

const close = () => {
  emits("close");
};

const submitForm = () => {
  alert("Hello, your form has been submitted!");
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 20rem;
  transform: translateY(-2rem);
  margin: 0 auto;
  padding: 1.25rem;
  z-index: 90;
  background-color: #fff;
}

.modal-header {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.form-control {
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.form-control label {
  margin-bottom: 0.25rem;
  width: 100%;
  display: block;
  flex-basis: 100%;
  text-align: left;
}

.form-control input {
  flex-basis: 100%;
  padding: 0.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
}

.form-btns-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
}
</style>
