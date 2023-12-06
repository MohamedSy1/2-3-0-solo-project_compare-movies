import {
    getMovies,
  } from './local-storage'

const handleButton = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData)

    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.innerHTML = `
        <section >
            <h2 class="movie-detail">${formObj.movieTitle}</h2>
            <p class="movie-detail" >Critic Score: ${formObj.criticScore}%</p>
            <p class="movie-detail">Audience Score: ${formObj.audienceScore}%</p>
            <p class="movie-detail">Domestic Total: $${formObj.domesticGrossSales}</p>
            <p class="movie-detail">Genre: ${formObj.genre}</p>
        </section>
        `
    ul.appendChild(li)


    form.reset();

}


export default handleButton




