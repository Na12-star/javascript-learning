function sumBetween(startValue = 0, endValue = 0) {
    try {
        let start = Number(startValue);
        let end = Number(endValue);

        if (isNaN(start) || isNaN(end) || start % 1 !== 0 || end % 1 !== 0) {
            return 0;
        }

        if (start > end) {
            return 0;
        }

        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }

        return sum;
    } catch (error) {
        return 0;
    }
}

console.log(sumBetween("1", "5"));
console.log(sumBetween("3", "3"));
console.log(sumBetween("5", "1"));
console.log(sumBetween("1.5", "3"));