function findString(str1, str2) {
    let flag = true;
    let index = 0;
    str1 = str1.trim(); // remove space on both sides
    str2 = str2.trim();
    if (str1.length > str2.length) {
        console.log(`${str1} is longer than ${str2}`);
        return false;
    }
    for (let i = 0; i < str2.length; i++) {
        if (str1[0] === str2[i]) {
            index = i;
            // Trường hợp xét theo cả cụm string
            // if (str2[index + str1.length] !== " ") {
            //     flag = false;
            //     continue;
            // }
            flag = true; // reset flag;
            for (let j = index, k = 0; k < str1.length; k++, j++) {
                if (str1[k] !== str2[j]) {
                    flag = false;
                    break;
                }
            }

        }
    }
    return flag;
}

// Test cases
let str1 = "hello my";
let str2 = "hello my friend";
let str3 = "there are no one at all";
let str4 = "good morning! hello my friend!";
let str5 = "hello hello hello my friend!";
let str6 = "hello good morning hello myfriend";

console.log(findString(str1, str2)) // true
console.log(findString(str1, str3)) // false
console.log(findString(str1, str4)) // true
console.log(findString(str1, str5)) // true
console.log(findString(str1, str6)) // true