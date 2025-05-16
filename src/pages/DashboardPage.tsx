import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart2, Award, Users, BookOpen, Clock } from 'lucide-react';

const DashboardPage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
        <h1 className="fw-bold mb-0">Student Dashboard</h1>
        <Link to="/courses" className="btn btn-primary">Take New Quiz</Link>
      </div>
      
      {/* Progress Overview */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Your Exam Readiness</h2>
          
          <div className="mb-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-medium">Overall Progress</span>
              <span className="fw-semibold">72%</span>
            </div>
            <div className="progress" style={{ height: '10px' }}>
              <div 
                className="progress-bar bg-success" 
                role="progressbar" 
                style={{ width: '72%' }} 
                aria-valuenow={72} 
                aria-valuemin={0} 
                aria-valuemax={100}
              ></div>
            </div>
            <div className="mt-2 text-success">
              <small>You are 72% ready for your exam!</small>
            </div>
          </div>
          
          <div className="row g-4 mt-2">
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 text-center">
                <BookOpen size={24} className="text-primary mb-2" />
                <h3 className="h5 mb-1">45</h3>
                <p className="small text-secondary mb-0">Quizzes Completed</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 text-center">
                <Clock size={24} className="text-primary mb-2" />
                <h3 className="h5 mb-1">28.5 hrs</h3>
                <p className="small text-secondary mb-0">Study Time</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 text-center">
                <Award size={24} className="text-primary mb-2" />
                <h3 className="h5 mb-1">85%</h3>
                <p className="small text-secondary mb-0">Avg. Score</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="border rounded p-3 text-center">
                <BarChart2 size={24} className="text-primary mb-2" />
                <h3 className="h5 mb-1">Top 15%</h3>
                <p className="small text-secondary mb-0">Ranking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subject Progress */}
      <div className="row g-4 mb-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 mb-4">Subject Performance</h2>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>General Knowledge</span>
                  <span className="fw-semibold">85%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Constitution</span>
                  <span className="fw-semibold">76%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-success" style={{ width: '76%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>Mathematics</span>
                  <span className="fw-semibold">65%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>English</span>
                  <span className="fw-semibold">72%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '72%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Science</span>
                  <span className="fw-semibold">58%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-danger" style={{ width: '58%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h2 className="h4 mb-4">Study Calendar</h2>
              <div className="d-flex align-items-center justify-content-center h-100">
                <Calendar size={32} className="me-2 text-primary" />
                <span>Calendar view available in the full version</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Recent Quiz Activities</h2>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Time Taken</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>April 10, 2025</td>
                  <td>General Knowledge</td>
                  <td>
                    <span className="badge bg-success">92%</span>
                  </td>
                  <td>12 min</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">View</button>
                  </td>
                </tr>
                <tr>
                  <td>April 8, 2025</td>
                  <td>Constitution</td>
                  <td>
                    <span className="badge bg-success">85%</span>
                  </td>
                  <td>18 min</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">View</button>
                  </td>
                </tr>
                <tr>
                  <td>April 5, 2025</td>
                  <td>Mathematics</td>
                  <td>
                    <span className="badge bg-warning">65%</span>
                  </td>
                  <td>25 min</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">View</button>
                  </td>
                </tr>
                <tr>
                  <td>April 3, 2025</td>
                  <td>English</td>
                  <td>
                    <span className="badge bg-success">78%</span>
                  </td>
                  <td>15 min</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary">View All Activity</button>
          </div>
        </div>
      </div>
      
      {/* Achievements */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Your Achievements</h2>
          
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="achievement-badge">
                  <Award size={36} color="#0d6efd" />
                  <h3 className="h6 mt-2 mb-0">Top Performer</h3>
                </div>
                <p className="small text-secondary mt-2">Scored in top 10%</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="achievement-badge">
                  <BookOpen size={36} color="#0d6efd" />
                  <h3 className="h6 mt-2 mb-0">Quiz Master</h3>
                </div>
                <p className="small text-secondary mt-2">Completed 30+ quizzes</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="achievement-badge">
                  <Clock size={36} color="#0d6efd" />
                  <h3 className="h6 mt-2 mb-0">Study Champion</h3>
                </div>
                <p className="small text-secondary mt-2">20+ hours of study</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="achievement-badge bg-light opacity-50">
                  <Users size={36} color="#6c757d" />
                  <h3 className="h6 mt-2 mb-0">Team Leader</h3>
                </div>
                <p className="small text-secondary mt-2">Locked achievement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leaderboard */}
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 mb-0">Leaderboard</h2>
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                This Month
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">This Week</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">All Time</a></li>
              </ul>
            </div>
          </div>
          
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Quizzes</th>
                  <th>Avg. Score</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-primary">
                  <td>
                    <span className="badge bg-primary">1</span>
                  </td>
                  <td>Aarav Poudel</td>
                  <td>67</td>
                  <td>94%</td>
                  <td>5,820</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-secondary">2</span>
                  </td>
                  <td>Priya Sharma</td>
                  <td>62</td>
                  <td>91%</td>
                  <td>5,645</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-secondary">3</span>
                  </td>
                  <td>Rahul Karki</td>
                  <td>58</td>
                  <td>89%</td>
                  <td>5,310</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-secondary">4</span>
                  </td>
                  <td className="fw-bold">You</td>
                  <td>45</td>
                  <td>85%</td>
                  <td>4,760</td>
                </tr>
                <tr>
                  <td>
                    <span className="badge bg-secondary">5</span>
                  </td>
                  <td>Ananya Thapa</td>
                  <td>41</td>
                  <td>82%</td>
                  <td>4,290</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary">View Full Leaderboard</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;