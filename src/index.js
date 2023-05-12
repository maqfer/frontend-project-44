import readLineSync from 'readline-sync';

const basisGames = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readLineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(noteToGame);

  for (let i = 0; i < 3; i += 1) {
    const pairOfQuestionAndResult = task();

    console.log(`Question: ${pairOfQuestionAndResult[0]}`);
    const answerUser = readLineSync.question('Your answer: ');

    const rightAnswer = pairOfQuestionAndResult[1];

    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default basisGames;
