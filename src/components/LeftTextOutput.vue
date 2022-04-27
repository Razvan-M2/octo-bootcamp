<template>
  <div class="output-container">
    <span class="word-container" v-for="(item, index) in parsed" :key="index">{{
      item
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'LeftTextOutput',

  props: ['parsed'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.output-container {
  width: 50%;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  justify-content: flex-end;
}
.word-container {
  margin: 0px 5px;
}
</style>
