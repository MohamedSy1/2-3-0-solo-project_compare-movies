import Chart from 'chart.js/auto';



const draw = (parentElement) => {
    parentElement.innerHTML = ''
    const canvas = document.createElement('canvas')

    parentElement.appendChild(canvas)
}