import { normalizeDataCart } from '@/enums/helpers.js';
import jsonMisc from '@/static/misc.json';

export default {
  namespaced: true,
  state: {
    misc: [],
    orderItems: [],
    order: [],
    orderMisc: [
      {
        id: 1,
        count: 0
      },
      {
        id: 2,
        count: 0
      },
      {
        id: 3,
        count: 0
      }
    ],
    receive:[1],
    orderInfo: {
      id: 1,
      titleAdress: 'Адресс №1',
      street: 'Невский пр',
      houseNumber: 22,
      flatNumber: 46,
      comments: ''
    }
  },

  actions: {
    async initMiscData({ dispatch }) {
      dispatch('fetchData');
    },

    fetchData({ commit }) {
      const misc = jsonMisc;

      commit('SET_ENTITY', {
        entity: 'misc',
        value: misc
      });
    }
  },

  getters: {
    getNormalizeDataCart({ orderItems }) {
      return normalizeDataCart(orderItems);
    },

    getActualItemOrderPrice({ order, orderItems }) {
      return itemId => {
        const check = order.findIndex(element => element.orderItemId === itemId);
        const checkPos = orderItems.findIndex(element => element.id === itemId);

        return order[check].count * orderItems[checkPos].cost;
      };
    },

    getActualCountResultItem({ order }) {
      return itemId => {
        const check = order.findIndex(element => element.orderItemId === itemId);

        return order[check].count;
      };
    },

    getActualCountResultMisc({ orderMisc }) {
      return id => {
        const check = orderMisc.findIndex(element => element.id === id);

        return orderMisc[check].count;
      };
    },

    getFinishOrderCost({ orderItems, order, misc, orderMisc }) {
      let total = 0;

      if (orderItems.length === 0) {
        return total;
      }

      for (const item of orderItems) {
        const check = order.findIndex(element => element.orderItemId === item.id);

        const sumItem = item.cost * order[check].count;

        total += sumItem;
      }

      for (const item of orderMisc) {
        const check = misc.findIndex(element => element.id === item.id);

        const sumMisc = item.count * misc[check].price;

        total += sumMisc;
      }

      return total;
    },

    getStreet({ orderInfo, receive }) {
      if (receive[0] === 3 || receive[0] === 1) {
        return orderInfo.street;
      }

      if (receive[0] === 2) {
        return '';
      }
    },

    getHouseNumber({ orderInfo, receive }) {
      if (receive[0] === 3 || receive[0] === 1) {
        return orderInfo.houseNumber;
      }

      if (receive[0] === 2) {
        return '';
      }
    },

    getFlatNumber({ orderInfo, receive }) {
      if (receive[0] === 3 || receive[0] === 1) {
        return orderInfo.flatNumber;
      }

      if (receive[0] === 2) {
        return '';
      }
    }
  },

  mutations: {
    ['SET_ENTITY'](state, { entity, value }) {
      state[entity] = value;
    },

    getCard({ orderItems, order }, { newCard, place }) {
      if (place === -1) {
        orderItems.push(newCard);
        order.push({ orderItemId: newCard.id, count: 1 });
      } else {
        orderItems[place] = {};
        orderItems[place] = newCard;
        orderItems.push(newCard);
        orderItems.pop();
      }
    },

    changeCountItem({ order, orderItems }, { id, diffCount }) {
      const check = order.findIndex(element => element.orderItemId === id);
      const checkPos = orderItems.findIndex(element => element.id === id);

      if (check === -1 || checkPos === -1) {
        return;
      }

      order[check].count += diffCount;

      if (order[check].count === 0) {
        order.splice(check, 1);
        orderItems.splice(checkPos, 1);
      }
    },

    changeCountMisc({ orderMisc }, { id, diffCount }) {
      const check = orderMisc.findIndex(element => element.id === id);

      if (orderMisc[check].count === 0 && diffCount === -1) {
        return;
      }

      orderMisc[check].count += diffCount;
    },

    changeReceive({ receive }, ind) {
      receive.splice(0, 1);
      receive.push(ind);
      console.log(receive[0]);
    }
  }
};
