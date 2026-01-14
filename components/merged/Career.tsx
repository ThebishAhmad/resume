"use client";

import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT & SAP Intern</h4>
                <h5>XCMG (Dammam, Saudi Arabia)</h5>
              </div>
              <h3>Jun 2025 - Jul 2025</h3>
            </div>
            <p>
              Digitally transformed the company to improve operational
              efficiency, document collaboration, and internal communication.
              Provided cloud-based personal storage. Assisted in the
              configuration and testing of SAP S/4HANA modules to support
              business operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
