import moment from "moment"
//export vs export default: https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988

 function RandomArrDateKgCO2 (props){ // returnerer et 2d-array med props.antall dager fra og med props.startdato (2020-06-01 er default)
    var arr = []
    var startdato =  "2020-11-01" // velger props.startdato eller default spesifisert etter ||
    var max = 10
    var min = 0
    for (var i = 0; i <  100; i++){
        arr.push([(new Date(startdato)), Math.floor(Math.random() * (max - min + 1)) + min]) // Math.floor... gir et tilfeldig tall i [0,100]
    }
    return arr
}

export function StringOfRandomArrDateKgCO2(){ //
    let arr = RandomArrDateKgCO2()
    let newArr = []
    for (var i = 0; i < arr.length; i++){
        arr[i][0].setDate( arr[i][0].getDate() +i ) // øker datoen med en dag
        newArr.push(formatDate(arr[i][0]), arr[i][1])
    }
    return newArr // returnerer et array med [[dato1, kg CO2], [dato2, kg CO2], ...], hvor dato1 osv er en string på formen YYYY-MM-DD
}

export function formatDate(date) { // funksjon som tar inn en dato og returnerer en string på formen YYYY.MM.DD
    let d = new Date(date)
    let month = '' + (d.getMonth() + 1) // måneder begynner med index 0
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('.'); // her kan vi enkelt stokke om til feks DD-MM-YY, DD.MM.YYYY els.
}

// ER: trengte dato på formatet YYYY-MM-DD
export function formatDateDash(date) {
    let d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    let year = d.getFullYear()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export function formatDateWithTime(date) { // funksjon som tar inn en dato og returnerer en string på formen YYYY.MM.DD
    let d = new Date(date)
    let month = '' + (d.getMonth() + 1) // måneder begynner med index 0
    let day = '' + d.getDate()
    let year = d.getFullYear()
    let hour = '' + d.getHours()
    let minutes = '' + d.getMinutes()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    
    let finDato = "" // her kan vi enkelt stokke om til feks DD-MM-YY, DD.MM.YYYY els.
    let finTidspunkt = ""
    finDato = [year, month, day].join('.'); // her kan vi enkelt stokke om til feks DD-MM-YY, DD.MM.YYYY els.
    finTidspunkt = [hour, minutes].join(':');


    return [finDato, finTidspunkt].join('-'); // her kan vi enkelt stokke om til feks DD-MM-YY, DD.MM.YYYY els.
}

export function dagerSiden(date) {
    const daysBetween = moment(new Date()).diff(new Date (date), "days")
    return daysBetween
}

export function antallDagerMellom (startDate, endDate) {
    const daysBetween = moment(new Date (endDate)).diff(new Date (startDate), "days")
    return daysBetween
}
// regne ut dager mellom to datoer:

/*

    const daysBetween = moment(new Date("dagens_dato_her")).diff(new Date ("startdato_her"), "days")
    console.log("her:", daysBetween)

*/