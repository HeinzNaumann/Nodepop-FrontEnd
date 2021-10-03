const anuncios = [
    {
        nombre : "Lavadora Siemens",
        precio : 45,
        compra: true,
        venta: false
    },
    {
        nombre : "Television panasonic",
        precio : 1500,
        compra: true,
        venta: false
    },
    {
        nombre : "Lavavajillas AEG",
        precio : 345,
        compra: true,
        venta: false
    },
    
]

const list = document.querySelector('.post-list')

for (const anuncio of anuncios){
    const anuncioElement = document.createElement('p')
    
    anuncioElement.innerHTML = anuncio.nombre
    list.appendChild(anuncioElement)
}


const loader = document.querySelector(".lds-ring")

loader.classList.toggle('hidden')

