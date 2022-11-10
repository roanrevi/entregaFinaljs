const heroes=['Superman', 'Batman', 'Wonder Woman', 'Green Lintern', 'Iron Man']

function nuevosHeroes(hero ,  mostrarHeroes){
    setTimeout(() => {
        heroes.push(hero)
        mostrarHeroes();
    }, 1000);

}

function mostrarHeroes(){
    setTimeout(() => {
        heroes.forEach(hero => {
            console.log(hero)
            
        });
        
    }, 1000);
}
mostrarHeroes();
nuevosHeroes('Hulk', mostrarHeroes)