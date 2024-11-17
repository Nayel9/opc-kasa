import { Link } from 'react-router-dom';
import pinkLogo from '../../assets/pinklogo.png';
import './header.scss';

function Header() {
  return (
    <header>
      <div className="BannerHeader">
        <img src={pinkLogo} alt="logo" className="pinkLogo"/>
        <nav className="NavBar">
          <Link to="/">Accueil</Link>
          <Link to="/propos">À propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
