import {
  faFileCircleCheck,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ThirPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className=" bg-slate-100 py-16 md:px-36 md:flex md:flex-nowrap flex-wrap">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className=" flex bg-white py-6 md:px-10 rounded-l-lg"
      >
        <div className="mr-4">
          <FontAwesomeIcon
            icon={faFilePdf}
            className=" h-10 w-10 md:w-16 md:h-16"
          />
        </div>
        <div>
          <h1 className=" text-xl font-normal mb-4">
            Convert hundreds of JPG to PDF
          </h1>
          <p className=" font-extralight">
            You are at the right place if you require to convert hundreds of
            JPGs to pdfs. Drag and drop images or photos and convert them to
            PDF. You can convert up to 150 images to PDF in a single conversion.
            Moreover, combine PDF output files to create a PDF photo album.{" "}
            <br />
            <br />
            Easily upload images and photos from your Dropbox or Google Drive
            accounts and quickly convert to PDF format. You can even convert
            multiple formats like PNG to PDF or JPG to PDF in a single step.
            Powerful online image converter to convert your photos or
            screenshots.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className=" flex bg-white p-2 md:p-10 rounded-r-lg"
      >
        <div className="mr-4 ">
          <FontAwesomeIcon
            icon={faFileCircleCheck}
            className="md:w-16 md:h-16 w-10 h-10"
          />
        </div>
        <div>
          <h1 className=" text-xl font-normal mb-4">
            Great Quality PDFs from Images
          </h1>
          <p className=" font-extralight">
            We ensure all PDFs generated from your images are flawless with zero
            data loss. There is absolute retention of the image quality, like
            that of the source picture or photo, while converting to PDF. The
            image format can be JPG or PNG for conversion, the experience of
            seeing the end result is much similar, paying attention to the
            quality of the pdf created.
            <br /> <br />
            Convert photos, screenshots, or images to PDF from your mobile
            devices with PDF4me. Our features are designed to get along with all
            popular mobile browsers. Thereby ensuring quality PDF conversions
            online. The right choice to convert images online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirPage;
