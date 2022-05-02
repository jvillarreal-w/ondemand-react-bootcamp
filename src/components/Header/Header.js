import "./Header.css";

const Header = (props) => {
  const { showHomePage } = props;

  return (
    <div className="header">
      <a href="#default" onClick={() => showHomePage()} className="logo">
        Zap Store
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <input type="text" placeholder="Search..."></input>
      </div>
      <a href="#cart" style={{fontWeight: "bold"}}>🛒</a>
    </div>
  );
};

export default Header;
