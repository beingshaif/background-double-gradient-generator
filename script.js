var color_1 = document.querySelector(".color_input_1");
var color_2 = document.querySelector(".color_input_2");
var body = document.getElementById("gradient");
var valuer = document.getElementById("color_value");

function set_gradient(){
	console.log("linear-gradient( to right,"+color_1.value+","+color_2.value+" ;)");

	body.style.background = "linear-gradient( to right,"+color_1.value+","+color_2.value+")";
	valuer.innerHTML = body.style.background+";";
}

color_1.addEventListener("change",set_gradient);
color_2.addEventListener("change",set_gradient);

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("color_value");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

set_gradient();