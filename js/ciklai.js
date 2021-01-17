/* 
Suskaiciuok nuo 1 iki 5.
Atvaizdavimas:
console.log(skaicius);
*/


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


let skaicius = 0;

skaicius++
console.log(skaicius)

skaicius++
console.log(skaicius)

skaicius++
console.log(skaicius)

skaicius++
console.log(skaicius)

skaicius++
console.log(skaicius)



let skaicius1 = 1; 

console.log('pradzia')

for (let i=0; i<5; i++) {
    console.log(skaicius1++)
}

console.log('pabaiga')




const pazymiai = [10, 2, 8, 4, 6, 4, 8, 2, 10];

let suma = 0;
const skaiciuKiekis = pazymiai.length;


for (let i=0; i < skaiciuKiekis; i++) {
    suma += pazymiai[i];

}

let vidurkis = suma / skaiciuKiekis;

console.log('Pazymiu vidurkis:', vidurkis);