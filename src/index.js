module.exports = function getZerosCount(number, base) {
    if (number < 0)
        return false;
    else {
        let result = 1;
        for (let i = 10; i <= number; ++i) {
            let temp = i;
            while (temp % 5 === 0) {
                temp /= 5;
                ++result;
            }
        }
        return result;
    }
};