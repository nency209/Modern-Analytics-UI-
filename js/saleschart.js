const salesCtx = document.getElementById('salesChart').getContext('2d');
  new Chart(salesCtx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Sales',
        data: [450, 200, 300, 250, 350, 500, 400, 300, 200, 100, 450, 500],
        borderColor: '#4fc3f7',
        backgroundColor: 'rgba(79,195,247,0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: 'white' }, grid: { display: false }},
        y: { ticks: { color: 'white' }, grid: { color: '#1e3a8a' }}
      }
    }
  });

   const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      datasets: [{
        data: [100, 200, 150, 400, 300, 500, 250],
        backgroundColor: '#ffffff',
        borderRadius: 10,
        barThickness: 10
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: 'white' }, grid: { display: false }},
        y: { ticks: { color: 'white' }, grid: { display:false }}
      }
    }
  });

  