import React from "react";
import { Link } from "react-router-dom";
import appleLogo from "../assets/images/apple-logo.png";
import specialistLogo from "../assets/images/Specialist.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faPlaneDeparture
} from "@fortawesome/free-solid-svg-icons";

function HelpSectionCard({ avatar, question, link }) {
  return <div className="d-flex justify-content-center align-items-center w-100 mt-2">
      <img src={avatar} alt="" className="img-fluid rounded-circle m-2" width={28} />
      <div>
        <h6 className="question-title fw-normal" style={{ fontSize: "14px" }}>
          {question}<br/>
          <span className="fw-regular">
            {link}
          </span>
        </h6>
      </div>
    </div>;
}

function HelpSection() {
  return (
    <div className="p-2 px-3 bg-trasparent" style={{ width: "max-content" }}>
      <HelpSectionCard
        avatar={specialistLogo}
        question={"Need shopping help?"}
        link={
          <Link>
            <span>
              Ask a Specialist{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{
                  transform: "rotate(-45deg)"
                }}
              />
            </span>
          </Link>
        }
      />
      <HelpSectionCard
        avatar={appleLogo}
        question={"Visit and Apple Store"}
        link={
          <Link>
            <span>Find one near you &gt;</span>
          </Link>
        }
      />
    </div>
  );
}

export default HelpSection;
