<template>
  <main class="content">
    <form
      action="#"
      method="post"
    >
      <div class="content__wrapper">
        <h1 class="title title--big">
          Конструктор пиццы
        </h1>
        <DoughSelector
          :dough="getNormalizePizza.dough"
        />
        <SizeSelector
          :sizes="getNormalizePizza.sizes"
        />
        <IngredientsSelector
          :sauces="getNormalizePizza.sauces"
          :ingredients="getNormalizePizza.ingredients"
          :dataorder="order.ingridients"
        />
        <PizzaView />
      </div>
    </form>
  </main>
</template>
<script>
import DoughSelector from '@/modules/builder/components/BuilderDoughSelector.vue';
import SizeSelector from '@/modules/builder/components/BuilderSizeSelector.vue';
import IngredientsSelector from '@/modules/builder/components/BuilderIngredientsSelector.vue';
import PizzaView from '@/modules/builder/components/BuilderPizzaView.vue';

import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Index',
  components: {
    DoughSelector,
    SizeSelector,
    IngredientsSelector,
    PizzaView
  },

  data() {
    return {
    };
  },

  computed: {
    ...mapState('Builder', ['order']),
    ...mapGetters('Builder',['getNormalizePizza'])
  },

  methods: {

  }
};
</script>
<style></style>
