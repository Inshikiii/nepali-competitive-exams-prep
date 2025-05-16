import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';

const QuizPage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-md-8">
          <h1 className="fw-bold mb-3">General Knowledge Quiz</h1>
          <div className="d-flex align-items-center mb-4">
            <div className="d-flex align-items-center me-4">
              <Clock size={20} className="me-2 text-primary" />
              <span>15:00 minutes remaining</span>
            </div>
            <div>
              <span className="badge bg-primary">Question 3 of 20</span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="progress mb-4" style={{ height: '8px' }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: '15%' }} 
              aria-valuenow={15} 
              aria-valuemin={0} 
              aria-valuemax={100}
            ></div>
          </div>
          
          {/* Question Card */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h2 className="h4 mb-4">Which of the following rivers is the longest in Nepal?</h2>
              
              <div className="list-group">
                <label className="list-group-item list-group-item-action border-0 rounded mb-2 quiz-option">
                  <input type="radio" name="answer" className="form-check-input me-2" />
                  Koshi River
                </label>
                <label className="list-group-item list-group-item-action border-0 rounded mb-2 quiz-option">
                  <input type="radio" name="answer" className="form-check-input me-2" />
                  Karnali River
                </label>
                <label className="list-group-item list-group-item-action border-0 rounded mb-2 quiz-option">
                  <input type="radio" name="answer" className="form-check-input me-2" />
                  Gandaki River
                </label>
                <label className="list-group-item list-group-item-action border-0 rounded mb-2 quiz-option">
                  <input type="radio" name="answer" className="form-check-input me-2" />
                  Mahakali River
                </label>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-primary px-4">Previous</button>
            <button className="btn btn-primary px-4 d-flex align-items-center">
              Next <ChevronRight size={18} className="ms-1" />
            </button>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <h3 className="h5 mb-3">Question Navigator</h3>
              <div className="d-flex flex-wrap gap-2">
                {[...Array(20)].map((_, index) => (
                  <button 
                    key={index} 
                    className={`btn ${index === 2 ? 'btn-primary' : index < 2 ? 'btn-success' : 'btn-outline-secondary'}`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-success rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span>Answered (2)</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-primary rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span>Current (1)</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-secondary rounded-circle me-2" style={{ width: '12px', height: '12px' }}></div>
                  <span>Unanswered (17)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h3 className="h5 mb-3">Quiz Options</h3>
              <button className="btn btn-outline-warning d-block w-100 mb-2">Flag for Review</button>
              <button className="btn btn-outline-danger d-block w-100 mb-2">Clear Answer</button>
              <button className="btn btn-success d-block w-100">Submit Quiz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;