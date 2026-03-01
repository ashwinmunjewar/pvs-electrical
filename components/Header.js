import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.scrolled ? '#fff' : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  color: ${props => props.scrolled ? '#1f2937' : '#ffffff'};
  
  img, svg {
    height: 52px;
    width: auto;
    transition: filter 0.3s ease;
    /* Keep white logo on hero, switch to dark logo on white header */
    filter: ${props => props.scrolled ? 'brightness(0) saturate(100%)' : 'none'};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: ${props => props.menuOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    gap: 1rem;
  }
`;

const NavLink = styled.li`
  a {
    color: ${props => props.scrolled ? '#333' : '#fff'};
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    
    &:hover {
      color: #4A90E2;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.scrolled ? '#333' : '#fff'};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${targetId}`);
    }
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo scrolled={scrolled} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <img 
            src="/images/logo.svg" 
            alt="CR Enterprise Logo" 
          />
        </Logo>
        <NavLinks menuOpen={menuOpen}>
          <NavLink scrolled={scrolled}>
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home</a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')}>Why Choose Us</a>
          </NavLink>
          <NavLink scrolled={scrolled}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </NavLink>
        </NavLinks>
        <MenuToggle scrolled={scrolled} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </MenuToggle>
      </Nav>
    </HeaderContainer>
  );
}
