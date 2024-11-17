import whiteLogo from '../../assets/whitelogo.png';
import './footer.scss';

function Footer() {
  return (
    <footer>
      <div className="FooterContainer">
        <img src={whiteLogo} alt="logo" />
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;