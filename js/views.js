

export function anuncioView(anuncio) {
    return `<div class="post">
        <strong class="author">${anuncio.nombre}</strong>
        <p class="precio"> ${anuncio.precio}</p>
        <p class="precio"> ${anuncio.enventa}</p>
    </div>`}


export function errorView(message) {
    return `<div class="error">
    ${message}
    <button> Cerrar </button>
    </div>`
}

export function succesView(message) {
    return `<div class="sucess">
    ${message}
    <button> Cerrar </button>
    </div>`
}