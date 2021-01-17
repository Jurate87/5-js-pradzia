// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

// function tekstoApjungimas (tekstas1, tekstas2) {
//     let tekstas3 = '';
//     const tarpas=' '
//     const kt=', ';
//     for(let i=0; i<tekstas1.length; i++) {
//         tekstas3 +=  tarpas + tekstas1[i];
//     }
//     tekstas3 += kt;
//     for(let i=0; i<tekstas2.length; i++) {
//         tekstas3 += tekstas2[i] + tarpas;
//     }
//     return tekstas3;
// }

// const tekstas1 = ['mano', 'masina', 'sugedo'];
// const tekstas2 = ['reikia', 'vezti', 'i', 'autoservisa'];

// console.log(tekstoApjungimas (tekstas1, tekstas2));


// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
// function palyginimas(a, b) {
//     const tekstas1 = 'Pomidoras';
//     const tekstas2 = 'Bandykite dar karta';
//     if (a === b) {
//         return tekstas1
//     } else {
//         return tekstas1
//     }
// }

// const a = 'P';
// const b = 'P';

// console.log(palyginimas(a, b))




// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// function skaiciuPalyginimas (a, b) {
//     if (a > b) {
//         return 'didesnis skaicius ' + a
//     } else if (a === b) {
//         return 'skaiciai lygus'
//     } else {
//         return 'didesnis skaicius ' + b
//     }
// }
// const a = 9;
// const b = 8;

// console.log(skaiciuPalyginimas (a, b))




// Išvesti sąrašo tipo kintamųjų ilgius
// function sarasoIlgis (tekstas) {
//     const ilgis = tekstas.length;
//     return ilgis;
// }

// const tekstas = ['automobilis', 'rytas', 'grazus'];

// console.log(sarasoIlgis (tekstas));



// teksto palyginimas 
// function sarasoPalyginimas (tekstas1, tekstas2) {
//     const ilgis1 = tekstas1.length
//     const ilgis2 = tekstas2.length
//     if (ilgis1 > ilgis2) {
//         return tekstas1 + ' "didesnis uz" ' + tekstas2
//     }else if (ilgis1 === ilgis2) {
//         return tekstas1 + ' "lygus" ' + tekstas2
//     }else{
//         return tekstas1 + ' "mazesnis uz" ' + tekstas2
//     }
// }

// const tekstas1 = ['sugadinau', 'savo', 'automobili'];
// const tekstas2 =['nuveziau', 'automobili', 'taisyti'];

// console.log(sarasoPalyginimas (tekstas1, tekstas2))



// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
function sumaIntervale (nuo, iki){
    // validation
    // nuo
    if (typeof nuo !== 'number'){
        return 'Klaida: pirmas parametras turi buti skaicius'
    }
    if (nuo === Infinity){
        return 'Klaida: pirmas parametras negali buti begalybe'
    }
    if (isNaN(nuo)) {
        return 'Klaida: pirmas parametras negali buti NaN'
    }


    // iki
    if (typeof iki !== 'number'){
        return 'Klaida: antras parametras turi buti skaicius'
    }
    if (iki === Infinity){
        return 'Klaida: antras parametras negali buti begalybe'
    }
    if (isNaN(iki)) {
        return 'Klaida: antras parametras negali buti NaN'
    }


    if (iki < nuo){
        return 'Klaida: antras parametras negali buti mazesnis uz pirma'
    }

    // logic
    let suma = 0
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}



// console.log(sumaIntervale ('zodis', 1),'->', 'Klaida: pirmas parametras turi buti skaicius');
// console.log(sumaIntervale (1, 'zodis'),'->', 'Klaida: antras parametras turi buti skaicius');
// console.log(sumaIntervale (false, 1),'->', 'Klaida: pirmas parametras turi buti skaicius');
// console.log(sumaIntervale (1, true),'->', 'Klaida: antras parametras turi buti skaicius');
// console.log(sumaIntervale (null, 1),'->', 'Klaida: pirmas parametras turi buti skaicius');
// console.log(sumaIntervale (1, null),'->', 'Klaida: antras parametras turi buti skaicius');
// console.log(sumaIntervale ('', 0),'->', 'Klaida: pirmas parametras turi buti skaicius');
// console.log(sumaIntervale (Infinity, 1),'->', 'Klaida: pirmas parametras negali buti begalybe');
// console.log(sumaIntervale (1, Infinity),'->', 'Klaida: antras parametras negali buti begalybe');
// console.log(sumaIntervale (1/0, 0),'->', 'Klaida: pirmas parametras negali buti begalybe');
// console.log(sumaIntervale (0, 1/0),'->', 'Klaida: antras parametras negali buti begalybe');
// console.log(sumaIntervale (NaN, 1),'->', 'Klaida: pirmas parametras negali buti NaN');
// console.log(sumaIntervale (1, NaN),'->', 'Klaida: antras parametras negali buti NaN');
// console.log(sumaIntervale (0, -1),'->', 'Klaida: antras parametras negali buti mazesnis uz pirma');
// console.log(sumaIntervale (0*0, -1),'->', 'Klaida: antras parametras negali buti mazesnis uz pirma');
// console.log(sumaIntervale (0/1, -1),'->', 'Klaida: antras parametras negali buti mazesnis uz pirma');
// console.log(sumaIntervale (-1, 0),'->', -1);
// console.log(sumaIntervale (0, 0),'->', 0);
// console.log(sumaIntervale (-1, -1),'->', -1);
// console.log(sumaIntervale (-0, 0),'->', 0);
// console.log(sumaIntervale (-0, 1),'->', 1);
// console.log(sumaIntervale (-0*1, 1),'->', 1);
// console.log(sumaIntervale (-1*0, 0),'->', 0);
// console.log(sumaIntervale (0/1, 0),'->', 0);






// tekstas is antro galo
function tekstasAtvirksciai (tekstas) {
    // validation
    if (typeof tekstas !== 'string') {
        return 'Klaida: parametras turi buti tekstas'
    }



    // logic
    let tekstas2 = '';
    for (let i=tekstas.length-1; i>=0; i--) {
        tekstas2 += tekstas[i]
    }
    return tekstas2;
}


// console.log(tekstasAtvirksciai ('abcdef'),'->','fedcba')
// console.log(tekstasAtvirksciai (0),'->','Klaida: parametras turi buti tekstas')
// console.log(tekstasAtvirksciai (Infinity),'->','Klaida: parametras turi buti tekstas')
// console.log(tekstasAtvirksciai (null),'->','Klaida: parametras turi buti tekstas')
// console.log(tekstasAtvirksciai (NaN),'->','Klaida: parametras turi buti tekstas')
// console.log(tekstasAtvirksciai (0*-1),'->','Klaida: parametras turi buti tekstas')
// console.log(tekstasAtvirksciai (1/0),'->','Klaida: parametras turi buti tekstas')






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