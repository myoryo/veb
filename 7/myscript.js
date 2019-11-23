

//1
document.writeln("1<br>")
var names = ["Кузьмин Иван","Петров Петр","Федоров Иван"]
var name =prompt("Введите свое имя: ")
var reg=new RegExp(name)

for(h in names){
	names[h]=names[h].toString().replace(reg,"Иван Иванов")
	document.writeln(names[h])
}
document.writeln("<br>")


//2
document.writeln("2<br>")
var str="sdfjsn2344sdkfjlj 3 s 41 df"
reg=/\d+/g
document.writeln(str.match(reg))
document.writeln("<br>")



//3
document.writeln("3<br>")
var name =prompt("Введите свое имя: ")
reg=/(^[A-Z]{1}[a-z]{1,20} [A-Z]{1}[a-z]{1,20}$)|(^[А-Я]{1}[а-я]{1,20} [А-Я]{1}[а-я]{1,20}$)/
if(name.match(reg))
	document.writeln("правильно введено")
else
	document.writeln("неправильно введено")
document.writeln("<br>")


//4
document.writeln("4<br>")
var name =prompt("Введите число: ")
reg1=/^[\d]+$/
reg2=/(^[\d]+,\d+$)|(^[\d]+.\d+$)/
if(name.match(reg1))
	document.writeln(name)
else if(name.match(reg2)){
	document.writeln(name.split(/[.,][\d]+$/).join(''))
	document.writeln(name.split(/^[\d]+[.,]/).join(''))

}
else
	document.writeln("неправильно введено")
document.writeln("<br>")



//5
document.writeln("5<br>")
var name =new String("D:\\sdf\\sde\\qwe")
document.writeln(name)
document.writeln(name.split(/:\\|\\/).join(','))
document.writeln("<br>")


//6
document.writeln("6<br>")
var number="8 900 123 45 67"
var reg=/((\b[8]|([+][7]))\s?\(?\d{3}\)?\s?\d{3}(\s?|\-?)\d{2}(\s?|\-?)\d{2}\b)/g
if(number.match(reg))
	document.writeln("true")
else
	document.writeln("false")
document.writeln("<br>")

//7
document.writeln("7<br>")
var text="dfs 34 1 dsf sdfsdf312341241434db dsffsdf1124412412sfsfgds dsfsdf"
var reg=/\w{15,}/g
text=text.replace(reg,"абстр...ние")
document.writeln(text)
document.writeln("<br>")
//8
document.writeln("8<br>")
var text = "домик, стулик, ключик"
var reg=/[и][к]([.,]|\s|$)/g
text=text.replace(reg,"")
document.writeln(text)
document.writeln("<br>")

//3
document.writeln("9<br>")
var date =new Date(1995,4,9,3,30,0);
function getT(time){
	if(time<10) 
		return "0"+time
	return time

}
document.writeln(getT(date.getHours())+":"+getT(date.getMinutes())+":"+getT(date.getSeconds()))

document.writeln("<br>")

//4
document.writeln("10<br>")
var date = new Date("2019 11 24 00:59")
switch(date.getDay()){
	case 0:
		document.writeln("Понедельник")
		break;
	case 1:
		document.writeln("Вторник")
		break;
	case 2:
		document.writeln("Среда")
		break;
	case 3:
		document.writeln("Четверг")
		break;
	case 4:
		document.writeln("Пятница")
		break;
	case 5:
		document.writeln("Суббота")
		break;
	case 6:
		document.writeln("Воскресенье")
		break;

}
document.writeln("<br>")

//5
document.writeln("11<br>")

var now = new Date(); 
var toNow = now.getTime();

function now_date(N)
{
var plusN = new Date(1000 * 60 * 60 * 24 * N);
var milliN = plusN.getTime();

var toN = new Date(toNow + milliN); 

document.writeln(toN)
}

var user = prompt("Введите число");
var n = Math.round(user);
now_date(n);
document.writeln("<br>")