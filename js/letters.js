function letters (text, step) {
    // input/parameters validation
     if (typeof text !== 'string') {
         return 'ERROR: pirmasis parametras turi buti teksto tipo.';
     }
     if (text === '') {
         return 'ERROR: pirmasis parametras negali buti tuscias tekstas.'
     }

     if ( typeof step !== 'number') {
         return 'ERROR: antrasis zingsis turi buti skaiciaus tipo.'
     }
     if (!isFinite(step)) {
         return 'ERROR: antrasis zingsnis turi buti tikras skaicius.'
     }
     if (step === 0) {
         return 'ERROR: antras zingsnis negali buti nulinis (0).'
     }
     
    const textSize = text.length;
    if (textSize < step) {
        return 'ERROR: zingsnis negali buti didesnis, nei teksto ilgis.'
    }

    // logic
    let newText = '';
    for (let i = 0; i < textSize; i++) {
        const letter = text[i];
        //console.log(i, letter);
        if (i % step === step - 1) {
            newText = newText + letter;
            
        }
    }



    // post logic validation
    if (newText === '') {
        return 'ERROR: nenumatytas atvejis, kazkodel grazino tuscia teksta...'
    }



    // return result
    return newText;

}



console.log(letters(1561, 2));
console.log(letters(true, 2));
console.log(letters([], 2));
console.log(letters('abcdgef', 'wer'));
console.log(letters('abcdgef', true));
console.log(letters('abcdgef', []));
console.log(letters('abc', NaN));
console.log(letters('abc', Infinity));
console.log(letters('abc', -Infinity));
console.log(letters('', 2));
console.log(letters('abc', 0));
console.log(letters('abc', 4));



console.log(letters('abc', 1), '->', 'abc');
console.log(letters('abcdef', 1), '->', 'abcdef');
console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('akjdsdhd', 2), '->', 'kddd');
console.log(letters('abcdfghijkltr', 3), '->', 'cgjt');


