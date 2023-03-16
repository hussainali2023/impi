import React from "react";
import NewsLetter from "./NewsLetter";
import LogoAndMap from "./LogoAndMap";
import UsefulLinks from "./UsefulLinks";
import MyAccount from "./MyAccount";
import Company from "./Company";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <div>
      {/* <NewsLetter /> */}
      <div className=" px-2 md:px-16 grid grid-cols-2 md:grid-cols-4 bg-slate-100">
        <LogoAndMap />
        <UsefulLinks />
        <MyAccount />
        <Company />
      </div>
      <Bottom />
    </div>
  );
};

export default Footer;
