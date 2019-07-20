/********* Task 1 *********/
var sum = 0;
var min = prompt(" Введите начало диапазона", "начало");
var max = prompt(" Введите конец диапазона", " конец");
var minNumber = +min;
var maxNumber = +max;
while (minNumber <= maxNumber) {
    sum = sum + minNumber;
    minNumber = minNumber + 1;
}
alert(" Сумма числел диапозона" + min + "-" + max + "=" + sum);

/********* Task 2 *********/
var a = prompt("Ввведите первое число = ", " ");
var b = prompt("Ввведите первое число = ", " ");
if (a > b) {
    var temp = b;
    b = a;
    a = temp;
}
if (a != 0) {
    if (b != a) {
        if (b % a == 0) {
            alert("НОД(b,a) =" + a);
        } else {
            while (b % a > 0) {
                var r1 = 0;
                var r = b % a;
                r1 = r1 + r;
                b = a;
                a = r;
            }
            alert("НОД(b,a) = " + r1);
        }
    } else {
        alert("НОД(b,a) = " + b);
    }
} else {
    alert("НОД(b,a) = " + b);
}

/********** Task 3 **************/
var a = prompt("Введите число", " а = ");
var deliteli = "";
for (var i = 1;i <= a;i++){
    if (a % i == 0) {
        deliteli = deliteli+i+",";
    }
}
alert(deliteli);

/*********** Task 4 **********/
var a = prompt("Введите число"," ");
var count = 0;
while (a>=1){
    count=count+1;
    a=a/10;
}
alert(count);

/*********** Task 5 **********/
var positive = 0;
var negative = 0;
var zero = 0;
var even = 0;
var notEven = 0;
for (var i = 1; i <= 10; i++) {
    var a = prompt("Введите число", "a =");
    var a1 = +a;
    if (a1 > 0) {
        positive = positive + 1;
    } else if (a1 < 0) {
        negative = negative + 1;
    } else {
        zero = zero + 1;
    }
    if (a1 % 2 == 0) {
        even = even + 1;
    } else {
        notEven = notEven + 1;
    }
}
alert("Положительных = " + positive +
      "\nОтрицательных = " + negative +
      "\nНулей =" + zero +
      "\nЧетных =" + even +
      "\nНечетных =" + notEven);

/************ Task 6 ***********/

do {
    var a = +prompt("Первое число ", "");
    var b = +prompt(" Второе число", "");
    var operation = prompt(" Знак операции", "");
    switch (operation) {
        case "+":
            alert(a + b);
            break;
        case "-":
            alert(a - b);
            break;
        case "*":
            alert(a * b);
            break;
        case "/":
            alert(a / b);
            break;
        case "^":
            alert(Math.pow(a, b));
            break;
        default:
            alert("Неверно введен знак операции");
            break;
    }
}
while (confirm("Продолжить ?"));


/********** Task 8 ***********/
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}

/********** Task 9 *************/
document.write("<table>");

for (var i = 1; i <= 10; i++ ) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");

    for ( var j = 2; j <= 9; j++ ) {
        document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

/************ Task 10 ************/
