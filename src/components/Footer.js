import "../styles/Footer.css";

function Footer() {
  return (
      <footer className="footer">
    <div className="socials">
      <ul class="social-links">
          <li class="social-icons"><a class="twitter" rel="noopener noreferrer" target="_blank" href="https://twitter.com/MoxleyDev"></a></li>
          <li class="social-icons"><a class="github" rel="noopener noreferrer" target="_blank" href="https://github.com/ErikMoxley"></a></li>
          <li class="social-icons"><a class="linkedin" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/erickongkaew"></a></li>
          <li class="social-icons"><a class="polywork" rel="noopener noreferrer" target="_blank" href="https://www.polywork.com/erikmoxley"></a></li>
          <li class="social-icons"><a class="hashnode" rel="noopener noreferrer" target="_blank" href="https://hashnode.com/@MoxleyDev"></a></li>
          <li class="social-icons"><a class="instagram" rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/erik.moxley/"></a></li>
          <li class="social-icons"><a class="twitch" rel="noopener noreferrer" target="_blank" href="https://www.twitch.tv/ErikMoxley"></a></li>
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