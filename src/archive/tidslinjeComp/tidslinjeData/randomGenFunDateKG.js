
// NEDENFOR MER BARE RANDOMFUNKSJONER FOR Å SETTE OPP TESTMILJØ

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