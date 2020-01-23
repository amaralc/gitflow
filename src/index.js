var buttonElement = document.querySelector ('#teste button');

// Define function onclick que guarde valor do input (respectivo ao botao clicado) em uma variavel
var inputValue;
function getValue(parentNodeId){        
  var selectorID = "#" + parentNodeId + " input";
  var inputValue = document.querySelector(selectorID).value;  
  console.log(inputValue);   
}