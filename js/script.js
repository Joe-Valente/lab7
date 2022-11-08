function init(){    
function IOFunction(){
  var input= document.getElementById('entryinput').value;
  var output= document.getElementById('textoutput');
  output.innerHTML = input;
  alert("Joe Valente: " + input);
  }
  var Button = document.getElementById('entrybutton');
  Button.addEventListener('click', IOFunction);
}
window.addEventListener('load', init);
