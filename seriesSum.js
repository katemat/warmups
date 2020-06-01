function findSeriesSum(n) {
    var sum = 0;
    var denominator = 1;

    for (var i = 0; i < n; i++) {
        if (i == 0) {
        sum = 1;
        } else {
        denominator += 3;
        sum += 1 / denominator;
        }
    }
    return sum.toFixed(2);
}
console.log(findSeriesSum(5));