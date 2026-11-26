// task 1
let i = 0;

for (i = 0; i < 2; i++) {
    console.log("Привет");
}

// task 2

for (i = 0; i <= 5; i++) {
    console.log(i);
}

// task 3

for (i = 7; i <= 22; i++) {
    console.log(i);
}

// task 4

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`${key}: ${dog[key]}`);
}


// task 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(n);
console.log(num);


// task 6

let firstFriday = 3;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет`);
}