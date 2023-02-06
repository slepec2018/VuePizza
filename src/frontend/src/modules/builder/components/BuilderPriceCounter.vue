<template>
  <div class="content__result">
    <p>Итого: {{ getFinishBuilderPrice }} ₽</p>
    <button
      type="button"
      class="button button--disabled"
      :disabled="isDisabled"
      @click="addPizzaToCart"
    >
      Готовьте!
    </button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PriceCounter',
  computed: {
    ...mapState('Builder', ['order']),
    ...mapState('Cart', ['orderItems']),
    ...mapGetters('Builder', ['getFinishBuilderPrice']),

    isDisabled() {
      if (this.order.ingridients.length > 0 && this.order.pizzaTitle.length > 0) {
        return false;
      };
      return true;
    }
  },
  methods: {
    ...mapMutations('Builder', ['cleanOrder', 'updatePrice']),
    ...mapMutations('Cart', ['getCard']),
    addPizzaToCart() {
      const checkCart = this.orderItems.findIndex(element => element.id === this.order.id);

      this.updatePrice(this.getFinishBuilderPrice);

      const cloneOrder = JSON.parse(JSON.stringify(this.order));

      this.getCard({ newCard: cloneOrder, place: checkCart });

      this.cleanOrder(checkCart);

      this.$router.push({ path: '/cart' });
    }
  }
};
</script>

<style></style>
