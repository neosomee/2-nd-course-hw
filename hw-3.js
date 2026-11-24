// task 1

let password = 'пароль';
let userPassword = prompt('Введите пароль');

if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// task 2

let c = 21;

if (0 < c < 10) {
    alert('Верно')
} else {
    alert('Неверно')
}

// task 3

let d = 13;
let e = 37;

if (d || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

// task 4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


// task 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('зима');
        break;

    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;

    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;

    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;

    default:
        console.log('Такого месяца не существует');
}


// add task 1

let userInput = prompt('Пожалуйста, введите любое число');

let number = Number(userInput);

if (isNaN(number)) {
    alert('Введите, пожалуйста, число');
} else if (number % 2 === 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

// add task 2

let clientOs = 0;

if (clientOs === 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOs === 1) {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("У тебя BlackBerry???");
}

// add task 3

let clientOS = 0;
clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 0 && clientDeviceYear > 2015) {
    console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log("Установите облегченную версию приложения для Android по ссылке");
} else if (clientOS === 1 && clientDeviceYear > 2015) {
    console.log("Установите версию приложения для iOS по ссылке");
}