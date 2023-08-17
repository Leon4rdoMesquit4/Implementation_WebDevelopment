// Para buildar no terminal utilize o node Aula03.js!

let num = Number("1");
let num2 = Number("j");
let num3 = Number("11o");
let num4 = Number("");
let num5 = Number(4.884);

console.log(num);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(Number.NaN);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(num5.toLocaleString(`en`, {style: `currency`, currency: `USD`}));
console.log(num5.toExponential(2));
console.log(num5.toFixed(2));
console.log(num5.toPrecision(5));
console.log(num5.valueOf());

console.log(Number.isFinite(num5));
console.log(Number.isInteger(num5));
console.log(Number.isNaN(num5));
console.log(Number.isSafeInteger(num5));