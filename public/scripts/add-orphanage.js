//tipos de dados
// String, number, boolean, object, Array []

// coordenadas -22.8609518,-47.0700736  e zoom 16


const map = L.map('mapid').setView([-22.8609518, -47.0700736], 15)

// create a tile-layer 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create a new icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// create and add markers
let marker

map.on("click",(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    // remove icones
    marker && map.removeLayer(marker);


    // add icon layer 

    marker = L.marker([lat,lng], {icon}).addTo(map)

})

// upload de fotos

function add_photo_field(){
    // pegar o container de fotos #images
    const container = document.querySelector("#images");
    // pegar o container para duplicar .new-image
    const fieldscontainer = document.querySelectorAll(".new-upload")
    // realizar o clone da ultima imagem adicionada
    const newfieldcontainer = fieldscontainer[fieldscontainer.length-1].cloneNode(true)
    // se campo estiver vazio não adiciona valor
    const  input = newfieldcontainer.children[0]
    if (input.value == "") {
        return
    }
    // limpar o campo antes de adicionar
    input.value = ""
    // adicionar o clone ao container de #imagens
    container.appendChild(newfieldcontainer)   
}

function delete_field(event){
    const span = event.currentTarget
    const fieldscontainer = document.querySelectorAll(".new-upload")

    if (fieldscontainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo

    span.parentNode.remove()
}

// Selecionar sim e não

function Toggle_select(event){
    // identificar o botão clicado
    
    //remover a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(btn){btn.classList.remove("active")})
    //inserir a classe active no botão selecionado

    const button = event.currentTarget

    button.classList.add("active")

    const input = document.querySelector("[name=opened-weekend]")

    // verificar se sim/não

    input.value = button.dataset.value
}

function validate(event){

    const lat = document.querySelector("input[name=lat]")
    const lng = document.querySelector("input[name=lng]")
    console.log(lat.value)
    //validar se lat e lng estão preenchidos
    if ((lat.value == "") || (lng.value == "")){
        event.preventDefault()
        alert("Selecione um ponto no mapa!")
    }
    
}