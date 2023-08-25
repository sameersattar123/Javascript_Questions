let arr = [5];
let count = 5;

var missing = new Array();

for (let i = 0; i <= count; i++) {
    if (arr.indexOf(i) == -1) {
        missing.push(i)
    }
}

console.log(missing)