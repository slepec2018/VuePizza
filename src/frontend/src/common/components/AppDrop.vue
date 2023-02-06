<template>
  <div
    @drop.stop="onDrop"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'AppDrop',
  methods: {
    ...mapMutations('Builder', ['dropRefreshActiveIngridients']),
    onDrop({ dataTransfer }) {
      const payload = dataTransfer.getData('payload');
      if (payload) {
        const transferData =
            JSON.parse(dataTransfer.getData('payload'));
        // this.$emit('drop', transferData);
        this.dropRefreshActiveIngridients(transferData);
      }
    }
  }
};
</script>
