function operacoes()
{


    var num1 = prompt("Digite o primeiro numero: ");
    var num2 = prompt("Dgite o segundo numero: ");

    alert("Soma dos dois: " + (parseFloat(num1) + parseFloat(num2)));
    alert("Subtração do primeiro pelo segundo: " + (parseFloat(num1) - parseFloat(num2)));
    alert("Produto dos dois: " + (parseFloat(num1) * parseFloat(num2)));
    alert("Divisao do primeiro pelo segundo: " + (parseFloat(num1) / parseFloat(num2)));
    alert("Resto da divisao do primeiro pelo segundo: " + (parseFloat(num1) % parseFloat(num2)));

}

alert(operacoes());