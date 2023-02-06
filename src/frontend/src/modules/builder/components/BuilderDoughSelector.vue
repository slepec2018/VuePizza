<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">
        Выберите тесто
      </h2>

      <div class="sheet__content dough">
        <label
          v-for="(item, index) in dough"
          :key="item.id"
          class="dough__input"
          :class="`dough__input--${item.nameEng}`"
        >
          <RadioButton
            :value="item.nameEng"
            :radio-name="radioName"
            :checked="index === 0"
          />
          <b>
            {{ item.name }}
          </b>
          <span>
            {{ item.description }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from '@/common/components/RadioButton.vue';

export default {
  name: 'DoughSelector',
  components: { RadioButton },
  props: {
    dough: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      radioName: 'dough'
    };
  }
};
</script>

<style></style>
