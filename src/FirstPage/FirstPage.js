import React from "react";
import impiLogo from "../assests/impi.png";

const FirstPage = () => {
  return (
    <div>
      <div className="mt-4 mb-4 ml-6">
        <img src={impiLogo} className=" w-8 md:w-10 h-8 md:h-10" alt="" />
        <p className=" text-xl font-extrabold">
          IM<span className=" text-orange-500">PI</span>
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
        <div className=" text-3xl md:text-6xl font-extrabold">
          <h1>
            Powerful Image to PDF <br />
          </h1>
          Tools&nbsp;
          <span className="">
            Made <span className="text-orange-500">Simple</span>
          </span>
        </div>

        <p className="text-lg md:text-xl font-light mt-8">
          {/* <strong>IMPI</strong> was built with you in mind. Say goodbye to
          complicated <br />
          software & hello to easy-to-use PDF tools. Convert Image to pdf <br />{" "}
          your documents in just a few clicks.
          <br /> <br /> */}
          <span>
            Convert JPEG or PNG images to PDF without uploading your sensitve
            data anywhere.
            <br />
            Files are processed entirely on your device and does not get
            uploaded to any server.
          </span>
        </p>
      </div>
    </div>
  );
};
export default FirstPage;
