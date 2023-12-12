import { makeBarChart }  from './component_functions/charts.js';
import { makeDonutChart } from './component_functions/donut-chart.js'
import '../style/form.css';
import '../style/movies.css';
// import handleButton from './component_functions/forms'
import { 
    getMovies,
    setMovies,
    initializeMovies,
    removeMovie,
    addMovies

} from "./component_functions/local-storage.js"
// import data from '/movie-data.json'
// import charts from './component_functions/charts.js'


const  handleButton = (event) => {
    event.preventDefault()
    const ul = document.querySelector('#movie-list') 
    

    const form = event.target
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData)

    console.log(formObj)
    
    addMovies(formObj)  
    renderMovies();
    makeBarChart()
    

    form.reset();   
}

const renderMovies = () => {
    const ul = document.querySelector('#movie-list')
    ul.innerHTML = '';
    const data = getMovies()
    console.log(data)
    console.log(data);
    data.forEach((movie) => {
       const li = document.createElement('li')
       li.innerHTML = `
       <section >
            <h2 >${movie.title}</h2>
            <p class="movie-detail" >Critic Score: ${movie.criticScore}%</p>
            <p class="movie-detail">Audience Score: ${movie.audienceScore}%</p>
            <p class="movie-detail">Domestic Total: $${movie.domestic}</p>
            <p class="movie-detail">Genre: ${movie.genre}</p>
        </section>
       `
       ul.append(li)
       
    })
    makeBarChart()
    makeDonutChart()
}

const removeMovies = (event) => {
    event.preventDefault()
    let movies = getMovies()
    removeMovie(movies)
    initializeMovies()
    renderMovies()
}




const main = () => {
   
    const form = document.querySelector("#add-movie-form")
    form.addEventListener('submit', handleButton)
    if (!getMovies()) initializeMovies();
    renderMovies()
    makeBarChart()
    makeDonutChart()
    
    const button = document.querySelector('#removeMovie')
    button.addEventListener('click', removeMovies)
    // const button = document.querySelector('defaultButton')
    // button.addEventListener('click', removeMovies)
    
}

main()

export default renderMovies;



