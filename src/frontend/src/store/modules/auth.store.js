import jsonUser from '@/static/user.json';

export default {
  namespaced: true,
  state: {
    user: {},
    userAdress: [
      {
        titleAdress: 'Адресс №1',
        street: 'Невский пр',
        hoiseNumber: 22,
        flatNumber: 46,
        comments: ''
      }
    ]
  },

  actions: {
    async initUserData({ dispatch }) {
      dispatch('fetchData');
    },

    fetchData({ commit }) {
      const user = jsonUser;

      commit('SET_ENTITY', {
        entity: 'user',
        value: user
      });
    }
  },

  getters: {

  },

  mutations: {
    ['SET_ENTITY'](state, { entity, value }) {
      state[entity] = value;
    },

    changePhone({ user }, number) {
      user.phone = number;
    }
  }
};
