<template>
  <AppDrag :item-name="nameEng">
    <span
      class="filling"
      :class="`filling--${nameEng}`"
    >
      {{ name }}
    </span>
  </AppDrag>
</template>

<script>
import AppDrag from '@/common/components/AppDrag.vue';

export default {
  name: 'SelectorItem',
  components: {
    AppDrag
  },
  props: {
    nameEng: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
