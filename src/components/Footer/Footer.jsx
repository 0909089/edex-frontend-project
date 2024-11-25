import React from "react";
import { Link } from "react-router-dom";
import FooterNavigations from "./FooterNavigations";

import "./Footer.css";

function Footer() {
  const textStyle = {
    color: "var(--text-secondary-color)",
    fontSize: "13px"
  };

  const links = [
    {
      id: 0,
      name: "privacy policy",
      link: "https://www.apple.com/legal/privacy/"
    },
    {
      id: 1,
      name: "terms of use",
      link: "https://www.apple.com/legal/internet-services/terms/site.html"
    },
    {
      id: 2,
      name: "sales and refunds",
      link: "https://www.apple.com/us/shop/goto/help/sales_refunds"
    },
    {
      id: 3,
      name: "legal",
      link: "https://www.apple.com/legal/"
    },
    {
      id: 4,
      name: "github",
      link: "https://www.apple.com/sitemap/"
    }
  ];

  return (
    <div className="footer d-flex justify-content-center align-items-center flex-column w-100 pt-2 bg-light">
      <div className="wrapper" style={{ borderTop: "1px solid #cccccc" }}>
        <div className="navigation-links">
          <FooterNavigations />
        </div>

        <div
          className="d-flex w-100 justify-content-between align-items-center py-2"
          style={{ borderTop: "1px solid #cccccc", width: "fit-content" }}
        >
          <p style={textStyle}>
            Copyright &copy; 2024 Apple Inc. All rights reserved.
          </p>
          <nav className="">
            <ul
              className="list-unstyled  d-flex justify-content-between"
              style={{ fontSize: "14px" }}
            >
              {links.map(item =>
                <li
                  key={item.id}
                  className={`me-2 pe-2`}
                  style={
                    (item.id == links.length - 1 ? "" : "pe-2")
                      ? { borderRight: "1px solid #cccccc" }
                      : {}
                  }
                >
                  <Link
                    className="text-decoration-none text-capitalize text-dark"
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <p
            className="location"
            style={{
              ...textStyle,
              color: "var(--text-primaru-color) !important"
            }}
          >
            Made by Madhan M with &#x2764;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
