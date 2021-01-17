function daugyba(a, b) {
    /*validation
    ar "a" nera skaicius */
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (a === Infinity) {
        return 'ERROR: pirmas parametras negali buti begalybe'
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras negali buti NaN'
    }

    // ar "b" nera skaicius
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if (b === Infinity) {
        return 'ERROR: antras parametras negali buti begalybe'
    }
    if (isNaN(b)) {
        return 'ERROR: antras parametras negali buti NaN'
    }
    if (a*b === -0) {
        return 0
    }

    // logic
    const ats = a * b;
    return ats;
}

// skaiciai: teigiami, nulis, neigiami
// skaiciai: sveikieji, desimtainiai, Infinity, NaN
// reiksmiu tipai: kai nieko neduodam, skaiciai, simboliai (tekstas), boolean


console.log(daugyba(1, 'rytas'));
console.log(daugyba('labas', 2));
console.log(daugyba('labas', 'rytas'));
console.log(daugyba(1, true));
console.log(daugyba(true, 2));
console.log(daugyba(true, true));
console.log(daugyba(1, false));
console.log(daugyba(false, 2));
console.log(daugyba(false, false));
console.log(daugyba(false, true));
console.log(daugyba(true, false));
console.log(daugyba());
console.log(daugyba(Infinity, 2));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(Infinity, -Infinity));
console.log(daugyba(2, Infinity));
console.log(daugyba(0, Infinity));
console.log(daugyba(NaN, 5));
console.log(daugyba(5, NaN));
console.log(daugyba(NaN, NaN));

console.log(daugyba(3, 7), '->', 21);
console.log(daugyba(-5, 7), '->', -35);
console.log(daugyba(3, -5), '->', -15);
console.log(daugyba(2, -2.5), '->', -5);
console.log(daugyba(2, 0), '->', 0);
console.log(daugyba(-2, -8), '->', 16);
console.log(daugyba(0, 0), '->', 0);

// vis dar gaunamas klaidingas atsakymas
console.log(daugyba(0, -5), '->', 0);