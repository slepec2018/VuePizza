<template>
  <ul class="cart-list sheet">
    <li
      v-for="(item, index) in customs"
      :key="index"
      class="cart-list__item"
    >
      <div class="product cart-list__product">
        <img
          src="../../../assets/img/product.svg"
          class="product__img"
          width="56"
          height="56"
          :alt="item.pizzaTitle"
        />
        <div class="product__text">
          <h2>
            {{ item.pizzaTitle }}
          </h2>
          <ul>
            <li>
              {{ item.diameter }} см, на {{ item.dough }} тесте
            </li>
            <li>
              Соус: {{ item.sauce }}
            </li>
            <li>
              Начинка: {{ item.ingridients }}
            </li>
          </ul>
        </div>
      </div>

      <CartCounter
        :countclass="countClass"
        :resultcount="getActualCountResultItem(item.id)"
        :itemid="item.id"
        @changeCount="changeCountResult"
      />

      <div class="cart-list__price">
        <b>
          {{ getActualItemOrderPrice(item.id) }} ₽
        </b>
      </div>

      <div class="cart-list__button">
        <button
          type="button"
          class="cart-list__edit"
          @click="editPizza(index)"
        >
          Изменить
        </button>
      </div>
    </li>
  </ul>
</template>
<script>
import CartCounter from '@/common/components/CartCounter.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'CartList',
  components: {
    CartCounter
  },

  props: {
    customs: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      countClass: 'cart-list__counter'
    };
  },

  computed: {
    ...mapState('Builder', ['order']),
    ...mapState('Cart', ['orderItems']),
    ...mapGetters('Cart', ['getActualItemOrderPrice', 'getActualCountResultItem'])
  },

  methods: {
    ...mapMutations('Builder', ['editOrder']),
    ...mapMutations('Cart', ['changeCountItem']),

    changeCountResult({ id , diffCount }) {
      this.changeCountItem({ id: id, diffCount: diffCount });
    },

    editPizza(index) {
      const cloneItem = JSON.parse(JSON.stringify(this.orderItems[index]));

      this.editOrder(cloneItem);

      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style></style>
