const d = document,
 n= navigator;

export default function getGeolocation(id){
    const $id = document.getElementById(id),
    options ={
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    };

    const success = (position) =>{
        let coords = position.coords;

        console.log(position)
        $id.innerHTML = `
            <p>Tu Posicion actual es</p>
            <ul>
                <li>Latitud:<Strong>${coords.latitude}</Strong></li>
                <li>Longitud:<Strong>${coords.longitude}</Strong></li>
                <li>Precision:<Strong>${coords.accuracy}</Strong></li>
            </ul>
            <a href ="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver Google Maps</a>
        `
    }

    const err = (err) =>{
        $id.innerHTML = `<p><strong>Error ${err.code}: ${err.message}</strong></p>`
        console.log(`Error ${err.code}: ${err.message}`) 
    }
    n.geolocation.getCurrentPosition(success,err,options)
}