import profileImg from "../../assets/images/newprofile.jpg"
import "../../styles/Content.css";

const Home = () => {
    return (
      <div className="content">
        <header className="title">
          <div class="circular--portrait">
            <img src={profileImg} alt=''/>
          </div>
        <p>
          Hello, I'm Erik <br />
          Aspiring Web / Software Developer
        </p>
        </header>
      </div>
    );
  }
  
  export default Home;