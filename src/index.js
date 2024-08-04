module.exports = function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return ones[number];
    }
    if (number < 20) {
        return teens[number - 10];
    }
    if (number < 100) {
        let num1 = Math.floor(number / 10);
        let num2 = number % 10;
        return tens[num1] + (num2 !== 0 ? ' ' + ones[num2] : '');
    }
    if (number < 1000) {
        let num1 = Math.floor(number / 100);
        let num2 = number % 100;
        if (num2 === 0) {
            return `${ones[num1]} hundred`;
        }
        if (num2 < 10) {
            return `${ones[num1]} hundred ${ones[num2]}`;
        }
        if (num2 < 20) {
            return `${ones[num1]} hundred ${teens[num2 - 10]}`;
        }
        let num3 = number % 10;
        let num4 = Math.floor(num2 / 10);
        return `${ones[num1]} hundred ${tens[num4]}${num3 !== 0 ? ' ' + ones[num3] : ''}`;
    }
}

console.log(func(959));
