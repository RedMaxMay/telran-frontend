// 1)
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  firstname: "John",
  secondname: "Smith",
  age: 30,
};

let countObjProp = (obj) => {
  let counter = 0;
  for (const key in obj) {
    counter++;
  }
  return counter;
};

console.log(countObjProp(user));

console.log("==================");

// 2) Максимальная зарплата
// У нас есть объект salaries с зарплатами:

// Создайте функцию topSalary(salaries), которая возвращает
// имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let topSalary = (obj) => {
  let name = null;
  let maxSalary = 0;

  for (const key in obj) {
    if (obj[key] > maxSalary) {
      maxSalary = obj[key];
      name = key;
    }
  }
  
  return name;
};

console.log(topSalary(salaries));
