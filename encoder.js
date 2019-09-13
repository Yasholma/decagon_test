function encoder(raw, code_words) {

    const uniqRaw = raw.filter((value, index, self) => self.indexOf(value) == index);

    let objMap = new Map();

    for (let i = 0; i < uniqRaw.length; i++) {
        // objMap[uniqRaw[i]] = code_words[i];
        objMap.set(uniqRaw[i], code_words[i]);
    }

    

    let newA = [];
    for (let i = 0; i < raw.length; i++) {
        if (objMap.has(raw[i])) {
            newA.push(objMap.get(raw[i]));
        }
    }

    return newA;
}

// console.log(encoder(["a", "b", "a"], ["1", "2", "3", "4"]));
console.log(encoder(['a', 'b', 'b', 'b', 'b', 'b', 'b'], ['50', '44', '21', '51', '12', '01']));



