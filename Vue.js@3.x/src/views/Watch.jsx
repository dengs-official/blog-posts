import {
  getCurrentInstance,
  isProxy, reactive, ref, watch,
} from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'watch',
  setup() {
    const store = useStore();
    const state = reactive({});
    const counter = ref(0);
    const onAdd = () => {
      // eslint-disable-next-line no-plusplus
      counter.value++;
    };
    const stop = watch(
      () => counter.value,
      (to, from) => {
        console.log(to);
        if (to > 10) {
          stop();
        }
      },
    );
    const onChange = () => {
      store.commit('setTheme', store.state.app.theme === 'dark' ? 'light' : 'dark');
    };
    watch(
      () => { console.log(getCurrentInstance()); return useStore().state.app.theme; },
      (to, from, onInvalidate) => {
        console.log(to);
      },
      // { deep: true },
    );
    return () => (
        <div>
          <h4>{counter.value}</h4>
          <h4>{store.state.app.theme}</h4>
          <a-button onClick={onAdd}>添加</a-button>
          <a-button onClick={onChange}>换肤</a-button>
        </div>
    );
  },
};
