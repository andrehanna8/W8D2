Array.prototype.uniq = function(arr) {
    let newArr = []
    arr.forEach(ele => {
        if (!newArr.includes(ele)) {
            newArr.push(ele)  
        }     
    })
    return newArr 
}



console.log(array.uniq(array))
//--------------------------------------------
Array.prototype.twoSum = function(arr) {
    let newArr = []
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] === 0) {
                    newArr.push([i, j])
                }
            }
        }
    return newArr
}
//--------------------------------------------
Array.prototype.twoSum = function(arr) {
    let pairs = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                pairs.push([i, j])
            }
        }
    }
    return pairs
}
console.log(array.twoSum(array))
const array = [1,2,3,2,4,-4,-1]
//---------------------------------------------
Array.prototype.transpose = function(arr) {
    let transposed = []
    let width = arr[0].length 
    let height = arr.length
    for (let i = 0; i < width; i++){
        transposed[i] = Array(height) //[[x,x,x],[x,x,x]]
    }
    for (let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            transposed[j][i] = arr[i][j]
        }
    }
    return transposed 
}
const arr1 = [[1,2], [3,4], [5,6]]
console.log(arr1.transpose(arr1))
// [[1,2], [3,4], [5,6]] -> [[1,3,5], [2,4,6]] 

// height = 3, width = 2 -> height = 2, width = 3