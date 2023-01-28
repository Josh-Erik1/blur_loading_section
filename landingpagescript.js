"Use Strict";
const text = document.querySelector(".loader");
const wrapper = document.querySelector(".wrapper");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  text.innerText = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);

  if (text.style.opacity === 0) {
    text.style.display("hidden");
  }

  wrapper.style.filter = `blur(${scale(load, 0, 100, 100, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// const arrA = ["boy", "girl", "dog", "goat", "cow"];
// const arrB = ["lion", "goat", "cow", "man", "boy"];

// console.log(arrA, arrB);

// const arrC = [];

// const compare = function (arr1, arr2) {
//   for (const item of arr1) {
//     console.log(item);
//     for (const itemb of arr2) {
//       console.log(itemb);
//       if (item === itemb) arrC.push(item);
//     }
//   }
//   return arrC;
// };

// console.log(compare(arrA, arrB));
// console.log(arrC);
