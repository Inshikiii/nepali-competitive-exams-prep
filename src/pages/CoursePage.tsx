import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, PenTool, Zap, Compass, Award, Brain, Clock, Calculator, Settings, User, Flag } from 'lucide-react';

const CoursePage: React.FC = () => {
  // Sample subjects data
  const subjects = [
    { 
      id: 1, 
      title: 'General Knowledge', 
      icon: <FileText size={24} />, 
      sets: 42, 
      students: 1248,
      description: 'Current affairs, history, geography, and culture of Nepal and the world.',
      level: 'Beginner to Advanced'
    },
    { 
      id: 2, 
      title: 'Constitution of Nepal', 
      icon: <Flag size={24} />, 
      sets: 28, 
      students: 1095,
      description: 'Detailed coverage of Nepal\'s constitution, fundamental rights, and governance.',
      level: 'Intermediate'
    },
    { 
      id: 3, 
      title: 'Mathematics', 
      icon: <Calculator size={24} />, 
      sets: 35, 
      students: 867,
      description: 'Quantitative aptitude, basic to advanced mathematics concepts for competitive exams.',
      level: 'Intermediate to Advanced'
    },
    { 
      id: 4, 
      title: 'English', 
      icon: <BookOpen size={24} />, 
      sets: 30, 
      students: 981,
      description: 'Grammar, vocabulary, comprehension, and communication skills in English.',
      level: 'Beginner to Intermediate'
    },
    { 
      id: 5, 
      title: 'Science & Technology', 
      icon: <Zap size={24} />, 
      sets: 25, 
      students: 745,
      description: 'Basic concepts in physics, chemistry, biology and modern technology.',
      level: 'Intermediate'
    },
    { 
      id: 6, 
      title: 'Public Administration', 
      icon: <Settings size={24} />, 
      sets: 22, 
      students: 685,
      description: 'Principles of administration, governance, and public policy.',
      level: 'Advanced'
    },
    { 
      id: 7, 
      title: 'Logical Reasoning', 
      icon: <Brain size={24} />, 
      sets: 20, 
      students: 823,
      description: 'Analytical reasoning, logical puzzles, and problem-solving techniques.',
      level: 'Beginner to Advanced'
    },
    { 
      id: 8, 
      title: 'Social Studies', 
      icon: <User size={24} />, 
      sets: 18, 
      students: 592,
      description: 'Sociology, anthropology, and social issues of Nepal.',
      level: 'Intermediate'
    }
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Explore Subjects</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Browse our collection of carefully curated subjects to prepare for various competitive exams in Nepal. Each subject contains verified practice sets and mock tests.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="row mb-5">
        <div className="col-md-8 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search for subjects, topics, or keywords..." 
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-sm btn-outline-primary active">All Subjects</button>
                <button className="btn btn-sm btn-outline-secondary">Loksewa</button>
                <button className="btn btn-sm btn-outline-secondary">Medical</button>
                <button className="btn btn-sm btn-outline-secondary">Police</button>
                <button className="btn btn-sm btn-outline-secondary">Teacher</button>
                <button className="btn btn-sm btn-outline-secondary">Banking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subject Grid */}
      <div className="row g-4">
        {subjects.map((subject) => (
          <div className="col-md-6 col-lg-3" key={subject.id}>
            <div className="card h-100 border-0 shadow-sm subject-card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    {subject.icon}
                  </div>
                  <h3 className="h5 mb-0">{subject.title}</h3>
                </div>
                
                <p className="text-secondary small mb-3">{subject.description}</p>
                
                <div className="d-flex justify-content-between small text-secondary mb-3">
                  <span>
                    <i className="bi bi-collection me-1"></i> {subject.sets} sets
                  </span>
                  <span>
                    <i className="bi bi-people me-1"></i> {subject.students} students
                  </span>
                </div>
                
                <div className="d-flex align-items-center small mb-3">
                  <div className="rounded-pill bg-light py-1 px-2 d-inline-flex align-items-center">
                    <Clock size={14} className="me-1" />
                    <span>Level: {subject.level}</span>
                  </div>
                </div>
                
                <div className="d-flex justify-content-between mt-auto">
                  <Link to={`/subject/${subject.id}`} className="btn btn-sm btn-outline-primary">
                    View Details
                  </Link>
                  <Link to="/quiz" className="btn btn-sm btn-primary">
                    Start Quiz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Learning Pathways */}
      <div className="mt-5 pt-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Recommended Learning Pathways</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            Follow these structured pathways designed by experts to maximize your chance of success.
          </p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary text-white p-3 me-3">
                    <Compass size={24} />
                  </div>
                  <h3 className="h5 mb-0">Loksewa Officer</h3>
                </div>
                <p className="text-secondary small mb-3">
                  A comprehensive 3-month preparation pathway for Loksewa Officer-level examinations.
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Constitution of Nepal
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Public Administration
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    General Knowledge
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle text-secondary me-2"></i>
                    5 Full Mock Tests
                  </li>
                </ul>
                <button className="btn btn-primary w-100">Enroll Now</button>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary text-white p-3 me-3">
                    <PenTool size={24} />
                  </div>
                  <h3 className="h5 mb-0">Teacher Service</h3>
                </div>
                <p className="text-secondary small mb-3">
                  Specially designed 2-month pathway for Teacher Service Commission examinations.
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Education Policy
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Teaching Methodology
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Child Psychology
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle text-secondary me-2"></i>
                    4 Full Mock Tests
                  </li>
                </ul>
                <button className="btn btn-primary w-100">Enroll Now</button>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary text-white p-3 me-3">
                    <Award size={24} />
                  </div>
                  <h3 className="h5 mb-0">Police Service</h3>
                </div>
                <p className="text-secondary small mb-3">
                  A focused 2-month preparation pathway for Nepal Police Inspector examinations.
                </p>
                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Law & Order
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Criminology
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    General Knowledge
                  </li>
                  <li className="list-group-item px-0">
                    <i className="bi bi-check-circle text-secondary me-2"></i>
                    5 Full Mock Tests
                  </li>
                </ul>
                <button className="btn btn-primary w-100">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="card border-0 shadow-sm mt-5 bg-primary text-white">
        <div className="card-body p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Not sure where to start?</h2>
              <p className="lead mb-0">Take our quick assessment test to get a personalized study plan based on your current knowledge level and target exam.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/assessment" className="btn btn-light btn-lg px-4 fw-semibold">
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;