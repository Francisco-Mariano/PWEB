function janelaFechada(obj){
    obj.src="janelaFechada";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "JANELA FECHADA";
}

function janelaAberta(obj){
    obj.src="janelaaberta.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "janelaAberta";
}

function janelaQuebrada(obj){
    obj.src="janelaQuebrada";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "JANELA QUEBRADA!";
}