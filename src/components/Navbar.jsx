import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div>
    <style jsx>{`
      .nav {
      }
      .buttons {
        margin-left: 155px;
        padding: 10px 10px 10px 10px;
        width: 100px;
      }
      .buttons:hover {
        cursor: pointer;
      }
    `}</style>
      <div>
        <nav className="nav">
        <Link to="/"><button className="buttons">Home</button></Link>
        <Link to="/about"><button className="buttons">About Us</button></Link>
        <Link to="/contact"><button className="buttons">Contact</button></Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;