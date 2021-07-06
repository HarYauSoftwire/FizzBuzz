for (let index: number = 1; index <= 100; index++) {
    let word: string = '';
    if (index % 3 == 0) {
        word += 'Fizz';
    }
    if (index % 5 == 0) {
        word += 'Buzz';
    }
    
    if (word == '') {
        word = index.toString();
    }
    console.log(word);
}