import React from "react";
// import Logo from "";

const LogoAndMap = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className=" flex justify-center mb-4">
        {/* <img src={Logo} alt="" className=" h-16" /> */}
        <p className=" text-7xl font-extrabold">
          IM<span className=" text-orange-500">PI</span>
        </p>
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
