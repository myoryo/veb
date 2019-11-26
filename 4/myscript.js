

//1
document.writeln("1<br>")
var expression=prompt("Введите математическое выражение")
result=eval(expression)
alert("Результат: "+result)
document.writeln("<br>")

//2
document.writeln("2<br>")
function say(){
	document.write("Вы здесь?" + "<br/>")
}
do{
	say();
	povtor=confirm("Пройти заполнение еще раз?")
}while(povtor)
document.writeln("<br>")


//3 
document.writeln("3<br>")
function raznost1(){
	var a=prompt("Введите первое число")
	var b=prompt("Введите второе число")
	result=eval("a-b")
	alert("Разность введенных чисел: "+result)
}
raznost1()

function raznost2(){
	var a=parseInt(prompt("Введите первое число", "0"))
	var b=parseInt(prompt("Введите второе число","0"))
	result=a-b
	return result
}
alert("Разность введенных чисел: "+raznost2())
document.writeln("<br>")

//4
document.writeln("4<br>")
var a=5,b=10,c=20,d=7
function Sum1(){
	var result=a+b
	document.write("Sum1: "+ result +"<br/>")
}

function Sum2(x1,x2){
	var result=x1+x2
	document.write("Sum2: "+ result +"<br/>")
}
Sum1() //Sum1: 15
Sum2(c,d) // Sum2: 27
document.writeln("<br>")

//5

document.writeln("5<br>")
function checkAge(age){
	if(age<18) alert("Привет, малыш!")
		else alert("Здравствуй, юноша!")
}
checkAge(prompt("Введите свой возраст","0"))
document.writeln("<br>")

//6
document.writeln("6<br>")
function findMax(a,b,c){
	if(a>=b && a>=c) return a
	else if (b>=a && b>=c) return b
		else if(c>=a && c>=b) return c
}
a=5,b=15,c=-7
var max = findMax(a,b,c)
alert("Max: "+max)
document.writeln("<br>")

//7

document.writeln("7<br>")
function voroniOkon(voroni){
	if(voroni<5 && voroni>1) return "ы"
		else if(voroni==1) return "а"
			else return ""
}
voroni=parseInt(prompt("Введите колличество ворон"))
switch(voroni){
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:{
		alert("На ветке сидит "+voroni+" ворон"+voroniOkon(voroni))
		break
	}
	default: {
		if(!voroni) alert("Сколько-сколько? Где число?")
		else if(voroni<0)
			alert("Не может быть столько ворон")
		else
			alert("Ты не устал их считать?")
	}
}
document.writeln("<br>")


//8
document.writeln("8<br>")
function power(x,n){
	if(n==0)
		return 1
	else{
		result=x;
		for(i=1;i<n;i++)
		result=result*5
	return result
	}
	
}
x=power(5,1)
alert(x)
document.writeln("<br>")

//9
document.writeln("9<br>")
var global="Привет, "
function func(){
	local="Мир"
	alert(global+local)
}
func()
alert(global+local)
document.writeln("<br>")

//10 
document.writeln("10<br>")
//Локальная переменная
//Глобальная переменная

var variable="Глобальная переменная"
function f(){
	var variable="Локальная переменная"
	document.writln(variable+"<br/>")
}
f()
document.writeln(variable)
document.writeln("<br>")


//11
document.writeln("11<br>")
//1 0 0 1
function f(counter){
	counter-- 
	document.write(counter+"<br/>") 
	if(counter!=0)
		f(counter) 
	document.write(counter+"<br/>")
}
f(2)
document.writeln("<br>")

//12
document.writeln("12<br>")
function factorial(n){
	if(n<0)
		return 0
	else if(n==0)
		return 1
	else
		return n*factorial(n-1)

}
alert(factorial(5))
document.writeln("12<br>")

//13
document.writeln("13<br>")
var kvadr=x=>x*x
alert(kvadr(5))
document.writeln("<br>")


//14
document.writeln("14<br>")
var triple=x=>x*3
x=1
for(i=1;i<=10;i++)
{
	alert(x)
	x=triple(x)
}
document.writeln("<br>")
