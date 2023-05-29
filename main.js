var latitude = 22.78568542, longitude = 88.3643296
mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'
//crear el mapa 
var mapa = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:16
})
//boton de ubicacion del usuario
mapa.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackUserLocation:true
    })
)
// direccion de un punto a otro
mapa.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken,
    }),
    'top-left'
)