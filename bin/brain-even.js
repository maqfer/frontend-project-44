import readlineSync from 'readline-sync';
import {mainName} from "../src/cli.js";
let count = 0
const question =() => {
    console.log('Answer "yes" if the number is even, otherwise answer "no" ');
    let number = Math.floor(Math.random() * 1000);
    const answer = readlineSync.question('Question: ' +number+  ' ');
    if(answer === 'yes' && number%2 === 0) {
       console.log('Correct!')
       count++
    }  else if(answer === 'no' && number%2 !== 0) {
        console.log('Correct!')
        count++
    } else if(answer === 'yes' && number%2 !== 0) {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
        console.log (`Let's try again, ${mainName}`)
    } else if (answer === 'no' && number%2 === 0) {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.")
        console.log (`Let's try again, ${mainName}`)
    }
    if(count > 2) {
        console.log(`Congratulations, ${mainName}!`)
    }
}
  export default question
