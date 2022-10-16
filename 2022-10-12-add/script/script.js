// Сделайте функцию getDigitsSum (digit - это цифра), 
// которая параметром принимает целое число(например 5025) 
// и возвращает сумму его цифр (в данном примере возвращаемое 
// из функции значение будет 12).


let getDigitsSum = function (num) {
    if (typeof num === 'number') {
        let sum = 0;
        let numToStr = String(num);
        let strToNum;

        for (let i = 0; i < numToStr.length; i++) {
            strToNum = Number(numToStr[i]);
            sum += strToNum;
        }
    console.log(sum);
    }

}

getDigitsSum(555);


