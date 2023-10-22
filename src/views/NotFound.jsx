import React from "react";
import imgNabar from "../assets/18514975-ai.svg";
const NotFound = ({message}) => {
  return (
    <>
   
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column"> 
        <div className="d-flex align-items-center mt-5"><h1>{message}</h1></div>
        <img src={imgNabar} className="img404">
          
        </img>
     
      </div>
      </div>
    </>
  );
};

export default NotFound;
