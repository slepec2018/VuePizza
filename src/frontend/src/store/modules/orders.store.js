

export default {
  namespaced: true,
  state: {
    orders: []
  },

  getters: {

  },

  mutations: {
    addOrder({ orders }, data) {
      orders.push(data);
    }
  },

  actions: {

  }
};
