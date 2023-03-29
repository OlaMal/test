var filinnhold = ''
var norsk = []
var engelsk = []

window.onload = winInit;
function winInit(){
	id('ol').onclick = lesFil1;
	id('NtilE').onclick = NtilE
}

function id(navn) {
	return document.getElementById(navn);
}

function lastInn(file) {
    return fetch(file).then((response) => response.text() );
}

async function lesFil1() {
	filinnhold = await lastInn('Ordbok.csv');
	visInnhold();

	var linjer = filinnhold.split('\n')
	var ord = []
	console.log('linjer',linjer);

	for (var i = 1; i < linjer.length; i++){
		ord = linjer[i].split(',');
		norsk.push(ord[0]);
		engelsk.push(ord[1].replace('\r',''));
	}
	console.log(norsk,engelsk);
}

function visInnhold(){
	var htmltekst
	htmltekst = filinnhold.split('\n').join('<br>');
	id('innhold').innerHTML = htmltekst;
}

function NtilE(){
	var NGlose = id('norsk').value

	for (var i = 0; i < norsk.length; i++){
		if (NGlose == norsk[i]){
			id('engelsk').value == engelsk[i]
			return

		}
	}
}