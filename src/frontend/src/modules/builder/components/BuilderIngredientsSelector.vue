<template>
  <div class="content__ingridients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">
        Выберите ингридиенты
      </h2>

      <div class="sheet__content ingridients">
        <div class="ingridients__sauce">
          <p>Основной соус:</p>

          <label
            v-for="(sauce, index) in sauces"
            :key="sauce.id"
            class="radio ingridients__input"
          >
            <RadioButton
              :value="sauce.nameEng"
              :radio-name="radioName"
              :checked="index === 0"
            />
            <span>
              {{ sauce.name }}
            </span>
          </label>
        </div>

        <div class="ingridients__filling">
          <p>Начинка:</p>

          <ul class="ingridients__list">
            <li
              v-for="ingredient of ingredients"
              :key="ingredient.id"
              class="ingridients__item"
            >
              <SelectorItem
                :name-eng="ingredient.nameEng"
                :name="ingredient.name"
              />

              <ItemCounter
                :name="ingredient.nameEng"
                :dataorder="dataorder"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from '@/common/components/RadioButton.vue';
import ItemCounter from '@/common/components/ItemCounter.vue';
import SelectorItem from '@/common/components/SelectorItem.vue';

export default {
  name: 'IngredientsSelector',
  components: { RadioButton, ItemCounter, SelectorItem },
  props: {
    sauces: {
      type: Array,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    },
    dataorder: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      radioName: 'sauce'
    };
  }
};
</script>

<style></style>
