import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <br /><br /><br /><br />
      <div className="menu">
        <button id="button-I" className="button-ig"></button>
        <button id="button-T" className="button-tw"></button>
        <button id="button-F" className="button-fb"></button>
        <button id="button-Y" className="button-yt"></button>
        <button id="button-R" className="button-rss"></button>
      </div>
      <br />
      <p className="footerinfo">&copy;2023 Leonel Cruz Go</p>
      <p className="footerinfo">Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta</p>
      <br /><br /><br /><br />
    </footer>
  );
}
export default Footer;