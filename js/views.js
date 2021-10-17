

export function anuncioView(anuncio) {
    return `<div class="post">

        <a href="../detalleProducto.html?id=${anuncio.id}"
        <strong class="author">${anuncio.nombre}</strong>
        <p class="precio"> Precio : ${anuncio.precio} € </p>
        <p class="estado"> ${anuncio.estadoVenta}</p>
        <p class="estado"> ${anuncio.estadoCompra} </p>
        <img class="img" src="${anuncio.imagen}" > </img>
        </a>
    </div> <hr>`}


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


export function loaderView() {
    return `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
}

export function detalleProductoVista(anuncio) {
    return `
        <p style="font-size:2em">${anuncio.nombre}</p>
                <p class="precio"> Precio : ${anuncio.precio} € </p>
        <p class="estado"> ${anuncio.estadoVenta}</p>
        <p class="estado"> ${anuncio.estadoCompra} </p>
        <img class="img" src="${anuncio.imagen}" > </img>
    `
}