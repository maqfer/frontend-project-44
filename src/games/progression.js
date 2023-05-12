#!/usr//bin/env node

import basisGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const progression = () => {
  const noteToProgr = 'What number is missing in the progression?';

  const taskProgr = () => {
    const sequence = [];
    const lastIndex = 9;

    const getStep = () => {
      const necessaryStep = getRandomInt(7);

      return (necessaryStep === 0 ? getStep() : necessaryStep);
    };

    const step = getStep();
    const getStartNum = () => {
      const num = getRandomInt(100);
      const limitNum = num + (step * lastIndex);

      if (limitNum > 100) { return getStartNum(); }

      return num;
    };

    const startNum = getStartNum();

    for (let i = 0, nextNum = startNum; i < 10; i += 1, nextNum += step) {
      sequence.push(nextNum);
    }

    const randomIndex = getRandomInt(lastIndex);
    const replacedNum = sequence[randomIndex];
    let result = replacedNum;
    sequence[randomIndex] = '..';

    const question = sequence.join(' ');
    result = result.toString();

    return [question, result];
  };

  basisGames(noteToProgr, taskProgr);
};

export default progression;
