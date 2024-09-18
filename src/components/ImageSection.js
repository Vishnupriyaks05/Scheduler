// src/components/ImageSection.js

import React from "react";
import shedule from "../images/shedule.jpg"; 

const ImageSection = () => {
  return (
    <div className="d-none d-md-block p-0">
      <img
        src={shedule}
        alt="Shedule"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"  // Ensures the image covers the entire area
        }}
      />
    </div>
  );
};

export default ImageSection;
