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
          :dough="pizza.dough"
          @сhangePrice="changeOptionPrice"
        />
        <SizeSelector
          :sizes="pizza.sizes"
        />
        <IngredientsSelector
          :sauces="pizza.sauces"
          :ingredients="pizza.ingredients"
          :dataorder="addOptionPrice.ingridients"
          @сhangePrice="changeOptionPrice"
          @ing-min="refreshActiveIngridients"
          @ing-max="refreshActiveIngridients"
        />
        <PizzaView
          :total-price="getFinishPrice"
          :actual-ingridients="addOptionPrice.ingridients"
          :doughsize="getActualSauce"
          :optionsauce="addOptionPrice.sauce"
          @drop="dropRefreshActiveIngridients"
        />
      </div>
    </form>
  </main>
</template>
<script>
import pizza from '@/static/pizza.json';
import { normalizeTask } from '@/enums/helpers.js';
import AppLayoutHeader from '@/layouts/AppLayout.vue';
import DoughSelector from '@/modules/builder/components/BuilderDoughSelector.vue';
import SizeSelector from '@/modules/builder/components/BuilderSizeSelector.vue';
import IngredientsSelector from '@/modules/builder/components/BuilderIngredientsSelector.vue';
import PizzaView from '@/modules/builder/components/BuilderPizzaView.vue';

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
      pizza: normalizeTask(pizza),
      addOptionPrice: {
        dough: 'light',
        sauce: 'tomato',
        ingridients: []
      }
    };
  },
  computed: {
    getFinishPrice() {
      let total = 0;

      if (this.addOptionPrice.dough === 'light') {
        total += pizza.dough[0].price;
      } else {
        total += pizza.dough[1].price;
      }

      if (this.addOptionPrice.sauce === 'tomato') {
        total += pizza.sauces[0].price;
      } else {
        total += pizza.sauces[1].price;
      }

      if (this.addOptionPrice.ingridients.length > 0) {
        for (const item of this.addOptionPrice.ingridients) {
          const listIngredients = pizza.ingredients;
          const findIndex = listIngredients.findIndex(element => element.nameEng === item.name);

          total += (listIngredients[findIndex].price * item.count);
        }
      }

      return total;
    },
    getActualSauce() {
      let result = 'small';

      if (this.addOptionPrice.dough === 'light') {
        result = 'small';
      }

      if (this.addOptionPrice.dough === 'large') {
        result = 'big';
      }

      return result;
    }
  },
  methods: {
    changeOptionPrice({ value, name }) {
      this.addOptionPrice[name] = value;
    },
    refreshActiveIngridients({ count, ing }) {
      let ingridients = this.addOptionPrice.ingridients;
      const checkDubIng = ingridients.findIndex(element => element.name === ing);

      if (checkDubIng === -1 && ingridients.length >= 0 && count === -1) {
        return;
      }

      if (checkDubIng === -1 && ingridients.length >= 0) {
        ingridients.push({ name: ing, count: count });
        return;
      }

      if (checkDubIng !== -1 && count === 1) {
        ingridients[checkDubIng].count += count;
        return;
      }

      if (checkDubIng !== -1 && count === -1) {
        ingridients[checkDubIng].count += count;

        if (ingridients[checkDubIng].count === 0) {
          ingridients.splice(checkDubIng, 1);
        }
      }
    },
    dropRefreshActiveIngridients(ing) {
      let ingridients = this.addOptionPrice.ingridients;
      const findIng = ingridients.findIndex(element => element.name === ing);

      if (findIng === -1 && ingridients.length >= 0) {
        ingridients.push({ name: ing, count: 1 });
        return;
      }

      if (findIng !== -1) {
        ingridients[findIng].count += 1;
        return;
      }
    }
  }
};
</script>
<style></style>
