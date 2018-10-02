module.exports = function getZerosCount(number, base) {
    let result = number;
    let temp = base;

    for (let i = 2; i <= base; ++i) {
        let tempCount = 0
            , count = 0
            , numbers = number;

        if (temp % i) {
            continue;
        }

        while (!(temp % i)) {
            temp = Math.floor(temp / i);
            tempCount++;
        }

        while (numbers / i > 0) {
            count += Math.floor(numbers / i);
            numbers = Math.floor(numbers / i);
        }

        result = Math.min(result, Math.floor(count / tempCount));

    }
    return result;

};