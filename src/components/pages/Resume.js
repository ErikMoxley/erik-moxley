import ResumePdf from "../../assets/Eric-Kongkaew.pdf"
import "../../styles/Content.css";

const About = () => {
    return (
<div class="timeline-container">
  <div class="timeline">
    <ul>
      <li>
        <div class="timeline-content">
          <h3 class="date">October 2021</h3>
          <h1>Thermo Fisher Scientific</h1>
          <p>Manufacturer Technician I</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">November 2015 - May 2020</h3>
          <h1>Walgreens Boots Alliance</h1>
          <p>Store Manager</p>
          <p>Assistant Store Manager</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">September 2007 - November 2015</h3>
          <h1>Walgreens Co.</h1>
          <p>Shift Leader</p>
          <p>Customer Service Associate</p>
        </div>
      </li>
      <li>
        <div class="timeline-content">
          <h3 class="date">November 2007 - October 2009</h3>
          <h1>Genesis Healthcare</h1>
          <p>General Maintenance Technician</p>
        </div>
      </li>
    </ul>
  </div>
    <p className='resume-link'>
      Download Resume PDF:&nbsp;
    <span>
      <a href={ResumePdf} target="_blank" rel="noopener noreferrer">Here</a>
    </span>
    </p>  
</div>
    );
  }
  
  export default About;