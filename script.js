/* .js files add interaction to your website */

var factList = [
	"I love you", /*0*/
	"mmmmmmmmm", /*1*/
  "nnnnnnnnn", /*2*/
  "oooooooooo", /*3*/ 
	];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
	 fact.innerHTML = factList[count];
	count++;
	if (count == 2){
		count = 0;
	}
}