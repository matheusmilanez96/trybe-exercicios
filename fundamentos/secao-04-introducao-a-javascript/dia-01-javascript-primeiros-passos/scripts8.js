const a = 3;
const b = 4;
const c = 5;

if (a > b) {
    console.log(a)
} else if (a <= b) {
    console.log(b)
}

if (a > b) {
    if (a > c) {
        console.log(a)
    } else if (a <= c) {
        console.log(c)
    }
} else if (a < b) {
    if (b > c) {
        console.log(b)
    } else if (b <= c) {
        console.log(c)
    }
}