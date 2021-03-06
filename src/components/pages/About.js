// import profileImg from "../../assets/images/newprofile.jpg"
import "../../styles/Content.css";

const About = () => {
    return (
      <div className="content">
        <header className="title">
          {/* <div class="circular--portrait">
            <img src={profileImg} alt=''/>
          </div> */}
        <p className="about-info">
        <h3>About Me</h3>
        Hello, my name is Erik and I currently live in the Greater Boston Area. 
        Born in Gloucester, MA. Some of my hobbies and passions include technology, 
        building and fixing PCs, gaming, fantasy sports, dining out, and watching 
        movies in theaters.
        <br/><br/>
        I have a strong sense of curiosity of how things work, a drive to succeed at 
        whatever is placed in front of me and a work ethic that compliments all of the above. 
        Computers have always been a passion of mine and in software development, 
        I truly believe can be the gateway towards expressing my passions and creativity. 
        My back has always been against the wall my entire life, and the desire to problem 
        solve, help people and show everyone that caring is my greatest strength will be all 
        of the motivation I'll have along the way.
        <br/><br/>
        My resume is filled with years of management and leadership experience in a Pharmacy 
        and Retail setting. Current languages, tools and technologies I use are HTML5, CSS3, 
        Sass, JavaScript, Bootstrap, ReactJS, NextJS, Git, GitHub, Command Line with 
        some exposure to Jira/Atlassian, Figma, Jquery, NodeJS, MongoDB, MySQL, Firebase and some backend development. 
        I currently deploy my web projects with GH-Pages, Netlify and Heroku. My next steps are to 
        explore uses of different API's and become well rounded in full-stack development 
        in the near future.
        </p>
        </header>
      </div>
    );
  }
  
  export default About;