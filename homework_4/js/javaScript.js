/************** Task 2 ************/
var n = prompt('Введите число для подсчета факториала', 'n');
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
alert(factorial(n));

/************ Task 4 *********/
function square(a,b) {
    if (a && b){
     return  a*b;

    }else {
       return   Math.pow(a,2);
    }
}
alert(square(5,4));


/************** Task 7 *************/
function time(hour, min, sec) {
    if (hour && min && sec) {
        var time = new Date;
        time.setHours(hour);
        time.setMinutes(min);
        time.setSeconds(sec);
        return time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    }
}

alert(time(12, 25, 36));
