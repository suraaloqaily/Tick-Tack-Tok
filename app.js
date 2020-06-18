var statues;
var count=0;
var sqr1 = document.getElementById("sqr1").addEventListener("click", myFunction1);
var sqr2 = document.getElementById("sqr2").addEventListener("click", myFunction2);
var sqr3 = document.getElementById("sqr3").addEventListener("click", myFunction3);
var sqr4 = document.getElementById("sqr4").addEventListener("click", myFunction4);
var sqr5 = document.getElementById("sqr5").addEventListener("click", myFunction5);
var sqr6 = document.getElementById("sqr6").addEventListener("click", myFunction6);
var sqr7 = document.getElementById("sqr7").addEventListener("click", myFunction7);
var sqr8 = document.getElementById("sqr8").addEventListener("click", myFunction8);
var sqr9 = document.getElementById("sqr9").addEventListener("click", myFunction9);
function finish(){
if(count === 8){console.log("finish")
}
}
function set (){
	if(statues=== undefined){
		// console.log(1)
		statues = "X"
	}
	else if(statues=== "X"){
		// console.log(2)
		statues = "O"
	}
	else if(statues === "O"){
		// console.log(3)
		statues = "X"
	}
}
function myFunction1() {
	// console.log(statues)
  finish()
  set()
	// console.log(statues)
	// console.log(document.getElementById("sqr1").innerHTML)
if(document.getElementById("sqr1").innerHTML !== "X" && document.getElementById("sqr1").innerHTML !== "O"){
	console.log(document.getElementById("sqr1").innerHTML)
	count++
 document.getElementById("sqr1").innerHTML = statues;
}
}
function myFunction2() {
	// console.log(statues)

  finish()
  set()
	// console.log(statues)
if(document.getElementById("sqr2").innerHTML !== "X" && document.getElementById("sqr2").innerHTML !== "O"){
	count++

 document.getElementById("sqr2").innerHTML = statues;
}
}
function myFunction3() {
finish()
  set() 
   if(document.getElementById("sqr3").innerHTML !== "X" && document.getElementById("sqr3").innerHTML !== "O"){
	count++

 document.getElementById("sqr3").innerHTML = statues;
}}
function myFunction4() {
finish()
  set()
  if(document.getElementById("sqr4").innerHTML !== "X" && document.getElementById("sqr4").innerHTML !== "O"){
	count++

 document.getElementById("sqr4").innerHTML = statues;
}}
function myFunction5() {
finish()
  set()
  if(document.getElementById("sqr5").innerHTML !== "X" && document.getElementById("sqr5").innerHTML !== "O"){
	count++

 document.getElementById("sqr5").innerHTML = statues;
}
}
function myFunction6() {
finish()
set()

if(document.getElementById("sqr6").innerHTML !== "X" && document.getElementById("sqr6").innerHTML !== "O"){
	count++

document.getElementById("sqr6").innerHTML = statues;
}}
function myFunction7() {
finish()
  set()
  if(document.getElementById("sqr7").innerHTML !== "X" && document.getElementById("sqr7").innerHTML !== "O"){
	count++

 document.getElementById("sqr7").innerHTML = statues;
}}
function myFunction8() {
finish()
  set()
  if(document.getElementById("sqr8").innerHTML !== "X" && document.getElementById("sqr8").innerHTML !== "O"){
	count++

 document.getElementById("sqr8").innerHTML = statues;
}
}
function myFunction9() {
finish()
  set()

if(document.getElementById("sqr9").innerHTML !== "X" && document.getElementById("sqr9").innerHTML !== "O"){
	count++

 document.getElementById("sqr9").innerHTML = statues;
}
}