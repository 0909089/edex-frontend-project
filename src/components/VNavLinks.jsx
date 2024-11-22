import React, { useState } from "react";
import { Link } from "react-router-dom";

function VNavLinks({ links }) {

  const linkStyle = {
    textDecoration: "none",
    fontWeight: "normal",
    fontSize: "0.8rem",
    color: 'var(--text-secondary-color)',
    margin:'0 !important',
    padding:'0 !important'
  };

  return (
    Object.entries(links).map(([cat, items]) => (
      <div className="d-flex justify-content-start align-items-start text-dark flex-column">
        <>
          <h4 key={cat} className="h6 fw-semibold" style={{fontSize:'0.9rem'}}>{cat}</h4>
          <ul className="list-unstyled pe-3">
              {items.map((item, index) =>
                  <li key={item.id} title={item.name}>
                  <Link to={item.route} className="linkStyle">
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          
        </>
        </div>
        ))
      );
    }

//  <li>
//    <Link to={"/route"} style={linkStyle}>
//      Link{" "}
//    </Link>
//  </li>;
export default VNavLinks;
