function plural(n) {
    if (n == 1) {
        return false;
    } else {
        return true;
    }
}

console.log(plural(0)); // true
console.log(plural(0.5)); // true
console.log(plural(1)); // false
console.log(plural(100)); // true
console.log(plural(Infinity)); // true