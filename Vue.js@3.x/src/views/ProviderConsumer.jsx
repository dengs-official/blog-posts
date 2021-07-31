import {
  computed, inject, onBeforeUpdate, onRenderTracked, onRenderTriggered, reactive, ref,
} from 'vue';

const Consumer = {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const theme = inject('theme', ref('light'));
    console.log(ctx.attrs);
    console.log(props);
    const live = computed(() => 90 - ctx.attrs.age);
    onRenderTracked((e) => {
      console.log(e);
    });
    onRenderTriggered((e) => {
      console.log(e);
    });
    onBeforeUpdate((e) => {
      console.log('beforeUpdate');
    });
    return () => (
      <>
        <h3>{theme.value}</h3>
        <h4>{props.name}</h4>
        <h4>{ctx.attrs.age}</h4>
        <h5>live == {live.value}</h5>
      </>
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
    const state = reactive({
      name: 'snow',
      age: 28,
    });
    const onAdd = () => {
      state.age += 1;
    };
    return () => (
        <div>
          <h1>{theme.value}</h1>
          <a-button onClick={onChange}>Change</a-button>
          <a-button onClick={onAdd}>Add</a-button>
          <Consumer name={state.name} age={state.age} class="" />
        </div>
    );
  },
};
