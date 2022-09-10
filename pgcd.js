function pgcd(a, b) {
    if (b) {
        return pgcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
console.log(pgcd(8,10));