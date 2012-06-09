window.onload = function() { 
	var canvas = document.getElementById("tewClock"); 
	var context = canvas.getContext("2d");
	
	setInterval('drawClock();', 1000);
	
}

function fillBackground(canvas, context) {
	context.fillStyle = "#222222";
	context.fillRect(0,0,canvas.width, canvas.height);
}

function drawClock() {
	var canvas = document.getElementById("tewClock");
	var context = canvas.getContext('2d');
	
	fillBackground(canvas, context);
	
	var x1 = canvas.width / 6;
	var x2 = x1 * 3;
	var x3 = x1 * 5;
	var y = canvas.height / 2;
	var radius = 75;
	var counterClockwise = false;
	
	var currentTime = new Date();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds
	
	var startAngle = (1.5) * Math.PI;
	var endAngle = (3.501) * Math.PI;
	var endAngle1 = startAngle + ((endAngle - startAngle)/60)*currentHours
	var endAngle2 = startAngle + ((endAngle - startAngle)/60)*currentMinutes
	var endAngle3 = startAngle + ((endAngle - startAngle)/60)*currentSeconds
	
	context.beginPath();
	context.arc(x1, y, radius, startAngle, endAngle1, counterClockwise);
	context.lineWidth = 30;
	context.strokeStyle = '#1f7bff';
	context.stroke();
	
	context.font = "Bold 40pt Calibri";
	context.fillStyle = '#1f7bff';
	context.fillText(currentHours, x1-27, y+13)
	
	context.beginPath();
	context.arc(x2, y, radius, startAngle, endAngle2, counterClockwise);
	context.lineWidth = 30;
	context.strokeStyle = '#ff1f7a';
	context.stroke();
	
	context.font = "Bold 40pt Calibri";
	context.fillStyle = '#ff1f7a';
	context.fillText(currentMinutes, x2-27, y+13)
	
	context.beginPath();
	context.arc(x3, y, radius, startAngle, endAngle3, counterClockwise);
	context.lineWidth = 30;
	context.strokeStyle = '#7aff1f';
	context.stroke();
	
	context.font = "Bold 40pt Calibri";
	context.fillStyle = '#7aff1f';
	context.fillText(currentSeconds, x3-27, y+13)
	
}