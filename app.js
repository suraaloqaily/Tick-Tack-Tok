var statues;

var sqr1 = document.getElementById("sqr1").addEventListener("click", myFunction1);
var sqr2 = document.getElementById("sqr2").addEventListener("click", myFunction2);
var sqr3 = document.getElementById("sqr3").addEventListener("click", myFunction3);
var sqr4 = document.getElementById("sqr4").addEventListener("click", myFunction4);
var sqr5 = document.getElementById("sqr5").addEventListener("click", myFunction5);
var sqr6 = document.getElementById("sqr6").addEventListener("click", myFunction6);
var sqr7 = document.getElementById("sqr7").addEventListener("click", myFunction7);
var sqr8 = document.getElementById("sqr8").addEventListener("click", myFunction8);
var sqr9 = document.getElementById("sqr9").addEventListener("click", myFunction9);

function Set (){
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
  Set()
	// console.log(statues)

 document.getElementById("sqr1").innerHTML = statues;
}
function myFunction2() {
	// console.log(statues)

  Set()
	// console.log(statues)

 document.getElementById("sqr2").innerHTML = statues;
}
function myFunction3() {
  Set()
 document.getElementById("sqr3").innerHTML = statues;
}
function myFunction4() {
  Set()

 document.getElementById("sqr4").innerHTML = statues;
}
function myFunction5() {
  Set()

 document.getElementById("sqr5").innerHTML = statues;
}
function myFunction6() {
  Set()

document.getElementById("sqr6").innerHTML = statues;
}
function myFunction7() {
  Set()

 document.getElementById("sqr7").innerHTML = statues;
}
function myFunction8() {
  Set()

 document.getElementById("sqr8").innerHTML = statues;
}
function myFunction9() {
  Set()

 document.getElementById("sqr9").innerHTML = statues;
}
