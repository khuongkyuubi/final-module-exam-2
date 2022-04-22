function findThirdScore(scores) {
    let count = 0;
    let temp = 0;
    if (scores.length < 3) {
        return "Mảng có ít hơn 3 phần tử";
    }
    for (let i = 0; i < scores.length; i++) {
        for (let j = i; j < scores.length; j++) {
            if (scores[i] < scores[j]) {
                temp = scores[i];
                scores[i] = scores[j];
                scores[j] = temp;
            }
        }
        // Xét trường hợp khi sắp xếp có những số lớn bằng nhau
        if (scores[i] !== scores[i - 1]) {
            count++;
        }
        if (count === 3) {
            return scores[i];
        }
    }
    // Trường hợp mảng chỉ có 3 phần tử , thì trả về phần tử thứ 3 sau khi sắp xếp
    return scores[2];
}

// Test case
let scores = [5, 7, 10, 6, 4, 8, 8, 7, 10, 10, 10];
let scores1 = [6, 7, 9, 4, 3, 8, 10];
let scores2 = [5, 6, 6, 10, 6, 4, 8, 10, 10];
let scores3 = [5, 7, 1, 3, 5, 6, 8];

console.log(findThirdScore(scores)); // 7
console.log(findThirdScore(scores1)); // 8
console.log(findThirdScore(scores2)); // 6
console.log(findThirdScore(scores3));  // 6