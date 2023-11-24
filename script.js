//your JS code here. If required.
var counterElement = document.getElementById('counter');
var incrementBtn = document.getElementById('increment') ;

incrementBtn.addEventListener('click' , function() {
	var currentValue = parseInt(counterElement.innerText);
	alert('incrementValue : ' + currentValue);
	currentValue.innerText = currentValue + 1;
});