function calFunction(){
  //Harvest HTML in
  var app = document.getElementById("App-in").value;
  var aph = document.getElementById("Aph-in").value;
  var hpd = document.getElementById("Hpd-in").value;

  
  
  var total = document.getElementById("total").innerHTML;
  var resultDisp = aph*hpd;
  var newTotal = parseFloat(total)+parseFloat(resultDisp);
  var appType = checkNeg(resultDisp);
  //Put data in new fields
  var node = document.createTextNode("Your "+ app + appType +resultDisp+" amps per Day.");
  
  //Create new fields
  var newApp = document.createElement("p");
  newApp.appendChild(node);
  var element = document.getElementById("result");
  element.appendChild(newApp);
  //update display
  //document.getElementById("out-value").innerHTML = resultDisp;
  //document.getElementById("out-name").innerHTML = app;
  document.getElementById("total").innerHTML = parseFloat(newTotal);
};

function checkNeg(val) {
  if (val>0){
    return " uses ";
  } else {
    return " charges ";
  }
}