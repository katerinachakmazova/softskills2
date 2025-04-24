// 'use strict';

let number = 1;
let dividers=0;


outerNumber: for (; number<=100; number++) {
  let half = Math.trunc(number / 2); 

  for (let i=1; i<=half; i++) {
  if(number%i===0) {
    dividers++;}
  if(dividers>1 || number === 1) {
      dividers=0;
      continue outerNumber;
    }
  }
  if (number !==1) {
    console.log(number);  
  }
  dividers=0;
}