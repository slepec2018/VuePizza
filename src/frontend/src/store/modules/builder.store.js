import { normalizePizza } from '@/enums/helpers.js';
import jsonPizza from '@/static/pizza.json';

export default {
  namespaced: true,
  state: {
    pizza: {},
    order: {
      dough: 'light',
      sauce: 'tomato',
      ingridients: [],
      diameter: 'normal',
      pizzaTitle: '',
      cost: 0,
      id: 1
    },
    actualId: {
      id: 1
    }
  },
  actions: {
    async initPizzaData({ dispatch }) {
      dispatch('fetchData');
    },

    fetchData({ commit }) {
      const pizza = jsonPizza;

      commit('SET_ENTITY', {
        entity: 'pizza',
        value: pizza
      });
    }
  },
  getters: {
    getFinishBuilderPrice({ order, pizza }) {
      let total = 0;

      if (order.dough === 'light') {
        total += pizza.dough[0].price;
      } else {
        total += pizza.dough[1].price;
      }

      if (order.sauce === 'tomato') {
        total += pizza.sauces[0].price;
      } else {
        total += pizza.sauces[1].price;
      }

      if (order.ingridients.length > 0) {
        for (const item of order.ingridients) {
          const listIngredients = pizza.ingredients;
          const findIndex = listIngredients.findIndex(element => element.nameEng === item.name);

          total += (listIngredients[findIndex].price * item.count);
        }
      }

      return total;
    },
    actualizationValueItemCounter({ order }) {
      return nameItem => {
        const findIng = order.ingridients.findIndex(element => element.name === nameItem);

        if (findIng === -1) {
          return 0;
        }

        return order.ingridients[findIng].count;
      };
    },
    getActualSauce({ order }) {
      let result = 'small';

      if (order.dough === 'light') {
        result = 'small';
      }

      if (order.dough === 'large') {
        result = 'big';
      }

      return result;
    },
    getNormalizePizza({ pizza }) {
      return normalizePizza(pizza);
    }
  },

  mutations: {
    ['SET_ENTITY'](state, { entity, value }) {
      state[entity] = value;
    },

    editOrder(state, newOrder) {
      state.order = newOrder;
    },

    updatePrice({ order }, total) {
      order.cost = total;
    },

    cleanOrder({ order, actualId }, check) {
      order.dough = 'light';
      order.sauce = 'tomato';
      order.ingridients = [];
      order.diameter = 'normal';
      order.pizzaTitle = '';
      order.cost = 0;

      if (check === -1) {
        order.id +=  1;
        actualId.id +=  1;
      } else {
        order.id = actualId.id;
      }
    },

    changeOptionPrice({ order }, { value, name }) {
      order[name] = value;
    },

    changePizzaTitle({ order }, title) {
      order.pizzaTitle = title;
    },

    refreshActiveIngridients({ order },{ count, ing }) {
      let editIngridients = order.ingridients;
      const checkDubIng = editIngridients.findIndex(element => element.name === ing);

      if (checkDubIng === -1 && editIngridients.length >= 0 && count === -1) {
        return;
      }

      if (checkDubIng === -1 && editIngridients.length >= 0) {
        editIngridients.push({ name: ing, count: count });
        return;
      }

      if (checkDubIng !== -1 && count === 1) {
        editIngridients[checkDubIng].count += count;
        return;
      }

      if (checkDubIng !== -1 && count === -1) {
        editIngridients[checkDubIng].count += count;

        if (editIngridients[checkDubIng].count === 0) {
          editIngridients.splice(checkDubIng, 1);
        }
      }
    },

    dropRefreshActiveIngridients({ order }, ing) {
      let editIngridients = order.ingridients;
      const findIng = editIngridients.findIndex(element => element.name === ing);

      if (findIng === -1 && editIngridients.length >= 0) {
        editIngridients.push({ name: ing, count: 1 });
        return;
      }

      if (findIng !== -1) {
        editIngridients[findIng].count += 1;
        return;
      }
    }
  }
};
