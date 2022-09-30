let a = 3;
let b = 2;
let c = 0;
c += b;
console.log(c)
a-=b;
console.log(a)
a*=b;
console.log(a)
a = 3;
b = 2;
a /= b;
console.log(a)
let x = 3;
let z = 2;
x %= z;
console.log(x)
x = 5;
z = 3;
x **= z;
console.log(x)


let first_num = 15;
let second_num = 20;
let third_num = 100;
if (first_num === second_num || first_num ===third_num){
    console.log("'first_num is equal second_num or third_num'");
}
else {
    console.log("'first_num is not equal to none'")
}

if (first_num >= second_num){
    console.log("'first_num is more than second_num'")
}
else if (first_num < second_num){
    console.log("'first_num is less than second_num'")
}
else {
    console.log("'Incorrect comparison'")
}

const month = "8";

switch (month){
    case "1": {
        console.log("'It is January month'")
    }
    break;
    case "2": {
        console.log("'It is February month'")
    }
    break;
    case "3": {
        console.log("'It is March month'")
    }
    break;
    case "4": {
        console.log("'It is April month'")
    }
    break;
    case "5": {
        console.log("'It is May month'")
    }
    break;
    case "6": {
        console.log("'It is June month'")
    }
    break;
    case "7": {
        console.log("'It is July month'")
    }
    break;
    case "8": {
        console.log("'It is August month'")
    }
    break;
    case "9": {
        console.log("'It is September month'")
    }
    break;
    case "10": {
        console.log("'It is October month'")
    }
    break;
    case "11": {
        console.log("'It is November month'")
    }
    break;
    case "12": {
        console.log("'It is December month'")
    }
    break;
    default: {
        console.log("'Incorrect number or not a number'");
    }
}