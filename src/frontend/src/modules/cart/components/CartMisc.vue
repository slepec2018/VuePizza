<template>
  <div class="cart__additional">
    <ul class="additional-list">
      <li
        v-for="(item) in datamisc"
        :key="item.id"
        class="additional-list__item sheet"
      >
        <p class="additional-list__description">
          <img
            :src="item.image"
            width="39"
            height="60"
            :alt="item.name"
          />
          <span>
            {{ item.name }}
          </span>
        </p>

        <div class="additional-list__wrapper">
          <CartCounter
            :countclass="countClass"
            :resultcount="getActualCountResultMisc(item.id)"
            :itemid="item.id"
            @changeCount="changeCountResult"
          />

          <div class="additional-list__price">
            <b>
              {{ item.price }} ₽
            </b>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CartCounter from '@/common/components/CartCounter.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CartMisc',

  components: {
    CartCounter
  },

  props: {
    datamisc: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      countClass: 'additional-list__counter'
    };
  },

  computed: {
    ...mapGetters('Cart',['getActualCountResultMisc'])
  },

  methods: {
    ...mapMutations('Cart', ['changeCountMisc']),

    changeCountResult({ id , diffCount }) {
      this.changeCountMisc({ id: id, diffCount: diffCount });
    },

    checkout() {
      this.$router.push({ path: '/popup' });
    }
  }
};
</script>

<style></style>
