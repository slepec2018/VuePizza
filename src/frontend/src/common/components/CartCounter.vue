<template>
  <div
    class="counter"
    :class="countclass"
  >
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="$emit('changeCount', {id: itemid, diffCount: -1})"
    >
      <span class="visually-hidden">
        Меньше
      </span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="resultcount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus counter__button--orange"
      @click="$emit('changeCount', {id: itemid, diffCount: 1})"
    >
      <span class="visually-hidden">
        Больше
      </span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'CartCounter',

  props: {
    countclass: {
      type: String,
      required: true
    },
    resultcount: {
      type: Number,
      required: true
    },
    itemid: {
      type: Number,
      required: true
    }
  },

  data() {
    return {

    };
  }
};
</script>

<style></style>
