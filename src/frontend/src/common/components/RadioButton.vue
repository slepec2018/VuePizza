<template>
  <input
    type="radio"
    :name="radioName"
    :value="value"
    :checked="checked"
    class="visually-hidden"
    @change="changeOptionPrice( { value: $event.target.value, name: radioName })"
  />
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'RadioButton',
  props: {
    value: {
      type: String,
      required: true
    },
    radioName: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapMutations('Builder', ['changeOptionPrice'])
  }
};
</script>

<style></style>
