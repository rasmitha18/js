function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }

    return reverse;
}

console.log(reverseNumber(584348099));