// Array.prototype.bubbleSort = function(arr) {
//     let sorted = false

//     while (!sorted) {
//         sorted = true
//         for (let i = 0; i < this.length; i++) {
        
//             if (this[i] > this[i + 1]) {
//                 sorted = false
//                 let temp = this[i + 1]
//                 this[i + 1] = this[i]
//                 this[i] = temp
//             }
//         }
// }

// return this
// }

// Array.prototype.bubbleSort = function(arr) {
//    let sorted = false 
//    while (!sorted) {
//       let sorted = true 
//       for (let i = 0; i < )
//    }
// }

// Array.prototype.bubbleSort = function(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//          if (arr[j] > arr[j + 1]) {
//             let temp = arr[j] 
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp 
//          }
//       }
//    }
//    return arr
// }
// const arr = [600,2,5,4,58,6]
// console.log(arr.bubbleSort(arr))

String.prototype.substrings = function() {
    let subs = []
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length+1; j++) {
                subs.push(this.slice(i, j))
            }
        }
return subs
}


const word = "dog"
console.log(word.substrings(word))
