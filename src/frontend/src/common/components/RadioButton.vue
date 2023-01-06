<template>
  <input
    type="radio"
    :name="radioName"
    :value="value"
    :checked="checked"
    class="visually-hidden"
    @change="$emit('сhangePrice', { value: $event.target.value, name: radioName })"
  />
</template>

<script>
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
  }
};
</script>

<style></style>
