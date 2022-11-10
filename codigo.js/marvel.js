
async function peticionApi(){
let respuesta= await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6686afdb6f8cd0814124f7ef50466b31&hash=bd91c8200de7fae83855c96da9b4cc4b');

    let data = await respuesta.json()

   // console.log(data)

    let hero = '';
    for (let hero of data.data.results) {
        let urlHero=hero.urls[0].url;
        
        // console.log(hero.series.items.forEach(element => {
        //     console.log(element)
        // }))


            document.querySelector("#contenedor").innerHTML+=`
            <div>
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="">
                    <h3>${hero.name}</h3>
                
                </a>
            </div>
            `
            document.querySelector("#nameavenger").innerHTML+=`                
                <option id="nombrePersonaje">  ${hero.name} </option> <br>;                
            `
            let series= hero.name; 
            
                console.log(series) 
        
    }
    let busqueda =  document.getElementById('buscarPersonaje');
    busqueda.addEventListener('click', function(e){
            nuevaBusqueda =  document.querySelector("#nameavenger").value;
            console.log(nuevaBusqueda)
        
        
}) 
            

}


peticionApi()   