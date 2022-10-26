// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или
// равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

function filterRange2(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1, 2, 1, 1, 4, 12, 5];
let filtered = filterRange2(arr, 1, 4);

console.log("Исходный массив:");
console.log(arr);

console.log("Новый массив:");
console.log(filtered);

console.log("-------------------");

// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1, 2, 1, 1, 4, 12, 5];

console.log("Исходный массив:");
console.log(arr2);

filterRangeInPlace(arr2, 1, 4);
console.log("Исходный массив с изменениями:");
console.log(arr2);
