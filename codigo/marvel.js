const busqueda =  document.getElementById('buscarPersonaje');
const select =  document.querySelector("#nameavenger");
const contenedor = document.querySelector("#contenedor");
const modal=document.querySelector('#modal-text');
const serie=document.querySelector('#serie');
const dataHero=[]

async function peticionApi(){
let respuesta= await fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6686afdb6f8cd0814124f7ef50466b31&hash=bd91c8200de7fae83855c96da9b4cc4b');
let data = await respuesta.json()
let hero = data.data.results
    //console.log(hero)
    
        hero.forEach(element => {
            dataHero.push(element)
            contenedor.innerHTML+=`
            <div class="card" style="width: 18rem;">
                <img src="${element.thumbnail.path}.${element.thumbnail.extension}" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                    <p class="card-text " >${element.name}</p>
                </div>
            </div>`
            select.innerHTML+=`<option  value="${element.id}"> ${element.name}
            </option>`
        });
        
            

}
//console.log(dataHero)
const mostrarInfoPersonaje=(e)=>{
    e.preventDefault()
    let getValue= select.value
    //console.log('Salida de datos', dataHero ,getValue)
    let getHero=dataHero.filter(element=>element.id==getValue)
    console.log('Buscar', getHero)
    $('#modalInfoHero').modal('toggle');
    let series = getHero[0].series.items
    let name=getHero[0].name
    let urls=getHero[0].urls
    //console.log(series)
    series.forEach(element=>{
        //console.log(element.name)
        modal.innerHTML+=`
        <p class="card-text " >${element.name}</p>`
    }
    )
    // urls.forEach(element=>{
    //     //console.log(element.urls)
    //     modal.innerHTML+=`
    //     <p class="card-text " >${element.name}</p>`
    // }
    // )

}

window.addEventListener('DOMContentLoaded',function(){
    peticionApi()
    select.addEventListener('change', mostrarInfoPersonaje)
})
