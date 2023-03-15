import React from "react";

const PdfToImg = () => {
  return (
    <div className=" bg-yellow-400">
      <form
        action="/converttoimage"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Upload PDF file</label>
        <br />
        <div>
          <input type="file"></input>
        </div>
        <br />
        <button type="submit">Extract All Images</button>
      </form>
    </div>
  );
};

export default PdfToImg;
