import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <p className="footer-description">
        Ecommerce created during Wizeline’s Academy React Bootcamp
      </p>
      <div class="footer-left">
        <p class="footer-links">
          <a class="link-1" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </p>

        <p>Zap Store &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
