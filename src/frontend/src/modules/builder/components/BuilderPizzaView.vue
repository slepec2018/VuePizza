<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden"> Название пиццы </span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        :value="order.pizzaTitle"
        @change="changePizzaTitle($event.target.value)"
      />
    </label>
    <AppDrop>
      <div class="content__constructor">
        <div
          class="pizza"
          :class="`pizza--foundation--${getActualSauce}-${order.sauce}`"
        >
          <div class="pizza__wrapper">
            <PizzaPicIngredient
              v-for="(ingridient, index) of order.ingridients"
              :key="index"
              :name="ingridient.name"
            />
          </div>
        </div>
      </div>
    </AppDrop>
    <PriceCounter />
  </div>
</template>

<script>
import PriceCounter from '@/modules/builder/components/BuilderPriceCounter.vue';
import AppDrop from '@/common/components/AppDrop.vue';
import PizzaPicIngredient from '@/common/components/PizzaPicIngred.vue';

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'PizzaView',
  components: { PriceCounter, AppDrop, PizzaPicIngredient },
  computed: {
    ...mapState('Builder', ['order']),
    ...mapGetters('Builder', ['getActualSauce'])
  },
  methods: {
    ...mapMutations('Builder', ['changePizzaTitle'])
  }
};
</script>

<style></style>
