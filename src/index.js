module.exports = function getZerosCount(number, base) {
    let result = number;
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            let tempCount = 0;
            while (base % i === 0) {
                base /= i;
                tempCount++;
            }
            let res = 0;
            let numbers = number;
            while (numbers / i > 0) {
                res += Math.floor(numbers / i);
                numbers = Math.floor(numbers / i);
            }
            result = Math.min(result, Math.floor(res / tempCount));
        }
    }
    return result;
};