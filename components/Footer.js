import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 2rem 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    line-height: 1.8;
    color: #bdc3c7;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: #bdc3c7;
        transition: color 0.3s ease;
        text-decoration: none;
        
        &:hover {
          color: #4A90E2;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  a {
    width: 40px;
    height: 40px;
    background-color: #34495e;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ecf0f1;
    transition: all 0.3s ease;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      background-color: #4A90E2;
      color: #fff;
      transform: translateY(-3px);
    }
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  text-align: center;
  color: #95a5a6;
  font-size: 0.9rem;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>PR Electricals</h3>
          <p>
            Powering Sustainability, Building Excellence. Leading solar energy provider in India offering premium solar solutions for residential, commercial, and government projects.
          </p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-choose-us">Why Choose Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Services</h3>
          <ul>
            <li><a href="#services">Residential Solar Rooftop</a></li>
            <li><a href="#services">Commercial & Industrial</a></li>
            <li><a href="#services">Solar Inverter Setup</a></li>
            <li><a href="#services">Battery Storage Solutions</a></li>
            <li><a href="#services">Solar Maintenance</a></li>
            <li><a href="#services">Financing & Subsidy</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem', color: '#4A90E2' }}></i>
            Wardha-Nagpur, Maharashtra
          </p>
          <p>
            <i className="fas fa-phone-alt" style={{ marginRight: '0.5rem', color: '#4A90E2' }}></i>
            9765712208
          </p>
          <p>
            <i className="fas fa-envelope" style={{ marginRight: '0.5rem', color: '#4A90E2' }}></i>
            crwenterprise.in
          </p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {currentYear} PR Electricals. All rights reserved. | Powering Sustainability, Building Excellence</p>
      </FooterBottom>
    </FooterContainer>
  );
}
