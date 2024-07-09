import { useState, useEffect } from 'react';
import {Navbar, Container} from 'react-bootstrap';

export const Nav = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState('false');
useEffect(() => {
    const onScroll = () =>{
        if (window.scrollY > 50) {
            seScrolled(true);
        } else {
            seScrolled(false);
        }
    }
    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">Anuoluwapo Oyebanji</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>                
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink ('home')}>Home</Nav.Link>
                        <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink ('about')}>About</Nav.Link>
                        <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                        onClick={() => onUpdateActiveLink ('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icons'>
                            <a href='#'><img src='' alt=''/></a>
                            <a href='#'><img src='' alt=''/></a>
                            <a href='#'><img src='' alt=''/></a>
                            <a href='#'><img src='' alt=''/></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Nav;