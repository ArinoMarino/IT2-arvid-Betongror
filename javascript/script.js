var formEl = document.getElementById("form")
var textEL = document.getElementById("txt");

formEl.addEventListener("submit", function(e){

    var data = formEl.elements
    var volum = volumRegning(data.ytreDia.value, data.indreDia.value, data.lengde.value)
    var sekker = (volum/12.5).toFixed(0)

    if(parseInt(data.ytreDia.value) < parseInt(data.indreDia.value)) {
        alert("Indre diameter kan ikke være større enn ytre")
    } else {
    textEL.innerHTML = "Betongen har et volum på " +  volum + "dm^3" + "\n" + 
    "Liter = " + volum + "L \n" + "Vekt på sekkene = " + (volum*2) + "kg \n" + 
    "Antall seker som trengs er " + sekker + "\n" + "dette vil koste " + sekker*89 + "kr"
}

    e.preventDefault();
})

//Regner volumet av ytre diameter minus indre og returnerer volumet til betonget
function volumRegning (yDia, iDia, rorLengde){
    return ((3.14 * (yDia/2)**2 * rorLengde) - (3.14 * (iDia/2)**2 * rorLengde)).toFixed(2)
}