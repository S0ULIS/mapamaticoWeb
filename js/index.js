	 


$(document).ready(function () {

    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYW1hdGljbyIsImEiOiJja3FqYmlrNmIwMGphMm9vYXNlMTVjMTZtIn0.3Z8cVOYJ07JCNKB2kLfvOA'
    }).addTo(map);


    $.getJSON('https://mapamatico.000webhostapp.com/data/filtro.json', function (data) {

        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let nombreMay = data[i].nombreMayus != "" ? data[i].nombreMayus : data[i].articulo;

            let marker = L.marker([data[i].latitude, data[i].longitude]).addTo(map).on('click', function (e) {
                document.getElementById("frameando").src = data[i].Url;
            });;

            marker.bindPopup(`<b>${data[i].Nombre}</b>`).openPopup();



            //geocode(platform,`${nombreMay}, ${data[i].municipio}, Seville Spain`);
        }
        
    });
    



    
});
