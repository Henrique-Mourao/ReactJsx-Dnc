import { Link } from "react-router-dom";

// ASSETS
import './Footer.css'
import BrasilLog from "../../assets/brasil.svg";
import EUALog from "../../assets/EUA.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Facebook from "../../assets/Facebook.svg";
import Xs from "../../assets/X.svg";
import Logo from "../../assets/dnc-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main d-flex al-center jc-space-between">
          <div className="footer-logo-col">
            <img src={Logo} alt="DNC Logo" />
            <p className="grey-1-color">
              A escola que prepara você para as profissões em alta no mercado de trabalho.
            </p>
            <div className="social-links d-flex">
              <a href="https://www.instagram.com/dncarqmourao/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/company/dncarqmourao/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/dncarqmourao/" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://twitter.com/dncarqmourao/" target="_blank" rel="noreferrer">
                <img src={Xs} alt="X" />
              </a>
            </div>
          </div>
          <nav className="footer-col">
            <h3>Pages</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom d-flex jc-space-between al-center">
          <p className="grey-1-color">© 2024 DNC Arquitetura. All rights reserved.</p>
          <div className="langs-area d-flex">
            <img src={BrasilLog} alt="Português" />
            <img src={EUALog} alt="English" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;