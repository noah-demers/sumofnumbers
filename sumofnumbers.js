function sumFor(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log('sumFor:', sum);
    return sum;
}
function sumWhile(numbers) {
    var sum = 0;
    var i = 0;
    while (i < numbers.length) {
        sum += numbers[i];
        i++;
    }
    console.log('sumWhile:', sum);
    return sum;
}
function sumRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    var result = numbers[0] + sumRecursion(numbers.slice(1));
    if (numbers.length === 4)
        console.log('sumRecursion:', result);
    return result;
}
function sumTheFunctionalWay(numbers) {
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    console.log('sumTheFunctionalWay:', sum);
    return sum;
}
// Test call
var sample = [1, 2, 3, 4];
sumFor(sample);
sumWhile(sample);
sumRecursion(sample);
sumTheFunctionalWay(sample);
