import { inject, provide, ref } from 'vue';

const Consumer = {
  setup() {
    const theme = inject('theme', ref('light'));
    return () => (
        <h3>{theme.value}</h3>
    );
  },
};

export default {
  name: 'Provider',
  setup() {
    const theme = ref('dark');
    // provide('theme', theme);

    const onChange = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
    };
    return () => (
        <div>
          <h1>{theme.value}</h1>
          <a-button onClick={onChange}>Change</a-button>
          <Consumer />
        </div>
    );
  },
};
