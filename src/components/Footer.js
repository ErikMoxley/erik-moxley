import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
      <footer className="footer">
    <div className="socials">
        Social Media
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