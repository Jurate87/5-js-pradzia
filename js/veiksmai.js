const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;

const sum = n2 / n1 - n3 + n4 * n5;
/* //
const sum = 2 / 1 - 3 + 4 * 5;
const sum = 2 - 3 + 4 * 5;
const sum = 2 - 3 + 20;
const sum = -1 + 20;
const sum = 19;
*/

console.log(sum);

console.log('------------------');

const w1 = 'My';
const w2 = 'name';
const w3 = 'is';
const w4 = 'Jack';

const sentence = w1 + ', ' + w2 + ', ' + w3 + ', ' + w4 + '.';
console.log(sentence);

const s = ', ';  // space
const sentence2 = w1 + s + w2 + s + w3 + s + w4 + '.';
console.log(sentence2);

console.log('------------------');
// skaiciavimo logika: 1-2+3-4+5

const numbers = [3, -4, -5, 6, 7];

// 1) pirmasis "tiesioginis" budas
const alterSum1 = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];

// 2) antrasis budas, kai issitraukiame reiksmes pries jas panaudojant
const nl1 = numbers[0];
const nl2 = numbers[1];
const nl3 = numbers[2];
const nl4 = numbers[3];
const nl5 = numbers[4];

const alterSum2 = nl1 - nl2 + nl3 - nl4 + nl5;

// 3) treciasis "pazingsniui" skaiciavimo budas

let alterSum3 = 0;

alterSum3 = alterSum3 + numbers[0];
alterSum3 = alterSum3 - numbers[1];
alterSum3 = alterSum3 + numbers[2];
alterSum3 = alterSum3 - numbers[3];
alterSum3 = alterSum3 + numbers[4];

// 4) ketvirtas "pusiau automatinis" sumavimo budas

let alterSum4 = 0;
let index = -1;

index = index + 1;
alterSum4 = alterSum4 + numbers[index]; // prisumavau pirma skaiciu -> 3

index = index + 1;
alterSum4 = alterSum4 + numbers[index]; // prisumavau antra skaiciu -> -1

index = index + 1;
alterSum4 = alterSum4 + numbers[index]; // prisumavau trecia skaiciu -> -6

index = index + 1;
alterSum4 = alterSum4 + numbers[index]; // prisumavau ketvirta skaiciu -> 0

index = index + 1;
alterSum4 = alterSum4 + numbers[index]; // prisumavau penkta skaiciu -> 7


/*
Jeigu, norime atnaujinti to paties kintamojo reiksme:
let a = 5;
a = a + 2;      // a -> 7
tai trumpesne jo versija
let a = 5;
a += 2;      // a -> 7
*/

// 5) penktas "pusiau automatinis" optimizuotas sumavimo budas

let alterSum5 = 0;
let index5 = -1;

index5 += 1;
alterSum5 += numbers[index5]; // prisumavau pirma skaiciu -> 3

index5 += 1;
alterSum5 += numbers[index5]; // prisumavau antra skaiciu -> -1

index5 += 1;
alterSum5 += numbers[index5]; // prisumavau trecia skaiciu -> -6

index5 += 1;
alterSum5 += numbers[index5]; // prisumavau ketvirta skaiciu -> 0

index5 += 1;
alterSum5 += numbers[index5]; // prisumavau penkta skaiciu -> 7


/*
Jeigu norima skaiciu padydinti 1 vienetu:
let a = 5;      // a -> 5
a++;            // a -> 6   padidinti po panaudojimo
++a;            // a -> 7   padidinti pries panaudojant
Jeigu norima skaiciu sumazinti 1 vienetu:
let a = 5;      // a -> 5
a--;            // a -> 4   sumazinti po panaudojimo
--a;            // a -> 3   sumazinti pries panaudojant
*/

// 6a) sestas "pusiau automatinis" dar labiau optimizuotas sumavimo budas

let alterSum6 = 0;
let index6 = -1;

alterSum6 += numbers[++index6]; // prisumavau pirma skaiciu -> 3
alterSum6 += numbers[++index6]; // prisumavau antra skaiciu -> -1
alterSum6 += numbers[++index6]; // prisumavau trecia skaiciu -> -6
alterSum6 += numbers[++index6]; // prisumavau ketvirta skaiciu -> 0
alterSum6 += numbers[++index6]; // prisumavau penkta skaiciu -> 7

// 6b) sestas "pusiau automatinis" dar labiau optimizuotas sumavimo budas

let alterSum7 = 0;
let index7 = 0;

alterSum7 += numbers[index7++]; // prisumavau pirma skaiciu -> 3
alterSum7 += numbers[index7++]; // prisumavau antra skaiciu -> -1
alterSum7 += numbers[index7++]; // prisumavau trecia skaiciu -> -6
alterSum7 += numbers[index7++]; // prisumavau ketvirta skaiciu -> 0
alterSum7 += numbers[index7++]; // prisumavau penkta skaiciu -> 7

console.log(alterSum7); 