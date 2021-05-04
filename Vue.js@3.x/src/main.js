import { createApp } from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import store from './store';

createApp(App)
  .use(plugins)
  .use(store)
  .use(router)
  .mount('#app');
