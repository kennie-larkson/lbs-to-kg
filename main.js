const kgFactor = 0.453592;
var para = document.querySelector("p");
para.style.border = '2px';
var txtNode;
//var formatted

let convertValue = function(){
    
    
    var valueEntered = document.querySelector("input").value;
    txtNode = document.createTextNode(valueEntered * kgFactor+'kg(s)');
    //formatted = txtNode.toFixed(2);
    //para.appendChild(txtNode).toFixed(2);
    //para.innerHTML = txtNode;
    para.appendChild(txtNode);

}

let clearOutput = function(){
    let newNode = document.createTextNode("");
    para.replaceChild(newNode, txtNode);
    //para.replaceChild(newNode, formatted);
}