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

function addMarker({id, name, lat, lng}) {

    const popup = L.popup({
        closeButton: false,
        classname: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(` ${name}  <a href='/orphan?id=${id}'> <img src='/images/arrow-white.svg' > </a> `)
    
    
    L.marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll(".orphanages span")

orphanagesSpan.forEach( span => { 
    
    const orphanage = {
        "id": span.dataset.id,
        "name": span.dataset.name,
        "lat": span.dataset.lat, 
        "lng": span.dataset.lng
    };
    
    console.log(addMarker(orphanage));
})
