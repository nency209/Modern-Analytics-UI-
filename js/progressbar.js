// Circle Chart (Doughnut Progress)
const progress = 90; // percent (0-100)
const circleCtx = document.getElementById('circleChart').getContext('2d');

new Chart(circleCtx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [45,115,90],
      backgroundColor: ['blue', 'black','#0075FF'],
      borderWidth: 0,
      borderRadius:4,
      cutout: '90%',
    }]
  },
  options: {
    responsive: true,
     maintainAspectRatio: false, 
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});

// Update label
document.getElementById('progressLabel').innerText = progress + '%';


const circleCtx2 = document.getElementById('circleChart2').getContext('2d');
new Chart(circleCtx2, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [70,110],
      backgroundColor: ['black','#05CD99'],
      borderWidth: 0,
      borderRadius:4,
      cutout: '90%',
    }]
  },
  options: {
    responsive: true,
     maintainAspectRatio: false, 
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    }
  }
});