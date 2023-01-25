// function range(start, end) { // 1, 5 -> [1, 2, 3, 4, 5]
//     if (start - end ===  0) {
//         return [start]; 
//     } else {
//         const numbers = range(start + 1, end); 
//         numbers.unshift(start);
//         return numbers; 
//     }
// };

// console.log(range(1,6));

// function sumArr(arr) {
//     if (arr.length === 0) {
//         return 0; 
//     } else {
//         return arr.pop() + sumArr(arr);   
//     }
// }

// console.log(sumArr([1,2,3,4]));


function exponent(base, exp) {
    if (exp === 0) {
        return 1; 
    } else {
        return base * exponent(base, exp - 1);   
    }
}

// console.log(exponent(2, 3));

// fibonacci(n) - receives an integer, n, and returns the first n Fibonacci numbers

function fibonacci(n) {
    if (n === 0) {
        return [];
    } else if (n == 1) {
        return [1];
    } else if (n == 2) {
        return [1, 1];
    } else {
        return fibonacci(n - 1).push((fibs[fibs.length - 1] + fibs[fibs.length - 2]));
    }
}
console.log(fibonacci(5));