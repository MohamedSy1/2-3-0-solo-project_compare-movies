

const handleButton = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData)

    const movieTitle = document.querySelector("#results-movie-title")
    const criticScore = document.querySelector("#results-critic-score")
    const audienceScore = document.querySelector("#results-audience-score")
    const domesticTotal = document.querySelector('#results-domestic-total')
    const genre = document.querySelector("#results-genre")

    movieTitle.textContent = formObj.movieTitle
    criticScore.textContent = formObj.criticScore + '%'
    audienceScore.textContent = formObj.audienceScore + '%'
    domesticTotal.textContent = '$' + formObj.domesticGrossSales
    genre.textContent = formObj.genre

}


export default handleButton




