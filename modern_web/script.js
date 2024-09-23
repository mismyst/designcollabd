import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './App.css';

function App() {
  const [todayMoney, setTodayMoney] = useState(53000);
  const [todayMoneyGrowth, setTodayMoneyGrowth] = useState(55);
  const [todayUsers, setTodayUsers] = useState(2300);
  const [todayUsersGrowth, setTodayUsersGrowth] = useState(3);
  const [newClients, setNewClients] = useState(3462);
  const [newClientsGrowth, setNewClientsGrowth] = useState(-2);
  const [totalSales, setTotalSales] = useState(103430);
  const [totalSalesGrowth, setTotalSalesGrowth] = useState(5);
  const [satisfactionRate, setSatisfactionRate] = useState(95);
  const [invitedPeople, setInvitedPeople] = useState(145);
  const [bonus, setBonus] = useState(1465);
  const [safetyScore, setSafetyScore] = useState(9.3);
  const [activeUsers, setActiveUsers] = useState(300);
  const [activeUsersGrowth, setActiveUsersGrowth] = useState(23);

  const salesChartRef = useRef(null);
  const activeUsersChartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayMoney((prevMoney) => prevMoney + 100);
      setTodayMoneyGrowth((prevGrowth) => prevGrowth + 0.1);
      setTodayUsers((prevUsers) => prevUsers + 5);
      setTodayUsersGrowth((prevGrowth) => prevGrowth + 0.05);
      setNewClients((prevClients) => prevClients + 10);
      setNewClientsGrowth((prevGrowth) => prevGrowth - 0.02);
      setTotalSales((prevSales) => prevSales + 50);
      setTotalSalesGrowth((prevGrowth) => prevGrowth + 0.05);
      setActiveUsers((prevUsers) => prevUsers + 5);
      setActiveUsersGrowth((prevGrowth) => prevGrowth + 0.1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const salesChartCanvas = salesChartRef.current;
    const activeUsersChartCanvas = activeUsersChartRef.current;

    const salesChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: [500, 450, 300, 400, 550, 350, 450, 500, 350, 400, 450, 500],
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
        },
      ],
    };

    const activeUsersChartData = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Active Users',
          data: [300, 350, 400, 450],
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
        },
      ],
    };

    const salesChart = new Chart(salesChartCanvas, {
      type: 'line',
      data: salesChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    const activeUsersChart = new Chart(activeUsersChartCanvas, {
      type: 'bar',
      data: activeUsersChartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      salesChart.destroy();
      activeUsersChart.destroy();
    };
  }, []);

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar items */}
      </div>
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          {/* Header left */}
          <div className="header-left">
            {/* Header title */}
          </div>
          {/* Header right */}
          <div className="header-right">
            {/* Search bar */}
            {/* User actions */}
          </div>
        </div>
        {/* Content */}
        <div className="content">
          {/* Row 1 */}
          <div className="row">
            {/* Today's Money */}
            {/* Today's Users */}
            {/* New Clients */}
            {/* Total Sales */}
          </div>
          {/* Row 2 */}
          <div className="row">
            {/* Welcome back */}
            {/* Satisfaction Rate */}
            {/* Referral Tracking */}
          </div>
          {/* Row 3 */}
          <div className="row">
            {/* Sales Overview */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <span>Sales Overview</span>
                  <p>+5% more in 2021</p>
                </div>
                <div className="card-body">
                  <canvas ref={salesChartRef} id="salesChart" height="200"></canvas>
                </div>
              </div>
            </div>
            {/* Active Users */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <span>Active Users</span>
                  <p>(+{activeUsersGrowth}) than last week</p>
                </div>
                <div className="card-body">
                  <canvas ref={activeUsersChartRef} id="activeUsersChart" height="200"></canvas>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="footer">
            {/* Footer left */}
            {/* Footer right */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;