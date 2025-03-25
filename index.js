let phrase = 'Hello World';

if (process.argv[2]) {

    phrase = process.argv[2];
}

console.log(phrase);