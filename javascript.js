function myAlert(){

	alert("Hello, my function worked!");
}

function fillText(){
	document.getElementById('test').innerHTML = 
	"<br>I just added some interactivity to my page!</br>";
}

function changeColor(){
	document.getElementById("featureWriting").style.color = "black";
	document.getElementById("title").style.color = "black";
	document.getElementById("introtoDoc").style.color = "black";
	document.getElementById("interactiveCraft").style.color = "black";
	document.getElementById("artsAndCulture").style.color = "black";

}

var metroMonthly
var metroPayper
var Difference


function rideCalc(){
	 Monthly = document.getElementById("Monthly").value;
	 Payper = document.getElementById("Payper").value;
	 Difference = rent / income * 100;
	alert(percentage + 
		" percent of your $" + 
		income +
		"income is spent on rent");
	//alert("The rent is $"" + rent +" and your income is $" + income)
	rightRent();
}

function rightRent(){
	if (percentage > 35){
		alert("You are paying too much rent!");
	}else {
		alert("Your rent to income ratio is just right!")
	}
}