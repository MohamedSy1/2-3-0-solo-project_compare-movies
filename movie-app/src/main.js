import '../style/form.css';
import '../style/movies.css'
import handleButton from './component_functions/forms'
import data from '/movie-data.json'

const defaultMovies = () => {
    const ul = document.querySelector('#movie-list')

    data.forEach((item) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <section >
            <h2 class="movie-detail">${item.title}</h2>
            <p class="movie-detail" >Critic Score: ${item.criticScore}%</p>
            <p class="movie-detail">Audience Score: ${item.audienceScore}%</p>
            <p class="movie-detail">Domestic Total: $${item.domestic}</p>
            <p class="movie-detail">Genre: ${item.genre}</p>
        </section>
        `
        ul.appendChild(li)
    })
}




const main = () => {
    const form = document.querySelector("#add-movie-form")
    form.addEventListener('submit', handleButton)
    defaultMovies()
    
}

main()



