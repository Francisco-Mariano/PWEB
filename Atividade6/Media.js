function mediaAluno()
{
    var nomeAluno, notaAluno01, notaAluno02,notaAluno03 , mediaAluno;
    var numeroDivisor = 3;
    nomeAluno = prompt("Digite o nome do aluno: ");
    notaAluno01 = prompt("Digite a primeira nota do aluno: ");
    notaAluno02 = prompt("Digite a segunda nota do aluno: ");
    notaAluno03 = prompt("Digite a terceira nota do aluno: ");

    mediaAluno = (parseFloat(notaAluno01) + parseFloat(notaAluno02) + parseFloat(notaAluno03)) / numeroDivisor;
    
    return "Média do aluno " + nomeAluno + ": " + mediaAluno.toFixed(2);
}

alert(mediaAluno());

