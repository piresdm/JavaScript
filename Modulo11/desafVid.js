let video = document.getElementById('vd') // tem que puxar o id do vídeo, não da div
let controles = document.getElementById('controles')
let container = document.getElementById('container')
/*observe que teve que linkar tanto o container quanto o controles. O container ficou
com as ações no HTML e nas funções usou os controles*/


function volta(){
    video.currentTime -=15
}
function passa(){
    video.currentTime += 15
}
function rapido(){
    video.playbackRate +=0.1
}
function devagar(){
    video.playbackRate -= 0.1
}
function play(){
    video.play()
}
function stop(){
    video.pause()
    video.currentTime = 0
    //não tem método para stop, então tem qu e dar pause e voltar o tempo do vídeo para 0
}


function aparecer(){
    controles.style.opacity = 1
}
function sumir(){
   controles.style.opacity = 0
}
/*Pode fazer usando visibility = 'visible' e visibility = 'hidden', mas se usar assim, o onmouseover e o onmouseout tem que ficar na tag container para que funcione.
Com o opacity, pode ficar tanto na section container quanto na div controles.*/