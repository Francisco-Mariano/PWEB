const base = document.getElementById("base");
const altura = document.getElementById("altura");
const area = document.getElementById("area");
const botaoCalcular = document.getElementById("btnCalcular");
const botaoLimpar = document.getElementById("btnLimpar");

function Dados_Retangulo(x, y) {
    this.base = x;
    this.altura = y;

    this.calArea = function() {
        return (this.base * this.altura);
    }
}

botaoCalcular.addEventListener("click", () => {
    retangulo = new Dados_Retangulo(base.value, altura.value);
    area.value = retangulo.calArea();
})

function limpar() {
    base.value = '';
    altura.value = '';
    area.value = '';

    base.focus();
}

botaoLimpar.addEventListener("click", limpar);
