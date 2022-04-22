function tryRemoveFromArray(arr, index) {
    if (index < arr.length) {
        for (let i = index; i < arr.length; i++) {
            arr[i] = arr[i + 1];
        }
        arr.length = arr.length - 1;
    } else {
        console.log(`index ${index} is not available in [${arr}]`)
    }
    return arr;
}

let arr = [1, 3, 5, 4, 6];
let index = 3;
console.log(tryRemoveFromArray(arr, index)); // [1, 3, 5, 6];

