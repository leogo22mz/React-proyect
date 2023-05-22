import Header from "../../components/header/Header";
import Toolbar from "../../components/Toolbar/toolbar";
import Footer from "../../components/footer/Footer";

import "./Profile.css";
function Profile() {
  return (
    <>
      <Header />
      <body>
        <div className="card">
          <img className="profile-pic" src="/assets/img/profile.png" alt="Descripción de la imagen"></img>
          <h1>Leonel Cruz Go</h1>
          <p className="title">This is your status</p>
          <p>This is your biography</p>
          <br></br>
          <p><button className="button-pro">Edit profile(WIP)</button></p>
        </div>

      </body>
      <Footer />
      <Toolbar />
    </>
  );
}

export default Profile;