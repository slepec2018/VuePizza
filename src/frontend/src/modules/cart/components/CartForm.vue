<template>
  <div class="cart__form">
    <div class="cart-form">
      <label class="cart-form__select">
        <span class="cart-form__label">
          Получение заказа:
        </span>

        <select
          name="test"
          class="select"
          @change="changeReceive($event.target.value)"
        >
          <option value="1">
            Заберу сам
          </option>
          <option value="2">
            Новый адрес
          </option>
          <option value="3">
            Дом
          </option>
        </select>
      </label>

      <label class="input input--big-label">
        <span>
          Контактный телефон:
        </span>
        <input
          type="tel"
          name="tel"
          pattern="2[0-9]{3}-[0-9]{3}"
          placeholder="+777 777 777"
          :value="user.phone"
          @change="changePhone($event.target.value)"
        />
      </label>

      <div
        v-if="receive[0] !== 1"
        class="cart-form__address"
      >
        <span class="cart-form__label">
          Новый адрес:
        </span>

        <div class="cart-form__input">
          <label class="input">
            <span>
              Улица*
            </span>
            <input
              type="text"
              name="street"
              :required="receive[0] === 3"
              :value="getStreet"
            />
          </label>
        </div>

        <div class="cart-form__input cart-form__input--small">
          <label class="input">
            <span>
              Дом*
            </span>
            <input
              type="text"
              name="house"
              :required="receive[0] === 3"
              :value="getHouseNumber"
            />
          </label>
        </div>

        <div class="cart-form__input cart-form__input--small">
          <label class="input">
            <span>
              Квартира
            </span>
            <input
              type="text"
              name="apartment"
              :required="receive[0] === 3"
              :value="getFlatNumber"
            />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'CartForm',

  data() {
    return {
      countClass: 'additional-list__counter'
    };
  },

  computed: {
    ...mapState('Auth', ['user']),
    ...mapState('Cart', ['receive']),
    ...mapGetters('Cart',['getNormalizeDataCart', 'getStreet', 'getHouseNumber', 'getFlatNumber'])
  },

  methods: {
    ...mapMutations('Auth', ['changePhone']),
    ...mapMutations('Cart', ['changeReceive']),
    checkout() {
      this.$router.push({ path: '/popup' });
    }
  }
};
</script>

<style></style>
