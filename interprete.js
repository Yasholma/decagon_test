//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(init, operators, array) {
    let res = init;
    for (let i = 0; i < array.length; i++) {
        res = solve(res, operators[i], array[i]);
        if (res == -1) break;
    }

    return res;
}

function solve(init, op, current) {
    if (op == "+") {
        return init + current;
    } else if (op == "*") {
        return init * current;
    } else if (op == "-") {
        return init - current;
    } else {
        return -1;
    }
}

console.log(interpret(10, ['*', '$', '+'], [5, 3, 2]));

// interpret(1, ["+"], [1]) → 2
// interpret(1, ["+", "*"], [1, 3]) → 6