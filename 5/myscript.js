
/*

//1
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



//2 //1024,1025,1026,1027
var e=1024
var table=[e,e+1,e+2,e+3]
document.write(table+"<br/>")


//3
var mas=new Array(3)
mas[1]=prompt("Введите значение элемента массива")
mas[2]=prompt("Введите значение элемента массива")
mas[3]=prompt("Введите значение элемента массива")
delete mas[1]
for(i in mas)
	document.write(mas[i]+"<br/>")


//4
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


//5 //1,2,3,4,5
var a=[1,2,3]
a=a.concat([4,5])
document.write(a)

//6
var arr=["Edward","Andrey","Chris"]
var res=arr.join("<br/>")
document.write(res)


//7

var arr=["January","February","March","April","May","June"]
var len=arr.pop()
document.write(arr.join(" ")+"<br/>")
document.write(len"<br/>")


//8
//77 66 55 44 33 22 11
var a=new Array(11,22,33,44,55,66,77)
a.reverse()
document.write(a.join("<br/>"))


//9
 var a=[1,2,3,4,5,6,7]
 var t=a.slice(0,3)
 document.write(t)

 
//10
var a=[1,2,3,4,5,6,7]
var d=a.splice(1,3)
document.write(a+"<br/>")
//11

var a=[1,2,3,4,5]
document.write(a.reverse()+"<br/>")

//12
var a=['c',5,2,'b',3,1,4,'a']
document.write(a.sort()+"<br/>")


//13
var a=[1,2,3,4,5]
document.write(a.join("+")+"<br/>")

//14
var laptop = {cpu :"Core i7", ram: "4 GB", creen: "19"}
var Key=prompt("Введите интересующий параметр(ram,cpu,screaan")
var value = laptop[Key]
document.write(value)


//15
var matrica = [
[3, 15, 25, 15, -2],
[4, 11, 5, 11, 12],
[12, 22, 12, -3, -10],
[22, 22, 32, -33, -12],
[2, 22, 12, -12, -10]
]
//непонятное задание
*/