import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.directive('click-outside', {
  beforeMount: function (element, binding) {
    element.clickOutsideEvent = function (event) {
      //  check that click was outside the el and his children
      if (!(element === event.target || element.contains(event.target))) {
        // and if it did, call method provided in attribute value
        // vnode.context[binding.expression](event);
        binding.value(); // run the arg
      }
    };
    document.body.addEventListener('click', element.clickOutsideEvent);
  },
  beforeUnmount: function (element) {
    document.body.removeEventListener('click', element.clickOutsideEvent);
  },
});

app.mount('#app');
