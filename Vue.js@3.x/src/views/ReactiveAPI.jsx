import { ref, toRaw, unref } from 'vue';

export default {
  name: 'ReactiveAPI',
  setup() {
    const theme = ref('dark');
    console.log(unref(theme));
    return () => (
        <div>
          <h1>ReactiveApi</h1>
        </div>
    );
  },
};
