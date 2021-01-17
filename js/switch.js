//

const day = 2;

switch (day) {
    case 1:
        console.log('pirmadienis');
        break;

    case 2:
        console.log('antradienis');
        break;

    case 3:
        console.log('treciadienis');
        break;

    default:
        console.log('tokia diena neegzistuoja 👀');
        break;
}

const day2 = 2;

switch (day2) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;

    default:
        console.log('Ne savaites diena...');
        break;
}


const stoteleKurIlipau = 'Parko';

switch (stoteleKurIlipau) {
    case 'N.V.ziedas':
        console.log('N.V.ziedas');
    case 'Parko':
        console.log('Parko');
    case 'Rudens':
        console.log('Rudens');
    case 'Zaliasis tiltas':
        console.log('Galutine marsruto stotele: Zaliasis tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Rudens':
        console.log('Rudens');
    case 'Parko':
        console.log('Galutine marsruto stotele: Parko');
        break;
} 