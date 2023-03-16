import React from "react";
// import Logo from "";
import impiLogo from "../../assests/impi.png";

const LogoAndMap = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className=" flex justify-center my-auto mb-4">
        <div className=" my-auto">
          <img src={impiLogo} className="w-12 h-12" alt="" />
          <p className=" text-xl text-center font-extrabold">
            IM<span className=" text-orange-500">PI</span>
          </p>
        </div>
      </div>
      <div>
        {/* <iframe
          style={{ width: "90%", height: "28vh" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Kolkata&t=&z=10&ie=UTF8&iwloc=&output=embed"
        ></iframe> */}
      </div>
    </div>
  );
};

export default LogoAndMap;
