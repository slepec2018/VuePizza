<template>
  <div
    :draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppDrag',
  props: {
    itemName: {
      type: String,
      required: true
    }
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = 'move';
      dataTransfer.dropEffect = 'move';
      dataTransfer.setData(
        'payload',
        JSON.stringify(this.itemName)
      );
    }
  }
};
</script>
