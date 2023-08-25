let arr = [1, 23, 4, 5, 6, 7];

let maximum = arr[0];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > maximum) {
    maximum = arr[i];
  }
}

console.log(maximum);


let arr2 = [1, 23, 4, 5, 6, 7];

let minimum = arr[0];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] < minimum) {
    minimum = arr[i];
  }
}

console.log(minimum);