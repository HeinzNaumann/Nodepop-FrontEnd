

window.addEventListener('DOMContentLoaded', function(){


    
    const anuncios = [
        {
            nombre : "Lavadora Siemens",
            precio : 45,
            enventa: "Se compra"
        },
        {
            nombre : "Television panasonic",
            precio : 1500,
            compra: true,
            venta: false,
            enventa: "En venta"
        },
        {
            nombre : "Lavavajillas AEG",
            precio : 345,
            enventa: "En venta"
        },
        
    ]
    
    
    
    
    
    function loadAnuncios(){
    
        const list = document.querySelector('.post-list')   
    
            for (const anuncio of anuncios){
                const anuncioElement = document.createElement('p')
                const anuncioHTML = `<div class="post">
                    <strong class="author">${anuncio.nombre}</strong>
                    <p class="precio"> ${anuncio.precio}</p>
                    <p class="precio"> ${anuncio.enventa}</p>
                    </div>`
                anuncioElement.innerHTML = anuncioHTML
                list.appendChild(anuncioElement)
            }
            
            
            const loader = document.querySelector(".lds-ring")
            
            loader.classList.toggle('hidden')
        
    
    }
    
    const button = document.querySelector("#button-cargar")
    
    button.addEventListener('click', loadAnuncios)

})


