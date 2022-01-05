module.exports = function toReadable (number) {
    // For 0-9
    if (String(number).length == 1) {
        let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        return units[number];
    }
    else
    // Number(String(number).slice(0, 1)) - return first unit of number
    // Number(String(number).slice(-1)) - return last unit of number
    // For 10-19
    if (String(number).length == 2 && Number(String(number).slice(0, 1)) == 1) {
        let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let caseNumber = Number(String(number).slice(-1));
        return teens[caseNumber];
    }
    else
    // For 20-99
    if (String(number).length == 2) {
        let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let dozensForReturn = dozens[Number(String(number).slice(0, 1)) - 2];
        let unitsForReturn = units[Number(String(number).slice(-1))];
        return `${dozensForReturn} ${unitsForReturn}`;
    }
    else
    // For 100-109, 200-209, ..., 900-999
    if (String(number).length == 3 && Number(String(number).slice(1, 2)) == 0) {
        let unitsForHundred =  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let unitsForHundredForReturn = unitsForHundred[Number(String(number).slice(0, 1)) - 1];
        let hundred = ['hundred', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds'];
        let hundredForReturn = hundred[Number(String(number).slice(0, 1)) - 1];
        let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let unitsForReturn = units[Number(String(number).slice(-1))];
        return `${unitsForHundredForReturn} ${hundredForReturn} ${unitsForReturn}`;
    }
    else
    // For 110-119, 210-219, ..., 910-919
    if (String(number).length == 3 && Number(String(number).slice(1, 2)) == 1) {
        let unitsForHundred =  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let unitsForHundredForReturn = unitsForHundred[Number(String(number).slice(0, 1)) - 1];
        let hundred = ['hundred', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds'];
        let hundredForReturn = hundred[Number(String(number).slice(0, 1)) - 1];
        let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let teensForReturn = teens[Number(String(number).slice(-1))];
        return `${unitsForHundredForReturn} ${hundredForReturn} ${teensForReturn}`;
    }
    else
    // For 120-199, 220-299, ..., 920-999
    if (String(number).length == 3) {
        let unitsForHundred =  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let unitsForHundredForReturn = unitsForHundred[Number(String(number).slice(0, 1)) - 1];
        let hundred = ['hundred', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds', 'hundreds'];
        let hundredForReturn = hundred[Number(String(number).slice(0, 1)) - 1];
        let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let dozensForReturn = dozens[Number(String(number).slice(1, 2))-2];
        let unitsForReturn = units[Number(String(number).slice(-1))];
        return `${unitsForHundredForReturn} ${hundredForReturn} ${dozensForReturn} ${unitsForReturn}`;
    }
    

    return 'Incorrect Data';
};

alert (toReadable(999));
