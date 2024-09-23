import React, { useState, useEffect } from 'react';
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

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-item active">
          <i className="fas fa-home"></i>
          <span>Dashboard</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-table"></i>
          <span>Tables</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-money-bill-wave"></i>
          <span>Billing</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-rocket"></i>
          <span>RTL</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-user-cog"></i>
          <span>Account Pages</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-sign-in-alt"></i>
          <span>Sign In</span>
        </div>
        <div className="sidebar-item">
          <i className="fas fa-rocket"></i>
          <span>Sign Up</span>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="header-left">
            <div className="header-title">
              <h2>Dashboard</h2>
            </div>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Type here..." />
            </div>
            <div className="user-actions">
              <i className="fas fa-sign-in-alt"></i>
              <i className="fas fa-cog"></i>
              <i className="fas fa-bell"></i>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-money-bill-wave"></i>
                  <span>Today's Money</span>
                </div>
                <div className="card-body">
                  <h2 className="card-value">{todayMoney.toLocaleString('en-US')}</h2>
                  <span className="card-growth" style={{ color: todayMoneyGrowth > 0 ? 'green' : 'red' }}>
                    {todayMoneyGrowth > 0 ? '+' : ''}
                    {todayMoneyGrowth}%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-user"></i>
                  <span>Today's Users</span>
                </div>
                <div className="card-body">
                  <h2 className="card-value">{todayUsers.toLocaleString('en-US')}</h2>
                  <span className="card-growth" style={{ color: todayUsersGrowth > 0 ? 'green' : 'red' }}>
                    {todayUsersGrowth > 0 ? '+' : ''}
                    {todayUsersGrowth}%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-globe"></i>
                  <span>New Clients</span>
                </div>
                <div className="card-body">
                  <h2 className="card-value">{newClients.toLocaleString('en-US')}</h2>
                  <span className="card-growth" style={{ color: newClientsGrowth > 0 ? 'green' : 'red' }}>
                    {newClientsGrowth > 0 ? '+' : ''}
                    {newClientsGrowth}%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <i className="fas fa-shopping-cart"></i>
                  <span>Total Sales</span>
                </div>
                <div className="card-body">
                  <h2 className="card-value">${totalSales.toLocaleString('en-US')}</h2>
                  <span className="card-growth" style={{ color: totalSalesGrowth > 0 ? 'green' : 'red' }}>
                    {totalSalesGrowth > 0 ? '+' : ''}
                    {totalSalesGrowth}%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <span>Welcome back,</span>
                  <h2>Mark Johnson</h2>
                  <p>Glad to see you again! Ask me anything.</p>
                  <div className="record-button">
                    <span>Tap to record</span>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
                <div className="card-body">
                  <img src="https://www.w3schools.com/w3css/img_fjords.jpg" alt="Jellyfish" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <span>Satisfaction Rate</span>
                  <p>From all projects</p>
                </div>
                <div className="card-body">
                  <div className="progress-bar">
                    <div className="progress-bar-value" style={{ width: `${satisfactionRate}%` }}>
                      <span>{satisfactionRate}%</span>
                    </div>
                  </div>
                  <span className="progress-bar-label">Based on likes</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <span>Referral Tracking</span>
                </div>
                <div className="card-body">
                  <div className="card-data">
                    <span>Invited</span>
                    <h2 className="card-value">{invitedPeople} people</h2>
                  </div>
                  <div className="card-data">
                    <span>Bonus</span>
                    <h2 className="card-value">{bonus}</h2>
                  </div>
                  <div className="card-data">
                    <span>Safety</span>
                    <div className="safety-score">
                      <span>{safetyScore}</span>
                      <div className="progress-circle"></div>
                    </div>
                    <span className="progress-bar-label">Total Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <span>Sales Overview</span>
                  <p>+5% more in 2021</p>
                </div>
                <div className="card-body">
                  <canvas id="salesChart" height="200"></canvas>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <span>Active Users</span>
                  <p>(+{activeUsersGrowth}) than last week</p>
                </div>
                <div className="card-body">
                  <canvas id="activeUsersChart" height="200"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-left">
              <button className="footer-button">Upgrade to PRO</button>
            </div>
            <div className="footer-right">
              <button className="footer-button">Activate Windows</button>
              <span>Go to Settings to activate Windows</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;