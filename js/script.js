'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const film = prompt('Один из последних просмотренных фильмов?', ''),
      rating = prompt('На сколько оцените его?', ''),
      film2 = prompt('Один из последних просмотренных фильмов?', ''),
      rating2 = prompt('На сколько оцените его?', '');

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    gentres: [],
    privat: false
};

personalMovieDB.movies[film] = rating;
personalMovieDB.movies[film2] = rating2;


console.log(personalMovieDB);
