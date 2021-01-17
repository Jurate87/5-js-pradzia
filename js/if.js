/* !!!
Loginis palyginimas
if (salyga) {
    ka daryti, jei salyga tenkinama
} else {
    ka daryti, jei salyga netenkinama
}
Loginiai operatoriai:
GALIMI: >, <, <=, >=, ==, !=, ===, !==, !
REKOMENDUOTINI: >, <, <=, >=, ===, !==, !
NEREKOMENDUOTINI: ==, !=
SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ...  else if () {}
if () {} else if () {} ...  else if () {} else {}
*/

const a = 9;
const b = 7;

if (a > b) {
    console.log('a daugiau uz b');
}

if (a > b) {
    console.log('a daugiau uz b');
} else {
    console.log('a NERA daugiau uz b');
}

console.log('------------------');

const diena = 'sek';

if (diena === 'pir') {
    console.log('pirmadienis');
} else {
    if (diena === 'ant') {
        console.log('antradienis');
    } else {
        if (diena === 'tre') {
            console.log('treciadienis');
        } else {
            if (diena === 'ket') {
                console.log('ketvirtadienis');
            } else {
                if (diena === 'pen') {
                    console.log('penktadienis');
                } else {
                    if (diena === 'ses') {
                        console.log('sestadienis');
                    } else {
                        if (diena === 'sek') {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}


const diena2 = 'ast';

if (diena2 === 'pir') {
    console.log('pirmadienis');
} else if (diena2 === 'ant') {
    console.log('antradienis');
} else if (diena2 === 'tre') {
    console.log('treciadienis');
} else if (diena2 === 'ket') {
    console.log('ketvirtadienis');
} else if (diena2 === 'pen') {
    console.log('penktadienis');
} else if (diena2 === 'ses') {
    console.log('sestadienis');
} else if (diena2 === 'sek') {
    console.log('sekmadienis');
} else {
    console.log('nera tokios dienos 👀');
}