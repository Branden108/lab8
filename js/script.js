function init(){
    var entry = document.getElementById('entry');
    var output = document.getElementById('output').innerHTML = entry.value;
function myEventAlert{
	var input = document.getElementByID('input').value;
    alert('Branden Si: ' + input.value);
	console.log('ALERT');
	console.log('input: ' + input);
	console.log('output: ' + output):
	document.getElementById('output').innerHTML = input;
	console.log('New output: ' + output);
  }
	button.addEventListener('click', myEventAlert);
}
window.addEventListener('load', init);
