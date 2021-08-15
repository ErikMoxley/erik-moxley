import React from "react";
import "../styles/Content.css";

const Content = () => {
    return (
      <div className="App">
        <header className="title">
          <p>
            Hello, I'm Erik Moxley <br />
            Aspiring Web / Software Developer
          </p>
        <div className="links">
            <ul>
                <li>
                    About
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
        </header>
      </div>
    );
  }
  
  export default Content;