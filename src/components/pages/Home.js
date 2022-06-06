import profileImg from "../../assets/images/profile.jpg"
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
          Web / Software Developer <br />
          Greater Boston, Massachusetts
        </p>
        </header>
      </div>
    );
  }
  
  export default Home;