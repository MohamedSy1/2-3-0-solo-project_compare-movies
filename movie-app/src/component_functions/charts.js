import { getMovies } from './local-storage'
import movieData from './movie-data.json'

export const makeBarChart = () => {
  
  const barChart = document.getElementById('barChart')
  barChart.innerHTML = ''

  const ctx = document.createElement('canvas')
  barChart.appendChild(ctx)
  let movies = getMovies()
  let title = movies.map((movie) => movie.title)
  let domesticGross = movies.map((movie) => movie.domestic)

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: title,
      datasets: [{
        label: 'Domestic Gross',
        data: domesticGross,
        borderWidth: 1,
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }, 
      }
    }
  })
}




console.log('chartjs')