function countOddNumbers(limitValue = 0) {
    try {
        let num = Number(limitValue);

        if (isNaN(num) || num % 1 !== 0 || num < 1) {
            return 0;
        }

        let count = 0;
        for (let i = 1; i <= num; i += 2) {
            count++;
        }

        return count;
    } catch (error) {
        return 0;
    }
}

console.log(countOddNumbers("7"));
console.log(countOddNumbers("10"));
console.log(countOddNumbers("abc"));
console.log(countOddNumbers("2.5"));