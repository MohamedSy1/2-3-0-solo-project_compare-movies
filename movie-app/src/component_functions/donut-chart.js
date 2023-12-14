import movieData from './movie-data.json'

export const makeDonutChart = () => {
    const donutChart = document.getElementById('donutChart');
    donutChart.innerHTML = '';
 
    const ctx = document.createElement('canvas');
    donutChart.appendChild(ctx);
    ctx.id = "dons"
 
    let genre = movieData.map((movie) => movie.genre);
    console.log(genre)
    let obj = {}

    for (let i = 0; i < genre.length; i++) {
        if (obj[genre[i]]) {
            obj[genre[i]]++
        } else {
            obj[genre[i]] = 1
        }
    }


    console.log(obj)
    
  
 

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["action", "adventure", "comedy", "drama", "horror", "concert", ],
            datasets: [{
                label: 'My First Dataset',
                data: [obj.action, obj.adventure, obj.comedy, obj.drama, obj.horror, obj.concert],
                backgroundColor: [
                 'rgb(255, 99, 132)',
                 'rgb(54, 162, 235)',
                 'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                   position: 'top',
                }
            }
        }
    });
 }
 
