

export function anuncioView(anuncio){ 
   return `<div class="post">
        <strong class="author">${anuncio.nombre}</strong>
        <p class="precio"> ${anuncio.precio}</p>
        <p class="precio"> ${anuncio.enventa}</p>
    </div>`}
