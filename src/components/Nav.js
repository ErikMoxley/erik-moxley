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
                <Button variant="outline-dark">Home</Button>
            </Link>
            <Link to="/about">
                <Button variant="outline-dark">About</Button>
            </Link>
            <Link to="/projects">
                <Button variant="outline-dark">Projects</Button>
            </Link>
            <Link to="/Skills">
                <Button variant="outline-dark">Skills</Button>
            </Link>
            <Link to="/Blog">
                <Button variant="outline-dark">Blog</Button>
            </Link>
            <Link to="/Contact">
                <Button variant="outline-dark">Contact</Button>
            </Link>
</div></div>
  );
}

export default Nav;