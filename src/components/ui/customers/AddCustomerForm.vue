<template>
  <div class="w-1/4 h-64 bg-white rounded-lg relative z-10">
    <form
      @submit.prevent="addCustomer"
      class="flex flex-col items-start justify-center w-full h-full p-4"
    >
      <div class="grid grid-cols-4 mb-3">
        <label for="name" class="col-span-1 text-gray-700">Name</label>
        <input
          name="name"
          id="name"
          class="border border-gray-500 col-span-3 rounded focus:outline-none px-4"
          type="text"
          required
        />
      </div>
      <div class="grid grid-cols-4 mb-3">
        <label for="mail" class="col-span-1 text-gray-700">Email</label>
        <input
          name="mail"
          id="mail"
          class="border border-gray-500 col-span-3 rounded focus:outline-none px-4"
          type="email"
          required
        />
      </div>
      <div class="grid grid-cols-4 mb-3">
        <label for="phone" class="col-span-1 text-gray-700">Phone</label>
        <input
          name="phone"
          id="phone"
          class="border border-gray-500 col-span-3 rounded focus:outline-none px-4"
          type="tel"
          required
        />
      </div>

      <input class="p-2 bg-purple-500 text-white rounded" type="submit" value="Submit" />
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
