<template>
  <div class="input-container">
    <!-- Left (Parsed Text) Trail -->
    <LeftTextOutput :parsed="parsedText" />
    <!-- Injected current word -->
    <span class="word-container">{{ currentWord }}</span>
    <div
      class="main"
      @click="focusContainer"
      @keyup="handleInput"
      v-click-outside="unFocusContainer"
    >
      |
    </div>
    <!-- Right (Unparsed Text) Trail -->
    <RightTextTrail :ingredients="unparsedText" />
  </div>
</template>

<script>
import LeftTextOutput from './LeftTextOutput.vue';
import RightTextTrail from './RightTextTrail.vue';
import { getNrOfRandomWords, isLetterOrBackspace } from '../utils/words';

export default {
  name: 'MainInput',
  components: {
    LeftTextOutput,
    RightTextTrail,
  },

  data() {
    return {
      focused: false,
      //  Initiate with a batch of numbers; Passed to the Right
      unparsedText: getNrOfRandomWords(20),
      //  Pushed written text; Passed to the Left
      parsedText: [],
      //  Counter for number of words written
      wordsWritten: 0,
      currentWord: '',
    };
  },
  methods: {
    handleInput(input) {
      if (this.focused && isLetterOrBackspace(input)) {
        if (input === ' ') {
          //  If its space, we check if something was written
          //  If something was written, we accept as a complete word
          if (this.currentWord.length > 0) {
            this.wordsWritten++;
            this.unparsedText.shift();
            this.parsedText.push(this.currentWord);
            this.currentWord = '';
          }
        } else {
          //  We handle for Backspaces
          if (input === 'Backspace') {
            this.currentWord = this.currentWord.substring(
              0,
              this.currentWord.length - 1
            );
          } else {
            //  This is the main chopper of text.
            this.unparsedText[0] = this.unparsedText[0].substring(1);
            this.currentWord += input;
          }
        }
      }
    },
    focusContainer() {
      console.log('The Div got focused!');
      this.focused = true;
    },
    unFocusContainer() {
      console.log('The Div got unfocused!');
      this.focused = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  margin: auto;
}
.word-container {
  margin: 0px 5px;
}
</style>
