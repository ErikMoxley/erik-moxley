import "../styles/Footer.css";
import Twitter from "../assets/images/twitter.png";
import Github from "../assets/images/github.png";
import LinkedIn from "../assets/images/linkedin.png";
import Polywork from "../assets/images/polywork.png";
import Hashnode from "../assets/images/hashnode.png";
import Instagram from "../assets/images/instagram.png";
import Twitch from "../assets/images/twitch.png";

function Footer() {
  return (
      <footer className="footer">
    <div className="socials">
      <ul class="social-links">
          <li class="social-icons"><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/MoxleyDev"><img src={Twitter} alt=""/></a></li>
          <li class="social-icons"><a class="github" rel="noopener noreferrer" target="_blank" href="https://github.com/ErikMoxley"><img src={Github} alt=""/></a></li>
          <li class="social-icons"><a class="linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/erickongkaew"><img src={LinkedIn} alt=""/></a></li>
          <li class="social-icons"><a class="polywork" rel="noopener noreferrer" target="_blank" href="https://www.polywork.com/erikmoxley"><img src={Polywork} alt=""/></a></li>
          <li class="social-icons"><a class="hashnode" rel="noopener noreferrer" target="_blank" href="https://hashnode.com/@MoxleyDev"><img src={Hashnode} alt=""/></a></li>
          <li class="social-icons"><a class="instagram" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/erik.moxley/"><img src={Instagram} alt=""/></a></li>
          <li class="social-icons"><a class="twitch" rel="noopener noreferrer" target="_blank" href="https://www.twitch.tv/ErikMoxley"><img src={Twitch} alt=""/></a></li>
      </ul>
      Content Made With: ReactJS, NPM, Javascript, CSS, Netlify CMS
    </div>
<div className="footer-copyright">
    <container>
    &copy; {new Date().getFullYear()} Copyright: {"Erik Moxley"}
    </container>
</div>
</footer>
  );
}

export default Footer;