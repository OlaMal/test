window.onload = winInit
function winInit() {
    id("CtilF").onclick = konverterC 
    id("celsius").onchange = konverterC
    id("FtilC").onclick = konverterF
    id("fahrenheit").onchange = konverterF
}

function id(navn) {
  return document.getElementById(navn)
}

function konverterC() {
    var celsius = parseFloat(id("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    id("fahrenheit").value = fahrenheit.toFixed(2);
}

function konverterF() {
    var fahrenheit = parseFloat(id("fahrenheit").value);
    var celsius = (fahrenheit - 32) * 5/9;
    id("celsius").value = celsius.toFixed(2);
}