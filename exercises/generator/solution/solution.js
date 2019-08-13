const max = process.argv[2];
let FizzBuzz = function* (){
  let num = 1;
  
  const val = num => {
    if (num % 15 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num;
    }
  };

  while (num <= max) {
    yield val(num++);
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}

