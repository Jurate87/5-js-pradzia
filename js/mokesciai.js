function mokesciai (amount, tax) {
    return amount * tax / 100;

}


const m1 = mokesciai(1000, 21);
const m2 = mokesciai(500, 15);


console.log(m1, '->', 210);
console.log(m2, '->', 75);







function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());





function daugyba(a, b) {
    const rez = a * b;
    return rez;

}


const skaicius1 = 3;
const skaicius2 = 7;
const skaicius3 = -5

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));

console.log(daugyba(2, -2.5));
console.log(daugyba(2, 0));
console.log(daugyba(0, 0));


console.log(daugyba()); 

console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(Infinity, -Infinity));
console.log(daugyba(0, Infinity));


console.log(daugyba(5, NaN));
console.log(daugyba(0, -5));     //!!!





console.log(daugyba('labas', 'rytas'));


// skaiciai: teigiami, nulis, neigiami
// skaiciai: sveikieji, desimtainiai, Infinity, NaN (not a number)
// reiksmiu tipai: kai nieko neduodam, skaiciai, simboliai (tekstas), boolean (true, false)



// daugyba su zodziais (negalima)

function daugyba(a1, b1) {
    // /* validation
    // ar "a" nera skaicius
    // ar "b" nera skaicius
    if (typeof a1 !== 'number') {
        return 'ERROR: sandauga galima tik su skaiciais';
    }
    if (a1 === Infinity) {
        return 'ERROR: pirmas parametras negali buti begalybe'
    }
    if (b1 === Infinity) {
        return 'ERROR: antras parametras negali buti begalybe'
    }
    if (b1 === NaN) {
        return 'ERROR: antras parametras negali buti NaN'
    }
    const ats = a1 * b1;
    return ats;

}



const a = daugyba(0, -5);
const b = daugyba(a * 2);