
class Kontakt{
    constructor(fornavn,etternavn,telefon,epost){
    this.fornavn = fornavn
    this.etternavn = etternavn
    this.telefon = telefon
    this.epost = epost
    }
    skrivutKontakt(){
        print(this.fornavn,this.etternavn,this.telefon,this.epost)
    }

}

class Medlem extends Kontakt{
    constructor(fornavn,etternavn,telefon,epost,jeger_interesse,fiske_interesse,bestått_eksamen,våpen_register){
        super(fornavn,etternavn,telefon,epost)
        this.jeger_interesse = jeger_interesse
        this.fiske_interesse = fiske_interesse
        this.bestått_eksamen = bestått_eksamen
        this.våpen_register = våpen_register
    }
    skrivutMedlem(){
        print(this.jeger_interesse,this.fiske_interesse,this.bestått_eksamen,this.våpen_register)
    }

}

function print(navn) {
    return console.log(navn)
}
