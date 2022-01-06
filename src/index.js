module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberLength = String(number).length;
    let firstUnitOfNumber = String(number)[0];
    let lastUnitOfNumber = Number(String(number).slice(-1));
    
    if (number == 0) {
        return 'zero';
    }
    switch (numberLength) {
        case 1: return units[number];
        case 2: 
            return (firstUnitOfNumber == 1 ? teens[lastUnitOfNumber] : `${dozens[firstUnitOfNumber - 2]} ${units[lastUnitOfNumber]}`.trim());
        case 3: 
            let middleUnitOfNumber = String(number)[1];
            if (middleUnitOfNumber == 0) {
                return `${units[firstUnitOfNumber]} hundred ${units[lastUnitOfNumber]}`.trim();
            }
            else if (middleUnitOfNumber == 1) {
                return `${units[firstUnitOfNumber]} hundred ${teens[lastUnitOfNumber]}`;
            }
            return `${units[firstUnitOfNumber]} hundred ${dozens[middleUnitOfNumber-2]} ${units[lastUnitOfNumber]}`.trim();
    };

    return 'Incorrect Data';
};


