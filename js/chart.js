'use strict';

let canvasElem = document.getElementById('chart');

function renderChart() {
  let data = new AppState();
  data.loadItems();

  let namesArray = [];
  let viewsAndVotesArray = [];
  let colorsArray = [];

  for (let i = 0; i < data.allProducts.length; i++) {
    namesArray.push(data.allProducts[i].name  + ' Views');
    viewsAndVotesArray.push(data.allProducts[i].timesShown);
    let color1 = Math.floor(256 * Math.random());
    let color2 = Math.floor(256 * Math.random());
    let color3 = Math.floor(256 * Math.random());
    colorsArray.push(`rgba(${color1}, ${color2}, ${color3}, 1)`);
  }

  for (let i = 0; i < data.allProducts.length; i++) {
    namesArray.push(data.allProducts[i].name + ' Votes');
    viewsAndVotesArray.push(data.allProducts[i].timesClicked);
    colorsArray.push(colorsArray[i]);
  }

  const ctx = document.getElementById('canvas');
  Chart.defaults.color = 'white';
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of views, then votes',
        data: viewsAndVotesArray,
        backgroundColor: colorsArray,
        borderWidth: 1,
        text: 'white'
      }]
    },
    options: {
      scales: {
        y: {
          grid: {
            color: 'white'
          },
          ticks: {
            color: 'white'
          },
          beginAtZero: true
        },
        x: {
          grid: {
            color: 'white'
          },
          ticks: {
            color: 'white'
          }
        }
      }
    }
  });
}

renderChart();
