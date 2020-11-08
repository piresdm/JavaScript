// Aula Arrays

// 1 forma de criar array

    var vetor = new Array() //Esse () é o array vazio

    console.log(vetor)

    //Exemplo

    var alunos = new Array("Igor", "José", "Marcos", "Mariana") 

    console.log(alunos[0]) //imprime o 0 do array, que nesse caso é igor

//2 forma de criar array

    var alunos = ["Igor", "José", "Marcos", "Mariana"]
    console.log(alunos) //imprime o array todo
    console.log(alunos.length) //imprime o tamanho do array

// 1 forma de varrer o array

    var alunos = ["Igor", "José", "Marcos", "Mariana"]

    for(var i=0; i<alunos.length;i++){
        console.log(alunos[i])
    }

// 2 forma de varrer o array (COM IN)
    var alunos = ["Igor", "José", "Marcos", "Mariana"]

    for(var i in alunos){
        console.log(alunos[i])
    }

    /*se colocar só o i dentro do console imprime o número do index de cada aluno, não o nome do aluno*/
    for(var i in alunos){
        console.log(i)
    }

// 3 forma de varrer o array (COM OF)
    for(var i of alunos){
        console.log(i)
    }
