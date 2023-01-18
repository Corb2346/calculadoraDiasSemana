
const readDay = () => document.getElementById("dia").value
const readMonth = () => document.getElementById("mes").value
const readYear = () => document.getElementById("anio").value

function calculateDate() {

    let date = readValues();
    let dateCreated = setDate(date);
    console.log(dateCreated);
    console.log(typeof (dateCreated));
    let numberDay = dateCreated.getDay();
    console.log(numberDay);
    console.log(typeof (numberDay));

    let foundDay = checkDay(numberDay);
    console.log("tu dia es" + foundDay);
    let valueMoonPhase = calculateMoonPhase();
    let  moonPhase = getMoonPhase(valueMoonPhase);
    displayMoonPhase(moonPhase);
    displayDay(foundDay);

}

const setDate = (date) => new Date(date);

const readValues = () => {
    let newDate = [];
    let day = readDay();
    newDate.unshift(day);
    let month = readMonth();
    newDate.unshift(month);
    let year = readYear();
    newDate.unshift(year);
    let date = newDate.join('-')

    return date
}

const checkDay = numberOfDay => {
    switch (numberOfDay) {
        case 1:
            return "Lunes"
        case 2:
            return "Martes"
        case 3:
            return "Miercoles"

        case 4:
            return "Jueves"

        case 5:
            return "Viernes"

        case 6:
            return "Sábado"

        case 0:
            return "Domingo"
        default:
            break;
    }
}

const displayDay = foundDay => {
    document.getElementById("result").innerText = `Es día ${foundDay}`;
}

function calculateMoonPhase() {
    day = readDay();
    month = readMonth();
    year = readYear();
    let c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    return b;
}

const getMoonPhase = valueMoonPhase => {
    switch (valueMoonPhase) {
        case 0:
            return "Luna Nueva "

        case 1:
            return "Luna Creciente Cóncava"

        case 2:
            return "Cuarto Creciente"

        case 3:
            return "Creciente Convexa"

        case 4:
            return "Luna Llena"

        case 5:
            return "Menguante Conveza"

        case 6:
            return "Cuarto Menguante"

        case 7:
            return "Menguante Cóncava"

        default:
            break;
    }
}

const displayMoonPhase = moonPhase => {
    document.getElementById("moonphase").innerText = moonPhase;
}