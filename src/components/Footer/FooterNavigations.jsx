import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

import { fetchData } from "../../assets/controllers/utilities";
import VNavLinks from "../VNavLinks";

function FooterNavigations() {

  const [shopLinks, setShopLinks] = useState(0);
  const [appleWalletLinks, setAppleWalletLinks] = useState(0);
  const [accountLinks, setAccountLinks] = useState(0);
  const [entertainmentLinks, setEntertainmentLinks] = useState(0);
  const [appleStoreLinks, setAppleStoreLinks] = useState(0);
  const [businessLinks, setBusinessLinks] = useState(0);
  const [educationLinks, setEducationLinks] = useState(0);
  const [healthecareLinks, setHealthcareLinks] = useState(0);
  const [governmentLinks, setGovernmentLinks] = useState(0);
  const [appleValuesLinks, setAppleValuesLinks] = useState(0);
  const [aboutAppleLinks, setAboutAppleLinks] = useState(0);

  useEffect( () =>{
    fetchData('/links/shopAndLearn.json', setShopLinks);
    fetchData('/links/appleWallet.json', setAppleWalletLinks);
    fetchData('/links/account.json', setAccountLinks);
    fetchData('/links/entertainment.json', setEntertainmentLinks);
    fetchData('/links/store.json', setAppleStoreLinks);
    fetchData('/links/business.json', setBusinessLinks);
    fetchData('/links/education.json', setEducationLinks);
    fetchData('/links/healthcare.json', setHealthcareLinks);
    fetchData('/links/government.json', setGovernmentLinks);
    fetchData('/links/appleValues.json', setAppleValuesLinks);
    fetchData('/links/about.json', setAboutAppleLinks);
    
  }, []);

  return <div className="py-3 p-0 m-0 bg-light text-danger w-100 d-flex justify-content-around align-items-start flex-wrap">
      <div className="m-0 p-0">
        <VNavLinks links={shopLinks} />
        <VNavLinks links={appleWalletLinks} />
      </div>
      <div className="m-0 p-0">
        <VNavLinks links={accountLinks} />
        <VNavLinks links={entertainmentLinks} />
      </div>
      <div className="m-0 p-0">
        <>
        <VNavLinks links={appleStoreLinks} />
        </>
      </div>
      <div className="m-0 p-0">
        <VNavLinks links={businessLinks} />
        <VNavLinks links={educationLinks} />
        <VNavLinks links={healthecareLinks} />
        <VNavLinks links={governmentLinks} />
      </div>
      <div className="m-0 p-0">
        <VNavLinks links={appleValuesLinks} />
        <VNavLinks links={aboutAppleLinks} />
      </div>
    </div>;
}

export default FooterNavigations;
