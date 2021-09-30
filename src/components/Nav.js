import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="navigation">
        <div className="links">
            <Link to="/">
                <Button className="btn" variant="dark">Home</Button>
            </Link>
            <Link to="/about">
                <Button className="btn" variant="dark">About</Button>
            </Link>
            <Link to="/projects">
                <Button className="btn" variant="dark">Projects</Button>
            </Link>
            <Link to="/skills">
                <Button className="btn" variant="dark">Skills</Button>
            </Link>
            <Link to="/resume">
                <Button className="btn" variant="dark">Resume</Button>
            </Link>
            <Link to="/contacts">
                <Button className="btn" variant="dark">Contact</Button>
            </Link>
</div></div>
  );
}

export default Nav;