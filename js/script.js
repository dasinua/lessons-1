'use strict';

let numberOfFilms; 
let film, rating;

const personalMovieDB =  {
  count: numberOfFilms,
  movies: {},
  actors: {},
  gentres: [],
  privat: false
};

function start()  {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }

}

start();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++){
    film = prompt('Один из последних просмотренных фильмов?', '');
    rating = prompt('На сколько оцените его?', '');

    if(film.length > 0 && film.length < 50){
      personalMovieDB.movies[film] = rating;
    } else {
        i--;
    }
  }
}

rememberMyFilms();

function showMyDB(hidden){
  if(!hidden){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for(let i = 2; i <= 3; i++){
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();





