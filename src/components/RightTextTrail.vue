<template>
  <div class="input-trail">
    <span
      class="word-container"
      v-for="(item, index) in ingredients"
      :key="index"
      >{{ item }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'RightTextTrail',
  methods: {
    inputKey(input) {
      console.log(input);
    },
  },
  props: ['ingredients'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-trail {
  width: 50%;
  overflow: hidden;
}

.word-container {
  margin: 0px 5px;
}
</style>
