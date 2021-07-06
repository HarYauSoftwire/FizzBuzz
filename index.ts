// for (let index: number = 1; index <= 105; index++) {
//     console.log(getFizzBuzzWord(index));
// }

function getFizzBuzzWord(index: number) : string {
    let answerList: string[] = [];
    if (index % 3 == 0) {
        answerList.push('Fizz');
    }
    if (index % 5 == 0) {
        answerList.push('Buzz');
    }
    if (index % 7 == 0) {
        answerList.push('Bang');
    }
    if (index % 11 == 0) {
        answerList = ['Bong'];
    }
    if (index % 13 == 0) {
        let bIndex = answerList.findIndex((element) => element[0] == 'B');
        if (bIndex == -1) {
            answerList.push('Fezz');
        }
        else {
            answerList.splice(bIndex, 0, 'Fezz');
        }
    }
    if (index % 17 == 0) {
        answerList.reverse();
    }

    if (answerList.length == 0) {
        return index.toString();
    }
    else {
        return answerList.join('');
    }
}

const promptFunc = require('prompt-sync')();
const inNumString = promptFunc('Please enter a number...');
console.log(getFizzBuzzWord(Number(inNumString)));