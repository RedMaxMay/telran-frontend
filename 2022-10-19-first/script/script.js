// Напишите функцию camelize(str), которая преобразует строки 
// вида «my-short-string» в «myShortString».


// То есть дефисы удаляются, а все слова после них получают 
// заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на 
// массив символов, потом переделайте всё как нужно и 
// методом join соедините обратно.



// --------------------- VERSION 1 ------------------------------



let camelize1 = function(str) {
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            i = i + 1;
            arr[i] = arr[i].toUpperCase();
        }
    }

    str = arr.join('');
    arr = str.split('-');
    str = arr.join('');
    return str;
}


console.log(camelize1('my-short-string'));


// --------------------- VERSION 2 ------------------------------


let camelize2 = str => {
    if (str.indexOf('-') > -1) {
        let strToArr = str.split('-');
        for (let i = 1; i < strToArr.length; i++) {
            // console.log(strToArr[i][1].toUpperCase());  
            // Можно ли изменить букву в строке, если она часть массива (пример выше)? 
            strToArr[i] = strToArr[i].split('');
            strToArr[i][0] = strToArr[i][0].toUpperCase();
            strToArr[i] = strToArr[i].join('');
        }
        strToArr = strToArr.join('');
        str = strToArr;
    }
    return str;
}

console.log(camelize2('my-short-string'));

