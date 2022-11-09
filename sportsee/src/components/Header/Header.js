import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.scss';

function Header(){

    return(
        <header className='header-container'>
            <img className='header-logo' src={logo} alt="runner"/>
            <nav className='header-nav'>
                <Link to='/'>Accueil</Link>
                <Link to='/'>Profil</Link>
                <Link to='/'>Réglages</Link>
                <Link to='/'>Communauté</Link>
            </nav>
        </header>
    )
}

export default Header