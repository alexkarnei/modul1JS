/******** Task 1 ****************/
function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}
alert( pow(2, 3) );


/********* Task 4 *********/
function simpleNum(number, divider) {
    if (number / 2 < divider) {
        return true;
    }
    if (number % divider == 0) {
        return false;
    }
    return simpleNum(number, divider + 1);
}
function f(number) {
    if (simpleNum(number, 2)) {
        alert('простое число.');
    } else {
        alert('не простое число.');
    }
}
f(23);

/********* Task 6 *********/
function fibanaci(n) {
    return n <= 1 ? n : fibanaci(n - 1) + fibanaci(n - 2);
}
alert(fibanaci(7));
