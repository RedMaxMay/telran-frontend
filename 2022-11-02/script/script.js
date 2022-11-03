// 1) Напишите функцию, которая поверхностно сравнивает два объекта.

// Ожидаемый результат: True если объекты идентичны,
// false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

let isEqual = (obj1, obj2) => {
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i][0] !== arr2[i][0] || arr1[i][1] !== arr2[i][1]) {
      return false;
    }
  }
  return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

console.log("======================");

// 2)Напишите функцию, которая поверхностно находит пересечения объектов
//  и возвращает объект пересечений.

const data4 = { a: 1, b: 2, c: 3, h: 5,};
const data5 = { c: 1, b: 2, g: 10, c: 3, };

let intersection = (obj1, obj2) => {
  let intersectionObj = {};

  for (const key in obj1) {
    console.log(key);
    if (obj1[key] === obj2[key]) {
      intersectionObj[key] = obj1[key];
    }
  }
  return intersectionObj;
};

console.log(intersection(data4, data5)); // {b: 2, c: 3}
