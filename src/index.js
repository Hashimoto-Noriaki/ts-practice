function square(n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        result += n;
    }
    return result;
}
console.log("".concat(square(5)));
//25
function square2(n) {
    return n * n;
}
console.log("".concat(square(4)));
//16
