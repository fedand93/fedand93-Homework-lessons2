const number = Math.trunc(+prompt("Enter the number"));
const numberMultiple = Math.trunc(+prompt("Enter the multiple number"));

function roundToMultiple(number, numberMultiple) {
    if (numberMultiple > number) {
        return numberMultiple;
    }   else if (isNaN(number) || isNaN(numberMultiple) || (numberMultiple < 1 || number < 1)) {
        return "You made a mistake";
    }
    let results = Math.round(number / numberMultiple) * numberMultiple;
    return results;
}

console.log(roundToMultiple(number, numberMultiple));