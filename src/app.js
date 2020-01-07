var msg = "Hello World!";
document.querySelector("#ipt-1").value = "Hello World!";
document.querySelector("#ipt-2").value = "Hello World!";

var pElement1 = document.createElement('p');
pElement1.innerHTML = "hello";

// Define function onclick que guarde valor do input (respectivo ao botao clicado) em uma variavel
var inputValue;
function getValue(parentNodeId){        
  var selectorID = "#" + parentNodeId + " input";
  var inputValue = document.querySelector(selectorID).value;
  document.querySelector(selectorID).value = null;
  console.log(inputValue);

  // Cria elemento <p> com conteudo do input respectivo ao botao clicado
  var pElement = document.createElement("P");
  var pText = document.createTextNode(inputValue);
  pElement.appendChild(pText);

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div-1"); 
  document.body.appendChild(pElement); 
}


