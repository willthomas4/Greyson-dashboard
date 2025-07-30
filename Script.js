const brandData = {
    Greyson: {
      locations: [10, 20, 15],
      socialReach: [400, 300, 150],
      revenue: [5, 10, 15, 20, 25, 30],
      productFocus: [30, 50, 20]
    },
    Lululemon: {
      locations: [60, 90, 80],
      socialReach: [800, 600, 500],
      revenue: [15, 20, 30, 45, 55, 70],
      productFocus: [20, 70, 10]
    },
    Rhone: {
      locations: [5, 10, 12],
      socialReach: [200, 100, 80],
      revenue: [2, 5, 8, 12, 16, 22],
      productFocus: [40, 40, 20]
    },
    TravisMathew: {
      locations: [20, 30, 25],
      socialReach: [300, 250, 200],
      revenue: [10, 12, 20, 28, 35, 42],
      productFocus: [25, 60, 15]
    }
  };
  
  const labels = {
    locations: ['West', 'East', 'South'],
    socialReach: ['Instagram', 'TikTok', 'Twitter'],
    revenue: ['2015', '2017', '2019', '2021', '2023', '2025'],
    productFocus: ['Golf', 'Lifestyle', 'Accessories']
  };
  
  function createChart(id, type, label, data1, data2, brand1, brand2) {
    return new Chart(document.getElementById(id), {
      type,
      data: {
        labels: label,
        datasets: [
          {
            label: brand1,
            data: data1,
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
          },
          {
            label: brand2,
            data: data2,
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  
  // Chart instances
  let locationChart, ambassadorChart, revenueChart, productChart;
  
  function updateCharts() {
    const brand1 = document.getElementById('brand1').value;
    const brand2 = document.getElementById('brand2').value;
  
    if (locationChart) locationChart.destroy();
    if (ambassadorChart) ambassadorChart.destroy();
    if (revenueChart) revenueChart.destroy();
    if (productChart) productChart.destroy();
  
    locationChart = createChart('locationChart', 'bar', labels.locations,
      brandData[brand1].locations, brandData[brand2].locations, brand1, brand2);
  
    ambassadorChart = createChart('ambassadorChart', 'bar', labels.socialReach,
      brandData[brand1].socialReach, brandData[brand2].socialReach, brand1, brand2);
  
    revenueChart = createChart('revenueChart', 'line', labels.revenue,
      brandData[brand1].revenue, brandData[brand2].revenue, brand1, brand2);
  
    productChart = createChart('productChart', 'doughnut', labels.productFocus,
      brandData[brand1].productFocus, brandData[brand2].productFocus, brand1, brand2);
  }
  
  document.getElementById('brand1').addEventListener('change', updateCharts);
  document.getElementById('brand2').addEventListener('change', updateCharts);
  
  window.onload = updateCharts;
  