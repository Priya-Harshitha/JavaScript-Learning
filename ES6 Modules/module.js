import {PI, getDiameter, getCircumfernce, getArea, getVolume} from './circle.js';

console.log(PI);

const radius = 12;

const res = getDiameter(radius);
console.log(res.toFixed(2));

const res1 = getCircumfernce(radius);
console.log(res1.toFixed(2));

const res2 = getArea(radius);
console.log(res2.toFixed(2));

const res3 = getVolume(radius);
console.log(res3.toFixed(2));