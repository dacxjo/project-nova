<template>
  <div class="w-1/4 h-64 bg-white rounded-lg relative z-10">
    <form @submit.prevent="addCustomer" class="flex items-center justify-center w-full h-full">
      <input type="submit" value="Close" />
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['customer-added'],
  setup(_props, { emit }) {
    function addCustomer() {
      emit('customer-added');
    }
    return {
      addCustomer,
    };
  },
});
</script>
