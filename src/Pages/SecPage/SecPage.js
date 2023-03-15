import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faAward,
  faLock,
  faTrash,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "aos/dist/aos.css";

const SecPage = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 mx-3 md:mx-40 my-20 gap-10 text-center">
      <div data-aos="fade-right" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faLightbulb} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">Fast and easy conversion</h1>
        <p>
          You can drag and drop your JPG image into the toolbox above to quickly
          transform it into a PDF document. Various settings are available for
          you to adjust the format of the output file.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faAward} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">File protection guaranteed</h1>
        <p>
          We use SSL encryption to ensure that your images are entirely secure
          throughout the transfer. Nobody will have access to your files, which
          we will also erase after one hour of processing.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faThumbsUp} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">All platforms supported</h1>
        <p>
          Our online JPG to PDF converter is browser-based and functions
          independently from your OS. Because of this, you can freely access our
          application using a Mac, Windows or Linux.
        </p>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faLock} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">Add additional documents</h1>
        <p>
          After the initial file upload, there is also an option for you to add
          more images, in case you wish to save and combine multiple image files
          into one PDF with our online service.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faTrash} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">Files are automatically deleted</h1>
        <p>
          After using our JPG to PDF converter online, you’ll have three hours
          to download and save your converted PDF files. After three hours,
          we’ll automatically delete your files from our servers to ensure that
          your sensitive information remains safe.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <div className="flex justify-center mb-3">
          <FontAwesomeIcon icon={faScrewdriverWrench} className=" w-10 h-10" />
        </div>
        <h1 className=" font-semibold mb-1">
          Convert images to PDF from anywhere
        </h1>
        <p>
          If you have Internet access, you can use our image to PDF converter
          online free, so you can convert JPG into PDF anytime you need to. Our
          image to PDF converter supports any device and operating system,
          including Windows, Mac, and Linux.
        </p>
      </div>
    </div>
  );
};

export default SecPage;
