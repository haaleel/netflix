import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Popups.css";

import requests from "./requests";

function Popups({btnclose}) {
  


 


  return (
    // <div className="popupscreens"> 
    <div className="popupscreen"> 


      <div className="popbox">   
       <button onClick={btnclose} className="btn">hihi</button>
        <div className="header">
        
        
        <h3 className="banner__description"> </h3></div>
       
        <h2>popup</h2>
      
      </div>
      
    </div>
  );
}
export default Popups;
