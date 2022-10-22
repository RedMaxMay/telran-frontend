// Напишите следующую функцию, которая принимает некий массив данных. 

// если в массиве только строковый тип данных, то функция 
// должна находить самую длинную строку и возвращать массив 
// из двух элементов - эту строку и её индекс исходном массиве 

// если в массиве только цифры, то функция должна находить самую 
// большую цифру и возвращать массив из двух элементов - из этой 
// цифры и её индекса в исходном массиве

// во всех остальных случаях (если там другие типы данных или же 
//     они смешаны), то функция должна возвращать массив из 
//     двух элементов - первый это строка 
//     'неверный тип данных в массиве', 
//     а второй элемент это общая длина массива.


let someArray1 = ['Ivan', 'Andrey', 'Aleksandr', 'Ira'];
let someArray2 = [1, 5, 54, 10, -12, 8, 43];
let someArray3 = ['asd', 5, 'qweqwe', 1, true, undefined, 123];

let getIndexOfBigNumOrStr = arr => {

    let numCounter = 0;
    let strCounter = 0;

    // Определяем количество элементов с типом данных number и string
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            strCounter += 1;
        }
        if (typeof arr[i] === 'number') {
            numCounter += 1;
        }
    }

    // Все элементы одного типа, если их кол-во = длинне массива
    if (strCounter == arr.length) {
        let longestStr = arr[0];
        let longestStrIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > longestStr.length) {
                longestStr = arr[i];
                longestStrIndex = i;
            }
        }
        return arrIsStrType = [
            `Самая длинная строка в массиве = ${longestStr}`,
            `Индекс самой большой строки = ${longestStrIndex}`
        ]
    }

    if (numCounter == arr.length) {
        let biggestNum = arr[0];
        let biggestNumIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > biggestNum) {
                biggestNum = arr[i];
                biggestNumIndex = i;
            }
        }
        return arrIsNumType = [
            `Самая большая цифра в массиве = ${biggestNum}`,
            `Индекс самой большой цифры = ${biggestNumIndex}`
        ]
    }

    return arrIsMixedType = [
        'Неверный тип данных в массиве',
        `Общая длинна массива = ${arr.length}`
    ];
}


console.log(getIndexOfBigNumOrStr(someArray1));
console.log(getIndexOfBigNumOrStr(someArray2));
console.log(getIndexOfBigNumOrStr(someArray3));

