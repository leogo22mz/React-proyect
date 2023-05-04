import Header from "../../components/header/Header";
import Toolbar from "../../components/Toolbar/toolbar";
import "./Profile.css";
function Profile() {
  return (
    <>
      <Header />
      <body>
        <div class="card">
          <img class="profile-pic" src="/assets/img/profile.png" alt="Descripción de la imagen"></img>
          <h1>Leonel Cruz Go</h1>
          <p class="title">This is your status</p>
          <p>This is your biography</p>
          <br></br>
          <p><button class="button-pro">Edit profile(WIP)</button></p>        
          </div>

      </body>

      <Toolbar />
    </>
  );
}

export default Profile;