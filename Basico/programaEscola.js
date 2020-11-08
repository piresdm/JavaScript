// Programa que diz o nome do aluno, notas 1 e 2, média e se está aprovado/reprovado

var nomes = ["Igor", "José", "Maria"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media (n1,n2){

  return(n1+n2)/2
}

function condicao(media){ //não esquecer de botar a media entre ()
  if (media >= 7) {
    return "Aprovado"
  } else {
    return "Reprovado"
  }
}

for (var index in nomes){

    var nota1 = notasA[index] /*só pode puxar nota1 e nota2 depois que tiver puxado os index, que são os responsáveis por trazer os valores dos arrays.*/
    var nota2 = notasB[index]
    var med = media(nota1,nota2)
    /*essa mádia calcula aqui fora pq se calcular dentor do console ele não puxa certo pra fazer a condição e erra se ta aprovado ou reprovado.*/
    
    console.log(nomes[index] + 
                " - " +
                nota1 +
                " - " +
                nota2 + 
                " - " +
                med + 
                " - " +
                condicao(med) /*Aqui não é a função media dentro do (), é a variável criada nesse for*/
                )
}

