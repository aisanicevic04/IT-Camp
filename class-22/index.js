// var sum = 0;
// var n = 20;


// for (let i = 1; index <= n; i++) {
//     sum += i
// }

// function sum(n) {
//     var s = 0;
//     for (let i = 1; i <= n; i++) {
//         s += i;
//     }
//     return s;
// }

// // console.log(sum(10))

// function sumR(n) {
//     var sum = 0;
//     if (n === 1) {
//         return 1;
//     }
//     sum = n + sumR(n - 1);
//     return sum;
// }

// console.log(sumR(10))



// console.log(sum(10))

// function sumR(n) {
//     var sum = 1;
//     if (n === 1) {
//         return 1;
//     }
//     sum = n * sumR(n - 1);
//     return sum;
// }

// console.log(sumR(4))


// function countdown(n){
//   if (n === 0) {
//     return [];
//   } else {
//     var arr = countdown(n - 1);
//     arr.unshift(n);
//     return arr;
//   }
// }
// console.log(countdown(5));


function range(a, b) {
  if (b - a === 0) {
    return [a];
  } else {
    var numbers = range(a, b - 1);
    numbers.push(b);
      return numbers;
  }
}

console.log(range(1,5))