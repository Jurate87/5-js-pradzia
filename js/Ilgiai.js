const a = [2, 4, 5, 9];
const aIlgis = a.length;
const b = ['2', '4', '0', '0'];
const bIlgis = b.length;

console.log(a);
console.log(b);

console.log(aIlgis);
console.log(bIlgis);

if (aIlgis === bIlgis) {
    console.log('taip');
} else {
    console.log('ne');
}



//
//true === !false
//false === !true 
//

if (!true === false) {
    console.log('priesingas taip');
} else {
    console.log('priesingas ne');
}


const radau = true;

if (!radau) {
    console.log('atradau');
} else {
    console.log('neatradau');
}