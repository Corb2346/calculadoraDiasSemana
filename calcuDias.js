
const readDay = () => document.getElementById("dia").value
const readMonth = () => document.getElementById("mes").value
const readYear = () => document.getElementById("anio").value


function calculateDate() {

    let date = readValues();
    let d = setDate(date);
    console.log(d);
    console.log(typeof (d));
    let numberDay = d.getDay();
    console.log(numberDay);
    console.log(typeof (numberDay));

    let foundDay = checkDay(numberDay);
    console.log("tu dia es" + foundDay);

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
            break;
        case 2:
            return "Martes"
            break;
        case 3:
            return "Miercoles"
            break;
        case 4:
            return "Jueves"
            break;
        case 5:
            return "Viernes"
            break;
        case 6:
            return "Sábado"
            break;
        case 0:
            return "Domingo"
            break;

        default:
            break;
    }
}

const displayDay = foundDay => {
    document.getElementById("result").innerText  = `Es día ${foundDay}`;
} 