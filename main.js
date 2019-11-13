const kgFactor = 0.453592;
var para = document.querySelector("p");
var txtNode;

let convertValue = function(){
    
    var valueEntered = document.querySelector("input").value;
    var formattedOutput = (valueEntered * kgFactor).toFixed(2);
    txtNode = document.createTextNode(formattedOutput+'kg(s)');
    para.appendChild(txtNode);

}

let clearOutput = function(){
    let newNode = document.createTextNode("");
    para.replaceChild(newNode, txtNode);
    
}