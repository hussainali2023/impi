import React from "react";
import DocToPdf from "./Pages/DocToPdf/DocToPdf";
import ImgToPdf from "./Pages/ImgToPdf/ImgToPdf";
import PdfToImage from "./Pages/PdfToImg";
import SecPage from "./Pages/SecPage/SecPage";
import ThirPage from "./ThirPage/ThirPage";
import Footer from "./Pages/Footer/Footer";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div>
      <ImgToPdf />
      <SecPage />
      <div className=" mt-20">
        <ThirPage />
        <DocToPdf />
        {/* <PdfToImage /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
