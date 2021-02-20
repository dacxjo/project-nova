<template>
  <div
    v-if="showDialog"
    class="w-full h-full flex items-center justify-center absolute top-0 left-0"
  >
    <div
      role="button"
      @click.prevent="emitCloseDialog"
      class="absolute w-full h-full bg-purple-800 top-0 left-0 bg-opacity-50"
    ></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppDialog',
  props: {
    showDialog: {
      type: Boolean,
    },
  },
  setup(_props, { emit }) {
    function emitCloseDialog() {
      emit('close-dialog');
    }
    return {
      emitCloseDialog,
    };
  },
});
</script>
