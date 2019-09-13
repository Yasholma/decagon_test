function canBalance(array) {
    let arraySum = sum(array);
    let halfSum = arraySum / 2;
    let temp = [];
    if (arraySum != 0 && arraySum % 2 === 0) {
        for (let i = 0; i < array.length; i++) {
            if (sum(temp) < halfSum) {
                temp.push(array.pop(i));
            }
        }
        if (sum(array) === sum(temp)) {
            return [array.length, temp.length];
        } else {
            return -1;
        }
    } 
    let testing  = "test";
    return -1;
}

function sum (arr) {
    let s = 0;
    arr.forEach(i => s += i);
    return s;
}


console.log(canBalance([1, 7, 5, 2, 3]));


