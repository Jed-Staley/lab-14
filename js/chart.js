'use strict';

let canvasElem = document.getElementById('chart');

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

  const myChart = new Chart(canvasElem, {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: '# of views, then votes',
        data: viewsAndVotesArray,
        backgroundColor: colorsArray,
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

