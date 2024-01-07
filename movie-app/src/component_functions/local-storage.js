import movieData from "./movie-data.json"

// Generic Helper Functions
export const setLocalStorageKey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
  
  export const getLocalStorageKey = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  
  // movies-specific helper functions
  export const setMovies = (movies) => setLocalStorageKey('movies', movies);
  export const getMovies = () => getLocalStorageKey('movies');
  
  // modifying movies functions
  export const initializeMovies = () => setMovies(movieData);
  
  export const addMovies = (movie) => {
    const movies = getMovies();
    setMovies([movie,...movies]);
  }
  
  export const removeMovie = (movieToRemove) => {
    const movies = getMovies();
    const filteredMovies = movies.filter((movie) => movie !== movieToRemove);
    setMovies(filteredMovies);
  }