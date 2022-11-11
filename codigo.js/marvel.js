async function peticionApi(){
let respuesta= await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6686afdb6f8cd0814124f7ef50466b31&hash=bd91c8200de7fae83855c96da9b4cc4b');
let data = await respuesta.json()
    for (let hero of data.data.results) {
        
        let urlHero=hero.urls[0].url;
        
            
            document.querySelector("#contenedor").innerHTML+=`
            <div>        
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="">
                    
                    <a href="${urlHero} target="_blank"><h3>${hero.name} </h3></a>
            </div>
            `
            document.querySelector("#nameavenger").innerHTML+=`                
                <option id="nombrePersonaje">  ${hero.name} </option> <br>;                
            `      
    }
    let hero = data.data.results; 
    
    
    console.log(hero)
    let busqueda =  document.getElementById('buscarPersonaje');
    busqueda.addEventListener('click', ()=>{
            nuevaBusqueda =  document.querySelector("#nameavenger").value;
            console.log(nuevaBusqueda) 
            function personaje() {
                window.open('./personaje.html');
            }
            personaje();
        })
}

peticionApi()