import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Award, Star, PenTool, FileText, Clock, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7 hero-text text-white">
              <h1 className="display-4 fw-bold mb-3">Smart Prep for Nepal's Competitive Exams</h1>
              <p className="lead mb-4">Master Loksewa, Medical, Police, and Teacher entrance exams with our verified content, bilingual interface, and gamified learning.</p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/courses" className="btn btn-light btn-lg px-4 fw-semibold">
                  Start Practicing
                </Link>
                <Link to="/quiz" className="btn btn-outline-light btn-lg px-4">
                  Try a Free Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Loksewa Lab?</h2>
            <p className="lead text-secondary">The smart way to prepare for Nepal's most competitive exams</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <Check size={32} color="#0d6efd" />
                  </div>
                  <h3 className="h4 mb-3">Verified Content</h3>
                  <p className="text-secondary">All our questions and study materials are verified by experts who have cleared the exams.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <PenTool size={32} color="#0d6efd" />
                  </div>
                  <h3 className="h4 mb-3">Bilingual Interface</h3>
                  <p className="text-secondary">Practice in both English and Nepali languages to improve your understanding and preparation.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm feature-card">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                    <Award size={32} color="#0d6efd" />
                  </div>
                  <h3 className="h4 mb-3">Gamified Progress</h3>
                  <p className="text-secondary">Track your progress, earn badges, and compete with peers to stay motivated throughout your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3 col-6">
              <h2 className="display-4 fw-bold text-primary">5K+</h2>
              <p className="text-secondary fw-medium">Students</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="display-4 fw-bold text-primary">2.5K+</h2>
              <p className="text-secondary fw-medium">Questions</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="display-4 fw-bold text-primary">150+</h2>
              <p className="text-secondary fw-medium">Success Stories</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="display-4 fw-bold text-primary">85%</h2>
              <p className="text-secondary fw-medium">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">How It Works</h2>
            <p className="lead text-secondary">Three simple steps to boost your exam preparation</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <span className="fw-bold">1</span>
                </div>
                <h3 className="h5 mb-0">Choose Your Subject</h3>
              </div>
              <div className="mt-3 ms-5 ps-2">
                <p className="text-secondary">Select from our comprehensive list of subjects based on your target exam.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <span className="fw-bold">2</span>
                </div>
                <h3 className="h5 mb-0">Take Practice Quizzes</h3>
              </div>
              <div className="mt-3 ms-5 ps-2">
                <p className="text-secondary">Attempt timed quizzes with real exam pattern questions and instant feedback.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div className="bg-primary rounded-circle text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                  <span className="fw-bold">3</span>
                </div>
                <h3 className="h5 mb-0">Track Your Progress</h3>
              </div>
              <div className="mt-3 ms-5 ps-2">
                <p className="text-secondary">Monitor your improvement with detailed analytics and focus on your weak areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold mb-0">Popular Subjects</h2>
            <Link to="/courses" className="btn btn-outline-primary">View All</Link>
          </div>
          
          <div className="row g-4">
            {[
              { title: 'General Knowledge', icon: <FileText />, sets: 42 },
              { title: 'Constitution of Nepal', icon: <Star />, sets: 28 },
              { title: 'Mathematics', icon: <Zap />, sets: 35 },
              { title: 'English', icon: <Clock />, sets: 30 }
            ].map((subject, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm subject-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                        {subject.icon}
                      </div>
                      <h3 className="h5 mb-0">{subject.title}</h3>
                    </div>
                    <p className="text-secondary">{subject.sets} practice sets</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="badge bg-success">{Math.floor(Math.random() * 500) + 500} students</span>
                      <Link to="/quiz" className="btn btn-sm btn-primary">Start Quiz</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Student Success Stories</h2>
            <p className="lead text-secondary">Hear from those who succeeded with Loksewa Lab</p>
          </div>
          
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-item text-center">
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        className="rounded-circle mb-4" 
                        alt="Student" 
                        width="80"
                        height="80"
                        style={{ objectFit: 'cover' }}
                      />
                      <p className="fs-5 mb-4">"Loksewa Lab made my preparation journey smooth and effective. The bilingual interface helped me understand complex concepts in both languages."</p>
                      <h5 className="mb-1">Pratima Sharma</h5>
                      <p className="text-primary mb-0">Loksewa Officer, 2nd Rank</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="testimonial-item text-center">
                      <img 
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        className="rounded-circle mb-4" 
                        alt="Student" 
                        width="80"
                        height="80"
                        style={{ objectFit: 'cover' }}
                      />
                      <p className="fs-5 mb-4">"The practice tests accurately reflected the actual exam. The detailed analytics helped me identify and improve my weak areas."</p>
                      <h5 className="mb-1">Rajesh Bhattarai</h5>
                      <p className="text-primary mb-0">Police Inspector, 5th Rank</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Ready to Start Your Exam Preparation?</h2>
              <p className="lead mb-0">Join thousands of successful students who have cleared their exams using Loksewa Lab.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/courses" className="btn btn-light btn-lg px-4 fw-semibold">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;