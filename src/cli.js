import readlineSync from 'readline-sync';

function even(x){
  if(Number.isInteger(x) == true){return x % 2 == 0}else{return undefined}
}

const cli =() => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
}
export default cli