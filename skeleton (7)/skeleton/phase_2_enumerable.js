Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}
// Array.prototype.myMap = function(callback) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(callback(this[i]))
//     }
//     return newArr
// }

// Array.prototype.myMap = function(callback) {
//     for (let i = 0; i < this.length, i++) {
//         let result = this.myEach.callback 
//         return result 
//     }
// }

// const timesTwo = function(num) {
//     return num * 2
// }

// let arr = [1,2,3,4,5]

// console.log(arr.myMap(timesTwo))


Array.prototype.myReduce = function(callback, initialValue=0) {
    let acc = initialValue || this[0]
    let idx;
    if (initialValue) {
       idx = 0
    } else { 
        idx = 1
    } 
    this.slice(idx).myEach(el => acc = callback(acc, el))
    // this.slice(idx).myEach(function(el) {
    //     acc = callback(acc, el)
    // })
    // for (let i = idx; i < this.length; i++) {
    //     acc = callback(acc, this[i])
    // }
    return acc
}


const add = function(acc, el) {
    return acc + el
}


let arr = [1,2,3,4,5]

console.log(arr.myReduce(add, 10))




