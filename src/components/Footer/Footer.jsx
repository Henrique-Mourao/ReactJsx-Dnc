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
    <footer>
      <div className="container">
        <nav className="footer-main d-flex  jc-space-between">
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
          <div className="d-flex">
          <div className="footer-col">
            <h3>Pages</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
          <h3>Contact</h3>
          <p className="grey-1-color">R. Justino Cobra, 61 - Villa Ema | São José dos Campos - SP</p>
          <p className="grey-1-color">suporte@escoladnc.com.br</p>
          <p className="grey-1-color">(19) 99187 - 4342</p>
          <p className="grey-1-color"></p>
        </div>
        </div>
        </nav>
        <div className="footer-bottom d-flex jc-space-between footer-copy al-center">
          <p className="grey-1-color">© 2024 DNC Arquitetura. All rights reserved.</p>
          <div className="langs-area d-flex">
            <img src={BrasilLog} height="29px" alt="Português" />
            <img src={EUALog} height="29px" alt="English" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;