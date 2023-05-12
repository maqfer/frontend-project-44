#!/usr/bin/env node

import basisGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getGcd = (number1, number2) => (!number2 ? number1 : getGcd(number2, number1 % number2));

const noteToGcd = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();

  return [question, answer];
};
const start = () => basisGames(noteToGcd, game);

export default start;
