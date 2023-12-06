import { makeBarChart }  from './component_functions/charts.js';
import '../style/form.css';
import '../style/movies.css'
import handleButton from './component_functions/forms'
import { 
    getMovies,
    setMovies,
    initializeMovies,
    removeMovie

} from "./component_functions/local-storage.js"
// import data from '/movie-data.json'
// import charts from './component_functions/charts.js'

const renderMovies = () => {
    const ul = document.querySelector('#movie-list')
    const data = getMovies()
    console.log(data);
    data.forEach((movie) => {
       const li = document.createElement('li')
       li.innerHTML = `
       <section >
            <h2 class="movie-detail">${movie.title}</h2>
            <p class="movie-detail" >Critic Score: ${movie.criticScore}%</p>
            <p class="movie-detail">Audience Score: ${movie.audienceScore}%</p>
            <p class="movie-detail">Domestic Total: $${movie.domestic}</p>
            <p class="movie-detail">Genre: ${movie.genre}</p>
        </section>
       `
       ul.append(li)
       
    })

}




const main = () => {
    const form = document.querySelector("#add-movie-form")
    form.addEventListener('submit', handleButton)
    if (!getMovies()) initializeMovies();
    renderMovies()
    makeBarChart()
    
}

main()



