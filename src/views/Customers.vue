<template>
  <section class="w-full h-full bg-gray-200 rounded-xl shadow-lg">
    <nav class="w-full h-20 bg-white rounded-t-lg flex items-center p-4">
      <button @click="addCustomer" class="bg-purple-600 p-3 rounded-md text-white">
        Add customer
      </button>
    </nav>
    <app-dialog
      id="add-customer-form-dialog"
      @close-dialog="showCustomerForm = false"
      :show-dialog="showCustomerForm"
    >
      <add-customer-form @customer-added="showCustomerForm = false"></add-customer-form>
    </app-dialog>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppDialog from '@/components/ui/AppDialog.vue';
import AddCustomerForm from '@/components/ui/customers/AddCustomerForm.vue';

export default defineComponent({
  components: {
    AppDialog,
    AddCustomerForm,
  },
  setup() {
    const showCustomerForm = ref(false);

    function addCustomer() {
      showCustomerForm.value = true;
    }

    return {
      showCustomerForm,
      addCustomer,
    };
  },
});
</script>
