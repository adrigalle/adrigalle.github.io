import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';


const NavBar = () => {

const location = useLocation();
return ( 
    <>
        {location.pathname !== '/' ? (
            <Navbar id="navbar" className={ styles.navbar } sticky="top" bg="light" expand="sm">

                <Navbar.Brand href="/" style={{ margin: "0 10px", padding: "0 0" }}>
                    <img src='/images/icons/Adrig-Logo.png' width={50} height={50}/>
                </Navbar.Brand>
 
                    <Nav className='me-auto' style={{ flexDirection: 'row'}}>

                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>

                    </Nav>

            </Navbar>

        ): (

            <Navbar id="navbar" className={ styles.navbar } sticky="top" bg="light" expand="sm">

                <Navbar.Brand href="/" style={{ margin: "0 10px", padding: "0 0" }}>
                    <img src='/images/icons/Adrig-Logo.png' width={50} height={50}/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ margin: "0 10px 0 auto", border: 'none', background: 'none', boxShadow: 'none' }} />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className='me-auto'>

                        <Nav.Link href="#top">Home</Nav.Link>
                        <Nav.Link href="#bio">Bio</Nav.Link>
                        <Link to="/projects">Projects</Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>

                    </Nav>

                </Navbar.Collapse>



            </Navbar>
        )}
        <a id="back-to-top" href="#top" className="btn fixed-bottom go-up btn-lg back-to-top" role="button" style={{ width:50, left:'auto', padding: '5px 15px 5px 10px', marginRight: "5px" }}>
            <img style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }} size="350px" src="../../images/icons/svg/Up.svg" />
        </a>

    </>
);
}
 
export default NavBar;


// how to use useLocation: https://www.educative.io/answers/how-to-use-the-uselocation-hook-in-react

{/* <nav className={ styles.navbar }>
                <h1>React Project App</h1>
                <div className={ styles.links }>
                    <Link to="/">Home</Link>
                    <a href='#intro'>About</a>
                    <Link to="/projects">Projects</Link>
                    <a href='#contact'>Contact</a>
                </div>
            </nav> */}