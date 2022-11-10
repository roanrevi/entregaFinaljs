async function peticionApi()
{
    let api_key="cqYQ1vX6hRfBW2klSCcB11NmBB2In2NhL3gwL91j"
    let respuesta= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
    console.log(respuesta)
    let data=await respuesta.json()
    //console.log(data.url)
    datosApi(data)
}    
function datosApi(data){
    
    if(data.media_type=='video'){ document.querySelector("#contenedor").innerHTML +=`<iframe src="${data.url}" frameborder="0"></iframe>`
    }
    else{
        document.querySelector("#contenedor").innerHTML +=`<img src="${data.url}"></img>`

    }
    document.querySelector("#contenedor").innerHTML+=`<h2>${data.title}</h2>`

    document.querySelector("#contenedor").innerHTML +=`<h3>${data.date}</h3>`
    document.querySelector("#contenedor").innerHTML+=`<p> ${data.explanation}</p>`
    
}
peticionApi()