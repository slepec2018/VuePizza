<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden"> Название пиццы </span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>
    <AppDrop
      @drop="$emit('drop', $event)"
    >
      <div class="content__constructor">
        <div class="pizza pizza--foundation--big-tomato">
          <div class="pizza__wrapper">
            <PizzaPicIngredient
              v-for="(ingridient, index) of actualIngridients"
              :key="index"
              :name="ingridient.name"
            />
          </div>
        </div>
      </div>
    </AppDrop>
    <PriceCounter
      :total-price="totalPrice"
    />
  </div>
</template>

<script>
import PriceCounter from '@/modules/builder/components/BuilderPriceCounter.vue';
import AppDrop from '@/common/components/AppDrop.vue';
import PizzaPicIngredient from '@/common/components/PizzaPicIngred.vue';

export default {
  name: 'PizzaView',
  components: { PriceCounter, AppDrop, PizzaPicIngredient },
  props: {
    totalPrice: {
      type: Number,
      required: true
    },
    actualIngridients: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
