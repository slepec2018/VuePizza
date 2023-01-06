<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="$emit('ing-min', {count: - 1, ing: name})"
    >
      <span class="visually-hidden"> Меньше </span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="actualizationValue"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="$emit('ing-max', {count: 1, ing: name })"
    >
      <span class="visually-hidden"> Больше </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ItemCounter',
  props: {
    name: {
      type: String,
      required: true
    },
    dataorder: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    actualizationValue() {
      const findIng = this.dataorder.findIndex(element => element.name === this.name);

      if (findIng === -1) {
        return 0;
      }

      return this.dataorder[findIng].count;
    }
  }
};
</script>

<style></style>
