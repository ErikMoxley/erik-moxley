import profileImg from "../../assets/images/newprofile.jpg"
import "../../styles/Content.css";

const About = () => {
    return (
      <div className="content">
        <header className="title">
          <div class="circular--portrait">
            <img src={profileImg} alt=''/>
          </div>
        <p>
          About
        </p>
        </header>
      </div>
    );
  }
  
  export default About;