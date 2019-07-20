/********* Task 1 *********/
var age = prompt("Введите ваш возраст");
if (age < 0) {
    alert("Неверно введен возраст");
}
if (age > 0 && age < 12) {
    alert(" Ребенок");
} else if (age >= 12 && age < 18) {
    alert("Подросток");
} else if (age >= 18 && age < 60) {
    alert("Взрослый");
} else {
    alert("Пенсионер");
}

/********* Task 2 *********/
var a = prompt("Введите число от 0 до 9 ", " а =");

switch (a) {
    case "1":
        alert("!");
        break;
    case "2":
        alert("@");
        break;
    case "3":
        alert("#");
        break;
    case "4":
        alert("$");
        break;
    case "5":
        alert("%");
        break;
    case "6":
        alert("^");
        break;
    case "7":
        alert("&");
        break;
    case "8":
        alert("*");
        break;
    case "9":
        alert("(");
        break;
    default :
        alert(")");
        break;
}

/********** Task 3 **************/
var a = prompt("Введите трехзначное число", "а = ");
var a1 = a % 10;
var b = Math.trunc(a / 10);
var b1 = b % 10;
var d = Math.trunc(b / 10);

if (a1 == b1 || a1 == d || b1 == d) {
    alert("Одинаковые цифры есть!")
} else {
    alert("Одинаковых цифр НЕТ !");
}

/********* Task 4 *****************/
var year = prompt("Введите год", " year = ");

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
    alert("Високосный!");
} else {
    alert("Не високосный!");
}

/*********** Task 5 **********/
var a = prompt("Введите пятиразрядное число", "а = ");
var a2 = Math.trunc(a / 100);
var a1 = a % 10;
var b = Math.trunc(a / 10);
var b1 = b % 10;
var d = Math.trunc(b / 10);
var d1 = d % 10;
var h = (a1 * 10 + b1) * 10 + d1;
(a2 == h) ? alert("Полиндром") :
    alert("Не полиндром");


/************ Task 6 ***********/
var usd = prompt("Введите сумму в USD", "USD");
var conv = prompt(" Выберите в какую валюту конвертировать :" +
    "1 - EUR; " +
    "2 - UAH; " +
    "3 - AZN; ");
switch (conv) {
    case "1":
        alert(usd * 0.878 + "EUR");
        break;
    case "2":
        alert(usd * 26.02 + "UAH");
        break;
    case "3":
        alert(usd * 1.697);
        break;
    default :
        alert("Валюта не выбрана!");
        break;
}

/********** Task 7 ***********/
var sum = prompt(" Сумма вашей покупки = ", " ");

if (sum <= 0) {
    alert("Неверная сумма!");
} else if (sum > 0 && sum < 200) {
    alert("К сожалению скидки нет. Сумма =  " + sum);
} else if (sum >= 200 && sum < 300) {
    var result = sum - sum * 0.03;
    alert(" Сумма со скидкой 3% = " + result);
} else if (sum >= 300 && sum < 500) {
    var result = sum - sum * 0.05;
    alert(" Сумма со скидкой 5% = " + result);
} else if (sum >= 500) {
    var result = sum - sum * 0.07;
    alert(" Сумма со скидкой 7% = " + result);
}

/********** Task 8 ***********/
var l = prompt(" Длина окружности", " l = ");
var p = prompt("Периметр квадрата", " P = ");
var r = l / (2 * Math.PI);
var a = p / 4;
(r <= a / 2) ? alert("Окружность поместиться в квадрат!") :
    alert("Окружность не поместиться в квадрат!");


/********** Task 9 *************/
var counter = 0;
var question1 = prompt("Сколько на Земле материков начинаются на букву «А»?... \n" +
    "Варианты ответа:\n" +
    " 1- 3 материка;\n" +
    " 2- 5 материков;\n" +
    " 3- 4 материка;", "Выберите номер ответа ");
switch (question1) {
    case "1":
        counter = counter + 0;
        break;
    case "2":
        counter = counter + 2;
        break;
    case "3":
        counter = counter + 0;
    default:
        alert(" Неверно выбран вариант ответа");
        break;
}
var question2 = prompt("Сколько Музыкантов в квинтете?... \n" +
    "Варианты ответа:\n" +
    " 1- 5 музыкантов;\n" +
    " 2- 2 музыканта;\n" +
    " 3- 4 музыканта;", "Выберите номер ответа ");
switch (question2) {
    case "1":
        counter = counter + 2;
        break;
    case "2":
        counter = counter + 0;
        break;
    case "3":
        counter = counter + 0;
    default:
        alert(" Неверно выбран вариант ответа");
        break;
}
var question3 = prompt("Сколько сантиметров составляет одна тысячная часть километра?... \n" +
    "Варианты ответа:\n" +
    " 1- 10 сантиметров;\n" +
    " 2- 0,1 сантиметра;\n" +
    " 3- 1 сантиметр;", "Выберите номер ответа ");
switch (question3) {
    case "1":
        counter = counter + 0;
        break;
    case "2":
        counter = counter + 0;
        break;
    case "3":
        counter = counter + 2;
        break;
    default:
        alert(" Неверно выбран вариант ответа");
        break;
}
alert(counter);

/************ Task 10 ************/
var date = prompt("Введите дату ");
var dayNumber = +date;
if (dayNumber > 31 || dayNumber <= 0) {
    alert(" Неверно введена дата");
}
var month = prompt("Введите месяц");
var monthNumber = +month;
if (monthNumber > 12 || monthNumber <= 0) {
    alert(" Неверно введен месяц");
    ew
}
var year = prompt("Введите год");
var yearNumber = +year;
if (year <= 0) {
    alert("Неверно введен год");
}
alert(" Введенная вами дата " + date + "." + month + "." + year);
if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7
    || monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
    if (dayNumber === 31 && monthNumber !== 12) {
        dayNumber = 1;
        monthNumber = monthNumber + 1;
    } else if (dayNumber === 31 && monthNumber === 12) {
        dayNumber = 1;
        monthNumber = 1;
        yearNumber = yearNumber + 1;
    } else {
        dayNumber = dayNumber + 1;
    }
}
if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
    if (dayNumber === 30) {
        dayNumber = 1;
        monthNumber = monthNumber + 1;
    } else {
        dayNumber = dayNumber + 1;
    }
}
if (monthNumber === 2) {
    if ((yearNumber % 4 === 0 && yearNumber % 100 !== 0) || yearNumber % 400 === 0) {
        if (dayNumber === 29) {
            dayNumber = 1;
            monthNumber = monthNumber + 1;
        } else {
            dayNumber = dayNumber + 1;
        }
    } else {
        if (dayNumber === 28) {
            dayNumber = 1;
            monthNumber = monthNumber + 1;
        } else {
            dayNumber = dayNumber + 1;
        }
    }
}
if (dayNumber < 10) {
    dayNumber = "0" + dayNumber;
}
if (monthNumber < 10) {
    monthNumber = "0" + monthNumber;
}
if (yearNumber < 10) {
    yearNumber = "000" + yearNumber;
} else if (yearNumber < 100) {
    yearNumber = "00" + yearNumber;
} else if (yearNumber < 1000) {
    yearNumber = "0" + yearNumber;
}
alert(" Следующий день " + dayNumber + "." + monthNumber + "." + yearNumber);