import words from '../storage/index';

const LAST_INDEX = words.length - 1;

export const getRandomWord = () => {
  const position = Math.floor(Math.random() * LAST_INDEX);
  return words[position];
};

export const getNrOfRandomWords = (number) => {
  const words = [];
  while (number > 0) {
    words.push(getRandomWord());
    number--;
  }
  return words;
};

export const isLetterOrBackspace = (str) => {
  return (str.length === 1 && str.match(/[a-z ]/i)) || str === 'Backspace';
};
