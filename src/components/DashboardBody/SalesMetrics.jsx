// src/components/DashboardBody/SalesMetrics.jsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../styles/sales-metrics.css';
import UpArrow from '../../assets/icons/body/up-arrow.png';
import DownArrow from '../../assets/icons/body/down-arrow.png';
import Help from '../../assets/icons/body/Question.png';
import PieChart from '../../assets/images/body/graph.png';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesData = {
  labels: ['09', '10', '11', '12', '13', '14', '15'],
  datasets: [
    {
      label: 'This Month',
      data: [1.5, 2.6, 2.4, 6.0, 2.2, 3.0, 1.0],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      fill: {
        target: 'origin',
        above: 'rgba(76, 175, 80, 0.1)'
      },
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: 'Last Month',
      data: [2.8, 1.5, 3.8, 3.2, 3.8, 1.5, 0.6],
      borderColor: '#FF5722',
      backgroundColor: 'rgba(255, 87, 34, 0)',
      borderWidth: 2,
      borderDash: [5, 5],
      tension: 0.4,
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ]
};

const cityData = [
  { name: 'New Delhi', value: '₹26.5L', percentage: '35%', change: '1.2%', isUp: true, color: '#4CAF50' },
  { name: 'Mumbai', value: '₹36.4L', percentage: '23%', change: '3.3%', isUp: false, color: '#2196F3' },
  { name: 'West Bengal', value: '₹12.2L', percentage: '21%', change: '2.3%', isUp: false, color: '#FFC107' },
  { name: 'Others', value: '₹24.3L', percentage: '9%', change: '1.09%', isUp: true, color: '#9C27B0' },
];

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: '#fff',
      titleColor: '#333',
      bodyColor: '#666',
      borderColor: '#eee',
      borderWidth: 1,
      padding: 10,
      displayColors: false,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y}`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#999' }
    },
    y: {
      min: 0,
      max: 7,
      ticks: { 
        stepSize: 1.5,
        color: '#999',
        callback: function(value) {
          return value % 1.5 === 0 ? value : '';
        }
      },
      grid: {
        color: '#f0f0f0',
        drawBorder: false
      }
    }
  },
  elements: {
    line: {
      tension: 0.4
    }
  }
};

const SalesMetrics = () => {
  return (
    <div className="sales-metrics">
      {/* Sales (MRP) */}
      <div className="metric-card">
        <div className="metric-header">
          <h3>Sales (MRP)</h3>
          <img src={Help} alt="Help" className="help-icon" />
        </div>
        <div className="divider"></div>
        <div className="metric-body">
          <div className="main-value">125.49</div>
          <div className="comparison">
            <div className="change up">
              <img src={UpArrow} alt="Up" />
              <span>2.4%</span>
            </div>
            <div className="vs">vs 119.69 last month</div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-wrapper">
            <Line 
              data={SalesData} 
              options={chartOptions}
              height={150}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="indicator this-month"></div>
            <span>This Month</span>
          </div>
          <div className="legend-item">
            <div className="indicator last-month"></div>
            <span>Last Month</span>
          </div>
        </div>
      </div>

      {/* Total Quantity Sold */}
      <div className="metric-card">
        <div className="metric-header">
          <h3>Total Quantity Sold</h3>
          <img src={Help} alt="Help" className="help-icon" />
        </div>
        <div className="divider"></div>
        <div className="metric-body">
          <div className="main-value">125.49</div>
          <div className="comparison">
            <div className="change up">
              <img src={UpArrow} alt="Up" />
              <span>2.4%</span>
            </div>
            <div className="vs">vs 119.69 last month</div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-wrapper">
            <Line 
              data={SalesData} 
              options={chartOptions}
              height={150}
            />
          </div>
        </div>
        <div className="divider"></div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="indicator this-month"></div>
            <span>This Month</span>
          </div>
          <div className="legend-item">
            <div className="indicator last-month"></div>
            <span>Last Month</span>
          </div>
        </div>
      </div>

{/* Top Cities */}
<div className="metric-card">
  <div className="metric-header">
    <h3>Top Cities</h3>
    <img src={Help} alt="Help" className="help-icon" />
  </div>
  <div className="divider"></div>

  <div className="pie-container">
    {/* Replace with your Figma pie chart image */}
    <div className="pie-image-wrapper">
      <img 
        src={PieChart} 
        alt="Cities Distribution" 
        className="pie-image"
      />
    </div>
    <div className="city-list">
      {cityData.map((city, index) => (
        <div className="city-item" key={index}>
          <div className="city-info">
            <div className="color-dot" style={{ backgroundColor: city.color }}></div>
            <span className="city-name">{city.name}</span>
          </div>
          <div className="city-stats">
            <span className="city-value">{city.value}</span>
            <span className="city-percentage">{city.percentage}</span>
            <span className={`city-change ${city.isUp ? 'up' : 'down'}`}>
              {city.isUp ? (
                <img src={UpArrow} alt="Up" />
              ) : (
                <img src={DownArrow} alt="Down" />
              )}
              {city.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </div>
  );
};

export default SalesMetrics;