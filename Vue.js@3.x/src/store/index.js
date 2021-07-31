import { createStore } from 'vuex';

export default createStore({
  state: {
    app: {
      theme: 'dark',
      locale: 'zh_CN',
    },
  },
  mutations: {
    setTheme(state, payload) {
      state.app.theme = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
