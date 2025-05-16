import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Bookmark, User, Moon, Sun } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <Bookmark className="me-2" size={24} color="#0d6efd" />
            <span className="fw-bold">Loksewa Lab</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/courses">Courses</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/quiz">Quiz</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/certificate">Certificate</NavLink>
              </li>
            </ul>
            
            <div className="d-flex align-items-center ms-lg-4">
              <div className="d-flex align-items-center me-3">
                <span className="me-2">EN</span>
                <label className="toggle-btn mb-0">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
                <span className="ms-2">NP</span>
              </div>
              
              <div className="d-flex align-items-center">
                <Moon className="mode-icon me-2" size={20} />
                <label className="toggle-btn mb-0">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
                <Sun className="mode-icon ms-2" size={20} />
              </div>
              
              <Link to="/login" className="btn btn-outline-primary ms-3">
                <User size={18} className="me-1" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">
        <Outlet />
      </main>

      <footer className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center mb-3">
                <Bookmark className="me-2" size={24} color="#ffffff" />
                <span className="fw-bold fs-4">Loksewa Lab</span>
              </div>
              <p className="text-light opacity-75">
                Smart preparation for Nepal's most competitive exams. Study smarter, not harder.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-light">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#" className="text-light">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
            
            <div className="col-md-2">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Home</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Courses</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Quiz</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Dashboard</a></li>
              </ul>
            </div>
            
            <div className="col-md-2">
              <h5 className="mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Blog</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">FAQ</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">Support</a></li>
                <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75">About Us</a></li>
              </ul>
            </div>
            
            <div className="col-md-4">
              <h5 className="mb-3">Contact Us</h5>
              <form>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email address" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={3} placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <hr className="mt-4 mb-3 border-secondary" />
          
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0 text-light opacity-75">© 2025 Loksewa Lab. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#" className="text-decoration-none text-light opacity-75">Privacy Policy</a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="#" className="text-decoration-none text-light opacity-75">Terms of Service</a>
                </li>
                <li className="list-inline-item ms-3">
                  <a href="#" className="text-decoration-none text-light opacity-75">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;