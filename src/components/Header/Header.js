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
      </div>
    </div>
  );
};

export default Header;
