window.onload = function() { 
	var canvas = document.getElementById("tewCanvas"); 
	var context = canvas.getContext("2d");
	
	fillBackground(canvas, context);
	
	for (var circles = 0; circles < 20; circles++) {
		drawCircle(canvas, context);
	}
	
	drawBoldCircle(canvas, context);
	
	timeDisplay = document.createTextNode ( "" );
	document.getElementById("clock").appendChild ( timeDisplay );
	updateClock(); 
	setInterval('updateClock()', 1000 );
	
	setInterval('drawClock()', 1000);
	
}

function drawClock() {
	var canvas1 = document.getElementById("timeCanvas");
	var context2 = canvas1.getContext('2d');
	
	fillBackground(canvas1, context2);
	
	// time data
	var currentTime2 = new Date ( );

	var drawHours = currentTime2.getHours ( );
	var drawMinutes = currentTime2.getMinutes ( );
	var drawSeconds = currentTime2.getSeconds ( );
	
	var hoursStart = 360-(drawHours*15);
	var hoursEnd = hoursStart+10;
	
	var minutesStart = 360 -(drawMinutes*6);
	var minutesEnd = minutesStart + 10;
	
	var secondsStart = 360 -(drawSeconds*6);
	var secondsEnd = secondsStart + 10;
	
	context2.fillStyle  = '#1f7bff'; // blue
	context2.fillRect  (25, hoursStart, 75, hoursEnd); //hours
	context2.fillStyle   = '#ff1f7a'
	context2.fillRect (125, minutesStart, 75, minutesEnd);
	context2.fillStyle  = '#7aff1f';
	context2.fillRect (225, secondsStart, 75, secondsEnd);
	
}

function fillBackground(canvas, context) {
	context.fillStyle = "#222222";
	context.fillRect(0,0,canvas.width, canvas.height);
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random()*40);
	var x = 40 + Math.floor(Math.random() * (canvas.width-80));
	var y = 40 + Math.floor(Math.random() * (canvas.height-80));
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2, true);
	context.closePath;
	context.fillStyle = "#FF6600";
	context.fill();
}

function drawBoldCircle(canvas, context) {
	var radius = 20;
	var x = 40 + Math.floor(Math.random() * (canvas.width-80));
	var y = 40 + Math.floor(Math.random() * (canvas.height-80));
	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2, true);
	context.closePath;
	context.fillStyle = "#FF4000";
	context.fill();
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;  
}

