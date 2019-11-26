
//1
document.writeln("1<br>")
var countries = new Array(3)
var population = new Array(3)
countries[0]="Russia"
population[0]=150000000
countries[1]="Japan"
population[1]=150000000
countries[2]="France"
population[2]=67000000
function sv1(){
	for(i=0;i<3;i++)
		document.write(countries[i]+" - "+population[i]+"<br/>")
}
function sv2(){
	for(i in countries)
		document.write(countries[i]+" - "+population[i]+"<br/>")
}
sv1()
sv2()
document.writeln("<br>")


//2 //1024,1025,1026,1027
document.writeln("2<br>")
var e=1024
var table=[e,e+1,e+2,e+3]
document.write(table+"<br/>")
document.writeln("<br>")

//3
document.writeln("3<br>")
var mas=new Array(3)
mas[1]=prompt("Введите значение элемента массива")
mas[2]=prompt("Введите значение элемента массива")
mas[3]=prompt("Введите значение элемента массива")
delete mas[1]
for(i in mas)
	document.write(mas[i]+"<br/>")
document.writeln("<br>")

//4
document.writeln("4<br>")
week=["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"]
n=prompt("Введите день недели")
function numOfDay(dayWord){
	for(i in week)
		if(week[i]==dayWord){
			return i
		}
	return("Неправильно введен день")
}
alert(numOfDay(n))
document.writeln("<br>")

//5 //1,2,3,4,5
document.writeln("5<br>")
var a=[1,2,3]
a=a.concat([4,5])
document.write(a)
document.writeln("<br>")
//6
document.writeln("6<br>")
var arr=["Edward","Andrey","Chris"]
var res=arr.join("<br/>")
document.write(res)
document.writeln("<br>")

//7
document.writeln("7<br>")
var arr=["January","February","March","April","May","June"]
var len=arr.pop()
document.writeln(arr.join(" ")+"<br/>")
document.writeln(len+"<br/>")
document.writeln("<br>")

//8
document.writeln("8<br>")
//77 66 55 44 33 22 11
var a=new Array(11,22,33,44,55,66,77)
a.reverse()
document.write(a.join("<br/>"))
document.writeln("<br>")

//9
document.writeln("9<br>")
 var a=[1,2,3,4,5,6,7]
 var t=a.slice(0,3)
 document.writeln(t)
document.writeln("<br>")
 
//10
document.writeln("10<br>")
var a=[1,2,3,4,5,6,7]
var d=a.splice(1,3)
document.write(a+"<br/>")
document.writeln("<br>")
//11
document.writeln("11<br>")
var a=[1,2,3,4,5]
document.write(a.reverse()+"<br/>")
document.writeln("<br>")
//12
document.writeln("12<br>")
var a=['c',5,2,'b',3,1,4,'a']
document.write(a.sort()+"<br/>")
document.writeln("<br>")

//13
document.writeln("13<br>")
var a=[1,2,3,4,5]
document.writeln(a.join("+")+"<br/>")
document.writeln("<br>")
//14
document.writeln("14<br>")
var laptop = {cpu :"Core i7", ram: "4 GB", creen: "19"}
var Key=prompt("Введите интересующий параметр(ram,cpu,screaan")
var value = laptop[Key]
document.writeln(value)
document.writeln("<br>")

//15
var matrica = [
[3, 15, 25, 15, -2],
[4, 11, 5, 11, 12],
[12, 22, 12, -3, -10],
[22, 22, 32, -33, -12],
[2, 22, 12, -12, -10]
]
document.writeln("непонятное задание")
