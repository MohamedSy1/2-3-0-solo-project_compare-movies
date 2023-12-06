

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
    // const movieTitle = document.querySelector("#results-movie-title")
    // const criticScore = document.querySelector("#results-critic-score")
    // const audienceScore = document.querySelector("#results-audience-score")
    // const domesticTotal = document.querySelector('#results-domestic-total')
    // const genre = document.querySelector("#result4321s-genre")

    // movieTitle.textContent = formObj.movieTitle
    // criticScore.textContent = formObj.criticScore + '%'
    // audienceScore.textContent = formObj.audienceScore + '%'
    // domesticTotal.textContent = '$' + formObj.domesticGrossSales
    // genre.textContent = formObj.genre
}


export default handleButton




