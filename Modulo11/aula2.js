let image = document.getElementById('like')

image.addEventListener('click', function () {
    //Aqui ele criou o evento no JS ao invés de botar no HTML e já criou a função
    image.src = 'img/dislike.jpg'

    /*poderia usar também image.setAttribute('src','img/dislike.jpg') ou
    let lastImage = image.getAttribute('src')  
    image.src='img/dislike.jpg'
    console.log('lastImage')  
    
    Essas outras formar permitem que você mexa em algo que não exsite lá no HTML, a primeira só é possível quando você altera algo que existe lá, como era esse caso que a já tinha uma imagem inicial.    
    */

})

