// Sample brand data
const brandData = {
    Greyson: {
      locations: [30, 25, 15, 10],
      ambassadorReach: [80, 60, 45, 20],
      revenue: [10, 20, 35, 50, 65, 75],
      products: [70, 60, 55, 40, 30],
    },
    Lululemon: {
      locations: [120, 100, 80, 60],
      ambassadorReach: [150, 140, 110, 90],
      revenue: [50, 65, 85, 110, 130, 150],
      products: [80, 85, 75, 50, 35],
    },
    Rhone: {
      locations: [15, 10, 5, 2],
      ambassadorReach: [40, 35, 25, 10],
      revenue: [5, 10, 20, 30, 45, 55],
      products: [60, 50, 40, 30, 20],
    },
    TravisMathew: {
      locations: [40, 35, 25, 15],
      ambassadorReach: [70, 65, 50, 30],
      revenue: [20, 30, 45, 60, 75, 90],
      products: [65, 55, 50, 45, 25],
    }
  };
  
  const years = [2015, 2017, 2019, 2021, 2023, 2025];
  const productLabels = ['Polos', 'Outerwear', 'Pants', 'Hats', 'Accessories'];
  const regionLabels = ['North America', 'Europe', 'Asia', 'Other'];
  const ambassadorLabels = ['Instagram', 'YouTube', 'TikTok', 'LinkedIn'];
  
  // Chart instances
  let locationChart, ambassadorChart, revenueChart, productChart;
  
  function createCharts(data1, data2) {
    // Destroy old charts
    if (locationChart) locationChart.destroy();
    if (ambassadorChart) ambassadorChart.destroy();
    if (revenueChart) revenueChart.destroy();
    if (productChart) productChart.destroy();
  
    // Location chart
    locationChart = new Chart(document.getElementById('locationChart'), {
      type: 'bar',
      data: {
        labels: regionLabels,
        datasets: [
          { label: brand1.value, data: data1.locations, backgroundColor: '#4B9CD3' },
          { label: brand2.value, data: data2.locations, backgroundColor: '#FFB347' }
        ]
      }
    });
  
    // Ambassador chart
    ambassadorChart = new Chart(document.getElementById('ambassadorChart'), {
      type: 'bar',
      data: {
        labels: ambassadorLabels,
        datasets: [
          { label: brand1.value, data: data1.ambassadorReach, backgroundColor: '#4B9CD3' },
          { label: brand2.value, data: data2.ambassadorReach, backgroundColor: '#FFB347' }
        ]
      }
    });
  
    // Revenue chart
    revenueChart = new Chart(document.getElementById('revenueChart'), {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          { label: brand1.value, data: data1.revenue, borderColor: '#4B9CD3', fill: false },
          { label: brand2.value, data: data2.revenue, borderColor: '#FFB347', fill: false }
        ]
      }
    });
  
    // Product chart
    productChart = new Chart(document.getElementById('productChart'), {
      type: 'radar',
      data: {
        labels: productLabels,
        datasets: [
          { label: brand1.value, data: data1.products, backgroundColor: 'rgba(75, 156, 211, 0.3)', borderColor: '#4B9CD3' },
          { label: brand2.value, data: data2.products, backgroundColor: 'rgba(255, 179, 71, 0.3)', borderColor: '#FFB347' }
        ]
      }
    });
  }
  
  function updateCharts() {
    const brandA = brand1.value;
    const brandB = brand2.value;
    createCharts(brandData[brandA], brandData[brandB]);
  }
  
  const brand1 = document.getElementById('brand1');
  const brand2 = document.getElementById('brand2');
  
  // Load initial
  updateCharts();
  
  // Add event listeners
  brand1.addEventListener('change', updateCharts);
  brand2.addEventListener('change', updateCharts);
  