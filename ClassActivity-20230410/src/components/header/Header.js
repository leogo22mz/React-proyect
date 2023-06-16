import "./Header.css";

function Header() {
  return (
    <div className="top-bar">
      <img src="/assets/img/logo.png" alt="Descripion de imagen" className= "header-small"></img>
      <img src="/assets/img/logo_small.png" alt="Descripion de imagen" className= "header-title"></img>
    </div>
  );
}

export default Header;