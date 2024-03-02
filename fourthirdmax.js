const input = require("readline-sync");
let a = input.questionInt("Enter first number: ");
let b = input.questionInt("Enter second number: ");
let c = input.questionInt("Enter third number: ");
let d = input.questionInt("Enter fourth number: ");

let l, s, l1, s1, l2, s2, l3, s3;

if (a > b) {
    l = a;
    s = b;
} else {
    l = b;
    s = a;
}

if (c > d) {
    l1 = c;
    s1 = d;
} else {
    l1 = d;
    s1 = c;
}

if (l > l1) {
    l2 = l;
    s2 = l1;
} else {
    l2 = l1;
    s2 = l;
}

if (s > s1) {
    l3 = s1;
    s3 = s;
} else {
    l3 = s;
    s3 = s1;
}

// Find the third largest number
let thirdLargest;
if (s2> s3) {
    thirdLargest = s3;
} else {
    thirdLargest = s2;
}

console.log("The third largest number is:", thirdLargest);