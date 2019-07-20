/******* Task 1 *******/
var name = prompt("Введите имя пользователя", "имя");
alert("Привет" + ", " + name + "!");

/******** Task 2 ********/
const currentYear = 2019;
var age = prompt("Введите год рождения ", "год");
var result = currentYear - age;
alert(result);

/******** Task 3 ********/
var a = prompt("Введите длину стороны квадрата", "a = ");
var p = 4 * a;
alert("Периметр = " + p);

/******** Task 4 ********/
var r = prompt("Введите радиус окружности", "r = ");
var s = Math.PI * Math.pow(r, 2);
alert("Площадь круга = " + s);

/******** Task 5 ********/
var l = prompt("Введите расстояния между городами в км", "l = ");
var t = prompt("Введите количество время за которое хотите добраться в час", "t = ");
var v = l / t;
alert("Необходимая скорость движения = " + v);

/******** Task 6 ********/
const curs = 0.88;
var doll = prompt("Введите сумму в долларах", " ");
var result = doll * curs;
alert("Сумма в евро = " + result);

/******** Task 7 ********/
const file = 820;
var gb = prompt("Укажите обьем фдэшки", "Гб" );
var result =Math.floor(gb*1000/820);
alert("На флэшку объемом "+gb+" Гб поместится "+result+" файлов по 820 Мб");

/********* Task 8 ********/
var summa = prompt("Сумма денег в кошельке", " ");
var chokolate = prompt("Стоимость шоколадки", " ");
var result = Math.floor(summa/chokolate);
var sdacha = summa-result*chokolate;
alert("Можно купить "+result+" шоколадок! Сдача "+sdacha);

/******** Task 9 **********/

var chislo = prompt("Введите трехзначное число ");
var a = chislo%10;
var chislo1 = Math.trunc(chislo/10);
var b= chislo1%10;
var d = Math.trunc(chislo1/10);
var result = (a*10+b)*10+d;
alert(result);

/******** Task 10 **********/

var  a = prompt("Введите целое число");
alert((a%2==0)? "четное" : "нечетное");