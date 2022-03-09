import ResumePdf from "../../assets/Eric-Kongkaew-Dev.pdf"
import "../../styles/Resume.css";

const About = () => {
    return (
<div className="timeline-container">
<h3>Work History</h3>
<div className='resume-link'>
      <p>
        Download:&nbsp;
        <span>
        <a href={ResumePdf} target="_blank" rel="noopener noreferrer">Resume PDF</a>
        </span>
      </p>
    </div>
  <div className="timeline">
    <ul>
    <li>
        <div className="timeline-content">
          <h4 className="date">March 2022 - Present</h4>
          <h1>Phoenix Afterglow</h1>
          <p>Software Developer</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h4 className="date">October 2021 - March 2022</h4>
          <h1>Thermo Fisher Scientific</h1>
          <p>BioProduction Group I</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h4 className="date">August 2014 - May 2019</h4>
          <h1>Walgreens Boots Alliance, International Retail</h1>
          <p>Store Manager of Pharmacy and Retail Operations</p>
          <p>Assistant Store Manager</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h4 className="date">September 2007 - August 2014</h4>
          <h1>Walgreens Co.</h1>
          <p>Shift Leader / Supervisor</p>
          <p>Customer Service Associate</p>
        </div>
      </li>
      <li>
        <div className="timeline-content">
          <h4 className="date">November 2007 - October 2009</h4>
          <h1>Genesis Healthcare</h1>
          <p>General Maintenance Technician</p>
        </div>
      </li>
    </ul>
  </div>
</div>
    );
  }
  
  export default About;