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
      <img src="/assets/img/logo.png" alt="Descruocuib de imagen" className= "toolbar-title"></img>
      <button id="buttonH" className="button-home"><h1 className="home-h1">Home</h1></button>
      <button id="buttonE" className="button-explore"><h1 className="explore-h1">Explore</h1></button>
      <button id="buttonU" className="upload-button"><h1 className="upload-h1">Upload</h1></button>
      <button id="buttonN" className="button-notification"><h1 className="notification-h1">Notifications</h1></button>
      <button id="buttonP" className="button-profile"><h1 className="profile-h1">Profile</h1></button>
    </div>
  );
}

export default Toolbar;
