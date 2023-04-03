// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((currentMovies) => {
    return currentMovies.director;
  });
}

//Bonus Iteration 1.1
function getUniqueDirectors(moviesArray) {
  const uniqueDirectors = moviesArray.reduce((acc, currentmovie) => {
    if (!acc.includes(currentmovie.director)) {
      acc.push(currentmovie.director);
    }
  }, []);

  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray === null) {
    return 0;
  }
  if (moviesArray.length === 0) {
    return 0;
  }

  return moviesArray.filter(
    (currentmovie) =>
      currentmovie.director === "Steven Spielberg" &&
      currentmovie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray
    .filter((currentMovie) => typeof currentMovie.score === "number")
    .reduce((acc, currentMovie) => currentMovie.score + acc, 0);

  const avgScore = sum / moviesArray.length;
  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const filterDrama = moviesArray.filter(
    (currentmovie) =>
      currentmovie.genre.includes("Drama") &&
      typeof currentmovie.score === "number"
  );
  if (filterDrama.length === 0) {
    return 0;
  }
  const sum = filterDrama.reduce(
    (acc, currentmovie) => currentmovie.score + acc,
    0
  );
  const avgScore = sum / filterDrama.length;
  return Number(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const cloneArray = moviesArray.slice();

  cloneArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
    } else {
      return a.year - b.year;
    }
  });

  return cloneArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const cloneArray = moviesArray.slice();
  cloneArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 0;
    }
  });

  return cloneArray.slice(0, 20).map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const timeparts = movie.duration.split(" ");
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
