/*const skaicius = 11;
// const daliklis = 3;


// const liekana = skaicius % daliklis;

// console.log(liekana);


console.log('---------------')



function liekana1 (from, till, divider) {
    let count = 0;


    for (let i = from; i <= till; i++) {
        if (i % divider === 0) {
            count++
        }
    }

    return `Skaiciu intervale tarp ${from} ir ${till}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai.`

}

const tekstas = liekana1(8, 31, 5);
console.log(tekstas);*/




function liekana(from, till, divider) {
    // validation
    // from
    if (typeof from !== 'number') {
        return 'Klaida: pirmas parametras turi buti skaicius'
    }
    if (from === Infinity) {
        return 'Klaida: pirmas parametras neturi buti begalybe'
    }
    if (isNaN(from)) {
        return 'Klaida: pirmas parametras neturi buti NaN'
    }
    if(from > till) {
        return 'Klaida: pirmas parametras negali buti mazesnis uz antra'
    }


    // till
    if (typeof till !== 'number') {
        return 'Klaida: antras parametras turi buti skaicius'
    }
    if (till === Infinity) {
        return 'Klaida: antras parametras neturi buti begalybe'
    }
    if (isNaN(till)) {
        return 'Klaida: antras parametras neturi buti NaN'
    }

    // divider
    if (typeof divider !== 'number') {
        return 'Klaida: trecias parametras turi buti skaicius'
    }
    if (divider === Infinity) {
        return 'Klaida: trecias parametras neturi buti begalybe'
    }
    if (isNaN(divider)) {
        return 'Klaida: trecias parametras neturi buti NaN'
    }

    // logic
    let count = 0;

    for (let i = from; i <= till; i++) {
        if (i % divider === 0) {
            count++;
        }
    }

    return count;
}


console.log(liekana(8, 31, 5),'->',5);
console.log(liekana('*', 5, 6),'->','Klaida: pirmas parametras turi buti skaicius');
console.log(liekana(5, '*', 6),'->','Klaida: antras parametras turi buti skaicius');
console.log(liekana(5, 6, '*'),'->','Klaida: trecias parametras turi buti skaicius');
console.log(liekana(true, 5, 6),'->','Klaida: pirmas parametras turi buti skaicius');
console.log(liekana(5, true, 6),'->','Klaida: antras parametras turi buti skaicius');
console.log(liekana(5, 6, true),'->','Klaida: trecias parametras turi buti skaicius');
console.log(liekana(Infinity, 5, 6),'->','Klaida: pirmas parametras neturi buti begalybe');
console.log(liekana(5, Infinity, 6),'->','Klaida: antras parametras neturi buti begalybe');
console.log(liekana(5, 6, Infinity),'->','Klaida: trecias parametras neturi buti begalybe');
console.log(liekana(NaN, 5, 6),'->','Klaida: pirmas parametras neturi buti NaN');
console.log(liekana(5, NaN, 6),'->','Klaida: antras parametras neturi buti NaN');
console.log(liekana(30, 40, NaN),'->','Klaida: trecias parametras neturi buti NaN');
console.log(liekana(6, 5, 1),'->','Klaida: pirmas parametras negali buti mazesnis uz antra');
console.log(liekana(30, 50, 0),'->',0);
console.log(liekana(null, 5, 6),'->','Klaida: pirmas parametras turi buti skaicius');