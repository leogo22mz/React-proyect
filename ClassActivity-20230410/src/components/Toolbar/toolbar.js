import "./toolbar.css";
function Toolbar() {
  return (
    <div className="tool-bar">

      <button class="button-home"><a class="button-a" href="/">H</a></button>
      <button class="button-explore"><a href="/explore">E</a></button>
      <button class="upload-button" ><a class="upload-button-a">U</a></button>
      <button class="button-notification"><a href="/center">C</a></button>
      <button class="button-profile"><a href="/profile">P</a></button>
    </div>
  );}
  export default Toolbar;