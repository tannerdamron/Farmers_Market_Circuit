import React from 'react';

function Header() {
  return(
    <div>
      <style jsx>{`
        .header {
          color: #78D565;
          text-align: center;
          font-size: 50px;
          text-shadow: 1px 1px black;
        },
        .text {
          color: #78D565;
          text-align: center;
          text-shadow: .5px .5px black;
          font-size: 30px;
        }
      `}</style>
      <h1 className="header">Avery's Organics</h1>
      <h3 className="text">Avery's Organics is a mid-sized farm in Northern Oregon that grows organic produce, and sells it at Farmer's Markets throughout town.</h3>
    </div>
  );
}

export default Header;