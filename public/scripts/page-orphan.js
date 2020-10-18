const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}


const spanlat = document.querySelector("span[data-lat]")
const spanlng = document.querySelector("span[data-lng]")

const map = L.map('mapid',options).setView([spanlat.dataset.lat, spanlng.dataset.lng], 15)

// create a tile-layer 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create a new icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})



L.marker([spanlat.dataset.lat, spanlng.dataset.lng], {icon})
.addTo(map)


// image galery

function select_image(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach((button) => {button.classList.remove("active")})
    
    button.classList.add("active")
    // selecionar a imagem clicadada
    const image = button.children[0]
    const image_container = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    image_container.src = image.src
    // adicionar a classe active para este botão
    
}