import "./styles/Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 id="h11">LearnIt</h1>
      <form className="buttons">
        <input type="button" value="Library" className="buttonsheader" />
        <input type="button" value="My Course" className="buttonsheader" />
        <input
          type="image"
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
          height="30px"
          width="30px"
          alt="search"
          className="buttonsheader"
          id="search"
        />
        <input
          type="image"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png"
          height="30px"
          width="30px"
          alt="bell"
          className="buttonsheader"
          id="bell"
        />
        <input
          type="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          height="30px"
          width="30px"
          alt="burger"
          className="buttonsheader"
          id="burger"
        />
      </form>
    </div>
  );
}
export default Header;
