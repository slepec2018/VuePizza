<template>
  <div
    :class="`pizza__filling pizza__filling--${name}`"
  />
</template>

<script>
export default {
  name: 'PizzaPicIngredient',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
