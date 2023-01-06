<template>
  <div class="content__result">
    <p>Итого: {{ totalPrice }} ₽</p>
    <button
      type="button"
      class="button button--disabled"
      disabled
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
export default {
  name: 'PriceCounter',
  props: {
    totalPrice: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
