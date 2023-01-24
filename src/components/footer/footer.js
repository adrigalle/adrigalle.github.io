import { Link, useLocation } from 'react-router-dom';
import Socials from '../socials';
import styles from './footer.module.css';

const Footer = () => {
const location = useLocation();
return ( 
    <>
            {location.pathname !== '/' ? (
                <div className={`${ styles.footer } rowToCol`}>
                    <Socials />
                    <div className={ styles.links }>
                        <Link to="/">Home</Link>
                        <Link to="/projects">All Projects</Link>
                    </div>
                </div>
            ): (
                <div className={`${ styles.footer } rowToCol`}>
                    <Socials />
                    <div className={ styles.links }>
                        <Link to="/">Home</Link>
                        <a href='#intro'>About</a>
                        <Link to="/projects/#top">Projects</Link>
                        <a href='#contact'>Contact</a>
                    </div>
                </div>
                
            )}

    </>
)}
 
export default Footer;