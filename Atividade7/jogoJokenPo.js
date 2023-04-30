alert("Valendo ....")
jogada = prompt("Opções validas: \n1 - :PEDRA,\n2 - PAPEL \n3 - TESOURA?").toUpperCase();
if (jogada == "PEDRA") {
    jpgada = 0;
    alert("Você escolheu PEDRA!!! ");
}
if (jogada == "PAPEL") {
    jogada = 1;
    alert("Você escolheu PAPEL!!! ");
}
if (jogada == "TESOURA") {
    jogada = 2;
    alert("Você escolheu TESOURA!!! ")
}


alert("Vejo que você já escolheu ")
maquina = Math.round((Math.random(0, 3)))
if (maquina == 0) {
    alert("Você escolheu: " + jogada + "\n\nO computador escolheu: PEDRA")
}
if (maquina == 1) {
    alert("Você escolheu: " + jogada + "\n\nO computador escolheu: PAPEL")
}
if (maquina == 2) {
    alert("Você escolheu: " + jogada + "\n\nO computador escolheu: TESOURA")
}

if ((maquina == 0 && jogada == 0) || (maquina == 1 && jogada == 1) || (maquina == 2 && jogada == 2)) {
    alert("Empate,não deu desta fez!!!")
}
if ((maquina == 0 && jogada == 2) || (maquina == 2 && jogada == 0)) {
    alert("PEDRA quebra TESOURA!");
}
if ((maquina == 2 && jogada == 1) || (maquina == 1 && jogada == 2)) {
    alert("TESOURA corta PAPEL!");
}
if ((maquina == 1 && jogada == 0) || (maquina == 0 && jogada == 1)) {
    alert("PAPEL cobre PEDRA!");
}

if ((maquina == 0 && jogada == 1 || maquina == 1 && jogada == 0)) {
    alert("Pedra fura  Papel!");
}


if (maquina == 0 && jogada == 2 || maquina == 2 && jogada == 1 || maquina == 1 && jogada == 0) {
    alert("NÃO FOI DESTA VEZ... TENTE  NOVAMENTE!")
}
if (maquina == 2 && jogada == 0 || maquina == 1 && jogada == 2 || maquina == 0 && jogada == 1) {
    alert("VOCÊ É O VENCEDOR! PARABÉNS!!!")
}
