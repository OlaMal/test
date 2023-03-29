// Æverst er globale variabler som skal eksistere alle steder i koden
var laptopcost = 1900; // Pris laptop
var pccost     = 1500; // Pris stasjonær PC
var screencost =  600; // Pris HD-Skjerm
var inputcost  =  150; // Pris inputmedia (tastatur og mus)

var customerNR = 1;
var totalprices = [];

window.onload = winInit;
function winInit() // Denne funksjonen kjøres når nettsida er ferdig lasta
{ 
// Hendelser som regner ut ny total hver gang et antall endres
	elGetId("laptopCount").onchange = updateTotal;
    elGetId("PCCount").onchange     = updateTotal;
    elGetId("screenCount").onchange = updateTotal;
    elGetId("inputsCount").onchange = updateTotal;
	
    elGetId("newCustomer").onclick = newCustomer;
    // Og ei linje legges inn for 'Vis salgsoversikt'

	newCustomer(); // Gjør klar for salg til ny kunde
}
// Aller først noen hjelpefunksjoner
function elGetId(idname){ // Forenkler bruk av elGetId
	return document.getElementById(idname)
}
function elGetNumber(idname){ // Henter feltverdie som tall (og ikke tekst)
	return Number(elGetId(idname).value) 
}

// Så kommer funksjonene for å gjennomføre bruktsalgene
function updateTotal() // Oppdaterer info om totalpris og antall artikler
{
    var InputLaptop    = document.getElementById("laptopCount").value;
    var InputStasjonær = document.getElementById("PCCount").value;
    var InputHDSkjerm  = document.getElementById("screenCount").value;
    var InputTastatur  = document.getElementById("inputsCount").value;

    var LaptopSum    = InputLaptop * laptopcost;
    var StasjonærSum = InputStasjonær * pccost;
    var HDSkjermSum  = InputHDSkjerm * screencost;
    var TastaturSum  = InputTastatur * inputcost;

    var sum      = LaptopSum + StasjonærSum + HDSkjermSum + TastaturSum;
    var suminput = Number(InputLaptop) + Number(InputStasjonær) + Number(InputHDSkjerm) + Number(InputTastatur);
    var Output   = sum
    
    document.getElementById("totalAntal").innerHTML = "Antal varer:" + suminput;
    document.getElementById("totalPris").innerHTML = "Totalpris: " + Output + " kr";	
}

function newCustomer() // Setter startverdier for neste salg
{
    elGetId("laptopCount").value = 0;
    elGetId("PCCount").value     = 0;
    elGetId("screenCount").value = 0;
    elGetId("inputsCount").value = 0;
	
	elGetId("laptopPrice").innerHTML = "Pris: " + laptopcost + " kr"
    elGetId("PCPrice").innerHTML     = "Pris: " + pccost + " kr"
    elGetId("screenPrice").innerHTML = "Pris: " + screencost + " kr"
    elGetId("inputsPrice").innerHTML = "Pris: " + inputcost + " kr"

    elGetId("totalPris").innerHTML  = "Totalpris: "
    elGetId("totalAntal").innerHTML = "Antall varer: "
    updateTotal();
}

function showTotalSales() // Skal vise en oversikt over alle salgene
{
    console.log(totalprices);
}