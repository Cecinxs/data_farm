// Configurações iniciais
const config = {
    center: [-23.5505, -46.6333], // São Paulo
    zoom: 13,
    tileLayer: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        options: {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
    }
};

// Inicialização do mapa
function initMap() {
    const map = L.map('map').setView(config.center, config.zoom);
    
    // Adiciona o tile layer
    L.tileLayer(config.tileLayer.url, config.tileLayer.options).addTo(map);
    
    // Adiciona elementos ao mapa
    addMapElements(map);
    
    return map;
}

// Adiciona marcadores e outras features
function addMapElements(map) {
    // Marcador principal
    const mainMarker = L.marker(config.center).addTo(map);
    mainMarker.bindPopup("<b>Olá!</b><br>Este é o centro do mapa.").openPopup();
    
    // Círculo
    L.circle([-23.560, -46.650], {
        color: '#3388ff',
        fillColor: '#3388ff',
        fillOpacity: 0.2,
        radius: 500
    }).addTo(map).bindPopup("Área de interesse");
    
    // Polígono
    L.polygon([
        [-23.540, -46.630],
        [-23.540, -46.650],
        [-23.560, -46.640]
    ], {
        color: '#ff7800',
        fillColor: '#ff7800',
        fillOpacity: 0.2
    }).addTo(map).bindPopup("Zona especial");
}

// Inicia o mapa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initMap);