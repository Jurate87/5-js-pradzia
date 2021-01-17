function bigNum(list) {
    // validation
    if (!Array.isArray(list)) {
        return 'ERROR: parametras turi buti array tipo.';
    }
    if (list.length === 0) {
        return 'ERROR: array negali buti tuscias.';
    }

    // logic
    let biggestNumber = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];

        if (typeof number !== 'number' ||
            !isFinite(number)) {
            continue;
        }

        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // port logic validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase nerasta nei vieno normalaus skaiciaus.';
    }

    // result return
    return biggestNumber;
}

console.log(bigNum('pomidoras'));
console.log(bigNum([]));
console.log(bigNum(['a']));
console.log(bigNum(['a', 'bbb', 'c', true, [], false]));
console.log(bigNum({}));
console.log(bigNum({ vardas: 'Petras' }));
console.log(bigNum([{}, { num: 7 }]));

console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([1, 3, 2, 4, 1]), '->', 4);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum([1, 2, 'asd']), '->', 2);
console.log(bigNum([1, 'asd', 2]), '->', 2);
console.log(bigNum(['asd', 1, 2]), '->', 2);
console.log(bigNum([1, Infinity, -Infinity, NaN, 2]), '->', 2);