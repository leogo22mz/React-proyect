import React, { useEffect } from "react";
import "./toolbar.css";

function Toolbar() {
  //HREF HOME
  useEffect(() => {
    const buttonH = document.getElementById("buttonH");
    buttonH.addEventListener("click", buttonHome);
    return () => buttonH.removeEventListener("click", buttonHome);
  }, []);

  function buttonHome() {
    window.location.href = "/";
  }
  //HREF EXPLORE
  useEffect(() => {
    const buttonE = document.getElementById("buttonE");
    buttonE.addEventListener("click", buttonExplore);
    return () => buttonE.removeEventListener("click", buttonExplore);
  }, []);

  function buttonExplore() {
    window.location.href = "/explore";
  }
  //HREF UPLOAD
  useEffect(() => {
    const buttonU = document.getElementById("buttonU");
    buttonU.addEventListener("click", buttonUpload);
    return () => buttonU.removeEventListener("click", buttonUpload);
  }, []);

  function buttonUpload() {
    window.location.href = "/";
  }
  //HREF NOTIFICATION
  useEffect(() => {
    const buttonN = document.getElementById("buttonN");
    buttonN.addEventListener("click", buttonNotification);
    return () => buttonN.removeEventListener("click", buttonNotification);
  }, []);

  function buttonNotification() {
    window.location.href = "/center";
  }
  //HREF PROFILE
  useEffect(() => {
    const buttonP = document.getElementById("buttonP");
    buttonP.addEventListener("click", buttonProfile);
    return () => buttonP.removeEventListener("click", buttonProfile);
  }, []);

  function buttonProfile() {
      <button id="buttonP" className="button-profile"><a href="/profile">P</a></button>
    window.location.href = "/profile";
  }

  return (
    <div className="tool-bar">
      <button id="buttonH" className="button-home"></button>
      <button id="buttonE" className="button-explore"></button>
      <button id="buttonU" className="upload-button"></button>
      <button id="buttonN" className="button-notification"></button>
      <button id="buttonP" className="button-profile"></button>
    </div>
  );
}

export default Toolbar;
