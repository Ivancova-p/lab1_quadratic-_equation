//cписок переменных
var a;
var b;
var c;
var D;
var x1;
var x2;
//ввод переменных
a = prompt("Введите значение переменной a");
b = prompt("Введите значение переменной b");
c = prompt("Введите значение переменной c");
if (a == 0 && b== 0 && c == 0){
	alert("Ошибка, неверные координаты");
}
else if(a == 0 && b != 0){
	alert("x1 = " + -c/b);
}
else if(a != 0 && b == 0){
	alert("x1 = " + Math.sqrt(c)/a + " " + "x2 = " + -Math.sqrt(c)/a );
}
else {
D = b*b - 4*a*c;
//условие для дискриминанта 
if (D == 0){
//вывод
alert("x  = " + (-b/2*a));
}
else if (D < 0){
	//мнимая и действительная часть для конмплексных корней 
	var rel;
	var im;
	rel = (-1*b)/(2*a);
	im = (Math.sqrt(-1*D)) /(2*a);
	//условие для минимой части комплексной формы числа
	if (im == 0) {
		//вывод
		alert("x1 = " + rel);
	}
	else if (im < 0){
		//вывод
		alert("x1 = " + rel + "-" + im + "i" + "  "+ "x2 =" +rel + "+" + im +"i");

	}
	else{
		//вывод
		alert("x1 = " + rel + "+" + im + "i" + "  "+ "x2 =" +rel + "-" + im +"i");
	}
}
else{
	x1 = (-b+ Math.sqrt(D)) /(2*a);
	x2 = (-b - Math.sqrt(D)) /(2*a);
	//вывод
	alert("x1 = " + x1 + "  "+ "x2 =" +x2);
}
}
		
