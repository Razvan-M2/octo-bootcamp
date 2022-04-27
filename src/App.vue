<template>
  <div class="input-home">
    <MainInput ref="mainInput" />
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainInput from './components/MainInput.vue';

export default {
  name: 'App',
  components: {
    MainInput,
  },
  created() {
    window.addEventListener('keydown', (e) => {
      // console.log(`window keypress`);
      this.$refs.mainInput.handleInput(e.key);
    });
  },
  data() {
    return {
      canInput: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-home {
  font-size: 2rem;
}
</style>
