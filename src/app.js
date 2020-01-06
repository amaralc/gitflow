var msg = "Hello World!";
document.querySelector("#ipt-1").value = "Hello World!";
document.querySelector("#ipt-2").value = "Hello World!";

// Define function onclick que guarde valor do input (respectivo ao botao clicado) em uma variavel
var inputValue;
function getValue(parentNodeId){        
  var selectorID = "#" + parentNodeId + " input";
  var inputValue = document.querySelector(selectorID).value;
  document.querySelector(selectorID).value = null;
  console.log(inputValue);
}