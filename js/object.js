const petras = {
    vardas: 'Petras',
    amzius: 99,
    plaukuSpalva: 'ruda',
    arVairuoja: true,
    arMeluoja: false,
    aplankytiMiestai: ['Vilnius', 'Telsiai', 'Riga', 'Kuprioniskes'],
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 70
        },
        {
            vardas: 'Jonukas',
            amzius: 60
        }
    ],
    masinos: [
        {
            marke: 'Tesla',
            spalva: 'balta'
        },
        {
            marke: 'Audi',
            spalva: 'raudona'
        },
        {
            marke: 'Bmw',
            spalva: 'juoda'
        },
    ]
}

console.log(petras);
console.log(petras['vardas']);
console.log(petras['amzius']);
console.log(petras['aplankytiMiestai']);
console.log(petras['aplankytiMiestai'][2]);
console.log(petras['vaikai']);
console.log(petras['vaikai'][0]);
console.log(petras['vaikai'][0].vardas);
console.log(petras['vaikai'][0].amzius);

console.log(petras['masinos']);
console.log(petras['masinos'][0]);
console.log(petras['masinos'][0].marke);
console.log(petras['masinos'][0].spalva);

console.log('----------------------------');

console.log(petras);
console.log(petras.vardas);
console.log(petras.amzius);
console.log(petras.aplankytiMiestai);
console.log(petras.aplankytiMiestai[2]);
console.log(petras.vaikai);
console.log(petras.vaikai[0]);
console.log(petras.vaikai[0].vardas);
console.log(petras.vaikai[0].amzius);

console.log(petras.masinos);
console.log(petras.masinos[0]);
console.log(petras.masinos[0].marke);
console.log(petras.masinos[0].spalva);


console.clear();

const namas = {
    pamatuTipas: 'poliniai',
    stogoTipas: 'slaitinis',
    languKiekis: 6,
    aukstai: 2,
    durys: 2,
    kambariai: 7
}


const dominantisParametras = 'pamatuTipas';
const reiksme = namas[dominantisParametras];

console.log(reiksme);