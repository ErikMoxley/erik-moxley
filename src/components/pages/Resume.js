import ResumePdf from "../../assets/Eric-Kongkaew-Dev.pdf"
import "../../styles/Resume.css";

const About = () => {
    return (
<div class="timeline-container">
<h3>Work History</h3>
  <div class="timeline">
    <ul>
      <li>
        <div class="timeline-content">
          <h4 class="date">October 2021</h4>
          <h1>Thermo Fisher Scientific</h1>
          <p>Manufacturer Technician I</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h4 class="date">August 2014 - May 2019</h4>
          <h1>Walgreens Boots Alliance</h1>
          <p>Store Manager</p>
          <p>Assistant Store Manager</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h4 class="date">September 2007 - August 2014</h4>
          <h1>Walgreens Co.</h1>
          <p>Shift Leader</p>
          <p>Customer Service Associate</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h4 class="date">November 2007 - October 2009</h4>
          <h1>Genesis Healthcare</h1>
          <p>General Maintenance Technician</p>
        </div>
      </li>
    </ul>
  </div>
    <p className='resume-link'>
      Download:&nbsp;
    <span>
    <a href={ResumePdf} target="_blank" rel="noopener noreferrer">Resume PDF</a>
    </span>
    </p>  
</div>
    );
  }
  
  export default About;