<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">
        Выберите размер
      </h2>

      <div class="sheet__content diameter">
        <label
          v-for="(size, index) in sizes"
          :key="size.id"
          class="diameter__input"
          :class="`diameter__input--${size.nameEng}`"
        >
          <RadioButton
            :value="size.nameEng"
            :radio-name="radioName"
            :checked="index === 1"
          />
          <span>
            {{ size.name }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from '@/common/components/RadioButton.vue';

export default {
  name: 'SizeSelector',
  components: { RadioButton },
  props: {
    sizes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      radioName: 'diameter'
    };
  }
};
</script>

<style></style>
