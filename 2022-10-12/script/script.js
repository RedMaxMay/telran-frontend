function returnStringLength(value) {
    if (typeof value === "string") {
        return value.length;
    }

    if (typeof value === "number" || typeof value === "boolean") {
        let str = String(value);
        return str.length;
    }

    return "Invalid data type";
}

console.log(returnStringLength("Hello World!"));
console.log(returnStringLength(123456789));
console.log(returnStringLength(true));
console.log(returnStringLength(undefined));

console.log("-------(function expression)--------");

let returnStringLength2 = function (value) {
    if (typeof value === "string") {
        return value.length;
    }

    if (typeof value === "number" || typeof value === "boolean") {
        let str = String(value);
        return str.length;
    }

    return "Invalid data type";
};

console.log(returnStringLength2("Hello World!"));
console.log(returnStringLength2(123456789));
console.log(returnStringLength2(true));
console.log(returnStringLength2(undefined));

console.log("-------(arrow function)------------");

let returnStringLength3 = (value) => {
    if (typeof value === "string") {
        return value.length;
    }

    if (typeof value === "number" || typeof value === "boolean") {
        let str = String(value);
        return str.length;
    }

    return "Invalid data type";
};

console.log(returnStringLength3("Hello World!"));
console.log(returnStringLength3(123456789));
console.log(returnStringLength3(true));
console.log(returnStringLength3(undefined));

