// task 1

function minOfTwo(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b
    }
}

console.log(minOfTwo(8, 4)); 
console.log(minOfTwo(6, 6));


// task 2

function even(c, d) {
    if (c % 2 == 0) {
        return "Число четное"
    } else {
        return "Число нечетное"
    }
}

console.log(even(6));
console.log(even(7));


// task 3

function square(n) {
    const m = n * n;
    return m;
}

const result = square(5);
console.log(result); 


// task 4

function askUser(age) {
    if (age >= 13) {
        return "Добро пожаловать!"
    }
    else if (0 <= age <= 12) {
        return "Привет, друг!"
    } else {
        return "Вы ввели неправильное значение"
    }
}

console.log(askUser(15));

// task 5

function checkNumbers(i, k) {
    const n1 = Number(i);
    const n2 = Number(k);

    if (isNaN(n1) || isNaN(n2)) {
        return "Одно или оба значения не являются числом";
    }

    return "числа нормальные";
}

console.log(checkNumbers(5, 3));      
console.log(checkNumbers("abc", 2));   


// task 6

function cube(n) {
    if (isNaN(n)) {
        return "Переданный параметр не является числом";
    }
    return n + " в кубе равняется " + (n * n * n);
}

for (let i = 0; i <= 10; i++) {
    console.log(cube(i));
}

// task 7

function makeCircle(radius) {
    return {
        radius,
        getArea() {
            return 3.14 * this.radius * this.radius;
        },
        getPerimeter() {
            return 2 * 3.14 * this.radius;
        }
    };
}

const circle1 = makeCircle(5);
const circle2 = makeCircle(10);

console.log(circle1.getArea());      
console.log(circle1.getPerimeter());
console.log(circle2.getArea());     
console.log(circle2.getPerimeter())