<template>
  <form
    action="test.html"
    method="post"
    class="layout-form"
  >
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">
            Корзина
          </h1>
        </div>

        <div
          v-if="orderItems.length === 0"
          class="sheet cart__empty"
        >
          <p>В корзине нет ни одного товара</p>
        </div>
        <div
          v-else
        >
          <CartList
            :customs="getNormalizeDataCart"
          />

          <CartMisc
            :datamisc="misc"
          />

          <CartForm />
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <router-link
          href="#"
          class="button button--border button--arrow"
          to="/"
        >
          Хочу еще одну
        </router-link>
      </div>
      <p class="footer__text">
        Перейти к конструктору
        чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>
          Итого: {{ getFinishOrderCost }} ₽
        </b>
      </div>

      <div class="footer__submit">
        <button
          type="submit"
          class="button"
          @click.prevent="checkout"
        >
          Оформить заказ
        </button>
      </div>
    </section>
  </form>
</template>

<script>
import CartList from '@/modules/cart/components/CartList.vue';
import CartMisc from '@/modules/cart/components/CartMisc.vue';
import CartForm from '@/modules/cart/components/CartForm.vue';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Cart',
  components: {
    CartList,
    CartMisc,
    CartForm
  },
  computed: {
    ...mapState('Cart', ['misc', 'orderItems']),
    ...mapGetters('Cart',['getNormalizeDataCart', 'getFinishOrderCost'])
  },
  methods: {
    checkout() {
      
      this.$router.push({ path: '/popup' });
    }
  }
};
</script>

<style></style>
