function bigNum(list) {
    //validation
    if (typeof list !== 'object') {
    return 'ERROR: parametras turi buti array tipo.';
} 

    if (list.lenght === 0 ) {
    return 'ERROR: array negali buti tuscias'
}
    //logic
    let bigestNumber = -Infinity;


    for (let i = 0; i < list.lenght; i++) {
        const number = list[i];

        if (typeof number !== 'number') {
            continue;
        }

        if (number > bigestNumber) {
            bigestNumber = number;
        }

    
    }
     // port logic validation
     if (bigestNumber === -Infinity) {
         return 'ERROR: sarase nerasta nei vieno normalaus skaiciaus'
     }

    //result return
    return bigestNumber;
}



console.log(bigNum('pomidoras'));
console.log(bigNum([]));


console.log(bigNum([1 ]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log( bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log( bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);


console.log(bigNum(['asfd']));
console.log(bigNum(['a', 'bbb', 'c', true, [], false]));
console.log(bigNum([1, 'bbb', 'c', true, [], false]));




console.log(bigNum({}));


