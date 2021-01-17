/* 
panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo:
pvz.: "absdef" -> "fedcba"
*/


const pradinisTekstas = 'abcdef';
const tekstoIlgis = pradinisTekstas.length;
let atbulasTekstas = '';

for (let i = 0; i < tekstoIlgis; i++) {
    const raide = pradinisTekstas[i];
    atbulasTekstas = raide + atbulasTekstas;
}

console.log(pradinisTekstas, '->', atbulasTekstas);




/* //for (let i = tekstoIlgis; i > 0; i++) {
    const raide = pradinisTekstas[tekstoIlgis - i - 1];
   atbulasTekstas += raide;
}

console.log(pradinisTekstas, '->', atbulasTekstas);


*/   // Nerekomenduotinas budas
