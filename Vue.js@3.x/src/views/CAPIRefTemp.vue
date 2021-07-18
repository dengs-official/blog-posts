<template>
  <div ref="root">This is a root element </div>
</template>

<script>
import {
  isReactive, reactive, ref, watchEffect,
} from 'vue';

export default {
  name: 'CAPIRefTemp',
  setup() {
    const root = ref(null);
    watchEffect(() => {
      // console.log(root);
    }, { flush: 'post' });

    const count = ref(0);
    const state = reactive({
      name: '',
    });
    return {
      root,
      count,
      state,
    };
  },
  mounted() {
    console.log(this.state);
  },
};
</script>

<style>

</style>
