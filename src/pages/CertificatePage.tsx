import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Award, Download, ArrowRight, CheckCircle } from 'lucide-react';

const CertificatePage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Earn Your Certificate</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
          Complete our rigorous testing program to earn a verified certificate that demonstrates your knowledge and skills.
        </p>
      </div>
      
      {/* Certificate Preview */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow certificate-container">
            <div className="card-body p-5 text-center">
              <div className="mb-4">
                <Award size={64} color="#0d6efd" />
              </div>
              <h2 className="mb-1">Certificate of Completion</h2>
              <p className="mb-4">This certifies that</p>
              <h3 className="display-6 mb-4">Your Name</h3>
              <p className="mb-4">has successfully completed the</p>
              <h3 className="h4 mb-4">Loksewa Officer Preparation Program</h3>
              <p className="mb-4">with distinction</p>
              <div className="row mb-3">
                <div className="col-6 text-end">
                  <p className="mb-0">Date:</p>
                  <p>April 15, 2025</p>
                </div>
                <div className="col-6 text-start">
                  <p className="mb-0">Certificate ID:</p>
                  <p>LSL-2025-8724</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="small text-secondary">
                  This certificate is issued by Loksewa Lab, Kathmandu, Nepal.
                  Verify this certificate at verify.loksewalab.com.np
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Requirements Section */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Certificate Requirements</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="d-flex p-3 border rounded h-100">
                <div className="me-3 mt-1">
                  <div className="bg-danger bg-opacity-10 rounded-circle p-2">
                    <CheckCircle size={24} color="#dc3545" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 mb-2">Pass 3 Full Mock Tests</h3>
                  <p className="small text-secondary mb-2">Score at least 70% on three different full-length mock tests.</p>
                  <span className="badge bg-danger">0/3 Completed</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="d-flex p-3 border rounded h-100">
                <div className="me-3 mt-1">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-2">
                    <CheckCircle size={24} color="#ffc107" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 mb-2">Complete 20 Subject Quizzes</h3>
                  <p className="small text-secondary mb-2">Complete at least 20 subject-specific quizzes with a minimum 65% score.</p>
                  <span className="badge bg-warning text-dark">12/20 Completed</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="d-flex p-3 border rounded h-100">
                <div className="me-3 mt-1">
                  <div className="bg-success bg-opacity-10 rounded-circle p-2">
                    <CheckCircle size={24} color="#198754" />
                  </div>
                </div>
                <div>
                  <h3 className="h5 mb-2">Study 15 Hours</h3>
                  <p className="small text-secondary mb-2">Complete at least 15 hours of tracked study time on the platform.</p>
                  <span className="badge bg-success">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Available Certificates */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Available Certificates</h2>
          
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Certificate</th>
                  <th>Description</th>
                  <th>Requirements</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Award size={24} className="text-primary me-2" />
                      <span>Loksewa Officer</span>
                    </div>
                  </td>
                  <td>Comprehensive preparation for Loksewa Officer examinations</td>
                  <td>
                    <div className="d-flex gap-2">
                      <span className="badge bg-danger">3 Mock Tests</span>
                      <span className="badge bg-warning text-dark">20 Quizzes</span>
                      <span className="badge bg-success">15 Hours</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      In Progress
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Award size={24} className="text-primary me-2" />
                      <span>Teacher Service</span>
                    </div>
                  </td>
                  <td>Complete preparation for Teacher Service Commission exams</td>
                  <td>
                    <div className="d-flex gap-2">
                      <span className="badge bg-danger">3 Mock Tests</span>
                      <span className="badge bg-warning text-dark">15 Quizzes</span>
                      <span className="badge bg-success">10 Hours</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      Start Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Award size={24} className="text-primary me-2" />
                      <span>Police Inspector</span>
                    </div>
                  </td>
                  <td>Specialized preparation for Nepal Police Inspector exams</td>
                  <td>
                    <div className="d-flex gap-2">
                      <span className="badge bg-danger">3 Mock Tests</span>
                      <span className="badge bg-warning text-dark">18 Quizzes</span>
                      <span className="badge bg-success">12 Hours</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      Start Now
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <Award size={24} className="text-primary me-2" />
                      <span>Banking & Finance</span>
                    </div>
                  </td>
                  <td>Specialized preparation for banking sector examinations</td>
                  <td>
                    <div className="d-flex gap-2">
                      <span className="badge bg-danger">3 Mock Tests</span>
                      <span className="badge bg-warning text-dark">15 Quizzes</span>
                      <span className="badge bg-success">10 Hours</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      Start Now
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Download Sample */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0">
              <h2 className="h4 mb-2">Download Sample Certificate</h2>
              <p className="text-secondary mb-0">Get a sample certificate to see the format and design of our official certificates.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-outline-primary d-inline-flex align-items-center">
                <Download size={18} className="me-2" />
                Download Sample PDF
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="card border-0 shadow-sm mb-5">
        <div className="card-body p-4">
          <h2 className="h4 mb-4">Frequently Asked Questions</h2>
          
          <div className="accordion" id="certificateFAQ">
            <div className="accordion-item border-0 mb-3">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
                  How valuable is the Loksewa Lab certificate?
                </button>
              </h3>
              <div id="faqOne" className="accordion-collapse collapse" data-bs-parent="#certificateFAQ">
                <div className="accordion-body">
                  While our certificates are not official government credentials, they demonstrate your dedication and preparation level. Many employers and institutions recognize our certificates as proof of comprehensive exam preparation.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-0 mb-3">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
                  How can I verify the authenticity of a certificate?
                </button>
              </h3>
              <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#certificateFAQ">
                <div className="accordion-body">
                  Each certificate comes with a unique verification code that can be validated on our website. This ensures the certificate is genuine and accurately represents the holder's achievements.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-0 mb-3">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
                  Can I get a physical copy of my certificate?
                </button>
              </h3>
              <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#certificateFAQ">
                <div className="accordion-body">
                  Yes, premium members can request a printed, high-quality physical certificate for an additional fee. This is available after successfully meeting all certification requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="card border-0 shadow-sm bg-primary text-white">
        <div className="card-body p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-3">Ready to earn your certificate?</h2>
              <p className="lead mb-0">Start your preparation journey today and demonstrate your expertise with a Loksewa Lab certificate.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/courses" className="btn btn-light btn-lg d-inline-flex align-items-center">
                Start Learning
                <ArrowRight size={18} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;