import { ref, unref } from 'vue';

export default {
  name: 'ReactiveAPI',
  setup() {
    const theme = ref('dark');
    console.log(unref(theme));

    let counter = 0;
    const onLogClick = () => {
      setTimeout(() => {
        console.log(counter.value);
      }, 5000);
    };
    const onCountClick = () => {
      counter += 1;
    };
    return () => (
        <div>
          <h1>ReactiveApi</h1>
          <a-button onClick={onLogClick}>打印</a-button>
          <a-button onClick={onCountClick}>计数</a-button>
          <h4>{counter}</h4>
        </div>
    );
  },
};
