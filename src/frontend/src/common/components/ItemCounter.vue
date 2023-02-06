<template>
  <div class="counter counter--orange ingridients__counter">
    <button
      type="button"
      class="counter__button counter__button--disabled counter__button--minus"
      @click="refreshActiveIngridients({count: - 1, ing: name})"
    >
      <span class="visually-hidden"> Меньше </span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="actualizationValueItemCounter(name)"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="refreshActiveIngridients({count: 1, ing: name })"
    >
      <span class="visually-hidden"> Больше </span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

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

  computed: {
    ...mapGetters('Builder', ['actualizationValueItemCounter'])
  },
  methods: {
    ...mapMutations('Builder', ['refreshActiveIngridients'])
  }
};
</script>

<style></style>
