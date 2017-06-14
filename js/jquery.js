$(document).ready(function(){

var dt;

setInterval(function(){
	dt = new Date();
	document.getElementById("date").innerHTML = dt.toUTCString();
}, 1000);



});
