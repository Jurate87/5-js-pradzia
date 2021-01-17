/*
Ternary operatorius
salyga ? "ka daryti jei tenkina" : "ka daryti jei netenkina"
|| reiskia ARBA
&& reiskia IR
*/

const age = 18;
const ageLimit = 18;
let isAdult = null;

if (age >= ageLimit) {
    isAdult = true;
} else {
    isAdult = false;
}
console.log('is adult:', isAdult);


const amzius = 8;
const amziausRiba = 18;

const arPilnametis = amziausRiba > amzius ? 'nepilnametis' : 'pilnametis';

console.log(arPilnametis);


const amzius2 = 40;
const kandidatas = 45;

const busPrezidentu = amzius2 >= kandidatas ? true : false;

console.log('Galiu buti prezidentu:', busPrezidentu);


const a = 4;
const b = 7;
const skaicius = a > b ? a : b;

console.log(skaicius);



const diena = 6;
// const arSavaitgalis = diena > 5 ? true : false;
// const arSavaitgalis = diena < 6 ? false : true;
// const arSavaitgalis = diena === 6 || diena === 7 ? true : false;
// const arSavaitgalis = diena < 8 && diena > 5 ? true : false;
// const arSavaitgalis = 8 > diena && 5 < diena ? true : false;
// console.log('savaitgalis', arSavaitgalis);

if (8 > diena) {
    if (5 < diena) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log(false);
}

// taip geriau nerasyti, nes sunku perskaityti ir suprasti 😥
const arSavaitgalis = 8 > diena ? 5 < diena ? true : false : false;

console.log('galas???', arSavaitgalis);




/*
ar gali vairuoti?
if (pilnametis &&
    praejes medicinine &&
    isklauses pirma pagalba &&
    islaikes vairavimo teorija &&
    islaikes vairavimo egzamina &&
    blaivas &&
    neapsineses &&
    nemiegantis) {
    console.log(true);
} else {
    console.log(false);
}
*/ 