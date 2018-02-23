(function(){
  "use strict"

const movie = "Star Wars: El despertar"
const pgMovie = 13

const nameArt = "Arturo" 
const ageArt = 29

const nameIvan = "Ivan"
const ageIvan = 12

const watchStarWars = (name, age, whitAdult = false) => {
  if (age >= pgMovie) {
    alert(`${name} puede ver ${movie}`)
  } else if(whitAdult){
    alert(`${name} puede pasar a ver la pelicula. Aunque su edad es ${age}, tiene un acompañante.`)
  }else {
    alert(`${name} no puede ver ${movie} porque tiene menos de ${pgMovie}`)
  }
}

watchStarWars(nameArt, ageArt)
watchStarWars(nameIvan, ageIvan, true)


})();

