const setLocalStoragekey = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
   try {
    localStorage.getItem(JSON.parse(key))
   } catch (error) {
    console.error(error);
    return null
   }
}


export const getMovies = () => {
    return getLocalStorageKey(movies)
}

export const setMovies = (movies) => setLocalStoragekey(movies)


export const addMovie = (movie) => {
    const movies = getMovies().filter((movie) => movie !== movieToRemove)
    setMovies([...movies, movie])
}

export const resetMovies = () => {
    delete getLocalStorageKey()
}

export const initMoviesIfEmpty = () => {
    if (getLocalStorageKey.length === 0) {
        resetMovies()
    }
}