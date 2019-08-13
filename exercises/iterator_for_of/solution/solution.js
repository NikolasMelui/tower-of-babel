const max = +process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        
        const val = (num) => {
          if (num % 15 === 0) {
            return 'FizzBuzz';
          } else if (num % 3 === 0) {
            return 'Fizz';
          } else if (num % 5 === 0) {
            return 'Buzz';
          } else {
            return num;
          }
        };
        
        return { done: false, value: val(num++) };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}

