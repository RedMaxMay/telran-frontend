// First level: Сравнить две константы двумя разными способами: 
//             - Создать две константы, присвоив одной значение строкового типа, а второй числового
//             - Сравнить эти константы и вывести в консоль результат типа boolean так, чтобы
//             в одном случае ( == ) он был true, а в другом ( === ) false



const first = 5;
const second = '5';

console.log(first == second);
console.log(first === second);

console.log('------------------------------');


// Second level: Реализовать решение задачи в JS: 
//             - У нас есть 100 (создать константу)
//             - Цена помидоров на рынке - 10 (создать константу)
//             - Цена огурцов на рынке - 5 (создать константу)
//             - Цена яблок на рынке - 15 (создать константу)
//             - Оставшиеся деньги потратим на орехи (создать переменную)


//         - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
//         - оставшиеся деньги потратили на орехи (присвоить значение переменной)

//         - сколько денег мы потратили на орехи? (вывести переменную в консоль)
//         - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)


//         - в зависимости от того потратили ли мы на орехи больше времени чем на всё остальное
//         выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'


const myMoney = 100;

const tomato = 10;
const cucumber  = 5;
const apple = 15;

let moneyForNuts;

let moneyForVegAndFruits = (tomato + cucumber + apple) * 2;
moneyForNuts = myMoney - moneyForVegAndFruits;

console.log(`I spent ${moneyForNuts} for Nuts`);
console.log('I spent more on Nuts then Vegetables and Fruits?', moneyForNuts > moneyForVegAndFruits );
console.log('I spent more on Vegetables and Fruits then Nuts?', moneyForNuts < moneyForVegAndFruits );

if (moneyForNuts > moneyForVegAndFruits) {
    console.log('So, I spent more on Nuts');
} else {
    console.log('So, I spent more on Vegetables and Fruits');
}





