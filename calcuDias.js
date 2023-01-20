
const readDay = () => Number(document.getElementById("dia").value)
const readMonth = () => Number(document.getElementById("mes").value)
const readYear = () => Number(document.getElementById("anio").value)
const displayDayOfWeek = () => document.getElementById("result")
const displayYearLeap = () => document.getElementById("añoBiciesto");

let adviceCounter =0;

const validateInputs = () => {
    day = readDay();
    month = readMonth();
    year = readYear();

    if(day>0 && day<32 && month>0 && month< 13 && year >= 1970 && year<=2030 ) return true
    else alert("Campos faltantes") //missingInput();
 
}

/* const missingInput = () => {
    if(adviceCounter!=0){
        console.log("estoy en missing input");
        let advice = document.createElement("div");
    advice.innerText = "Información Faltante";
    document.getElementById("calculateBtn").appendChild(advice);
    adviceCounter++;
    } else null
} */

const isLeapYear = year =>{
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    }

function calculateDate() {

    let validation = validateInputs();
    console.log(validation);
    if(validation){
        let date = readValues();
        let dateCreated = setDate(date);
        console.log(dateCreated);
        console.log(typeof (dateCreated));
        let numberDay = dateCreated.getDay();
        console.log(numberDay);
        console.log(typeof (numberDay));

        let confirmLeapYear = isLeapYear(year);
        console.log("Es año biciesto: "+confirmLeapYear);
        displayLeapYear(confirmLeapYear);
        let foundDay = checkDay(numberDay);
        console.log("tu dia es" + foundDay);
        let valueMoonPhase = calculateMoonPhase();
        let  moonPhase = getMoonPhase(valueMoonPhase);
        displayMoonPhase(moonPhase);
        displayDay(foundDay);
    } 
    

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
    if(foundDay == "Sábado" || foundDay == "Domingo")
    displayDayOfWeek().innerText = `Es día ${foundDay}, No laboral`;
    else displayDayOfWeek().innerText = `Es día ${foundDay}, Laboral`;
}

const displayLeapYear = (confirm) => {
    if(confirm)
    displayYearLeap().innerHTML =( "Año Biciesto")
    else displayYearLeap().innerHTML =( "Año Normal")

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
            return "Luna Nueva"

        case 1:
            return "Luna Creciente Cóncava"

        case 2:
            return "Cuarto Creciente"

        case 3:
            return "Creciente Convexa"

        case 4:
            return "Luna Llena"

        case 5:
            return "Menguante Convexa"

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