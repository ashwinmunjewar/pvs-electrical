import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  &:first-child {
    flex: 1;
    margin-top: 3rem;
  }
  
  &:last-child {
    flex: 1.2;
  }
`;

const ContentContainer = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #666;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const AboutText = styled.div`
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1rem;
    
    strong {
      color: #333;
    }
  }
  
  ul {
    margin-top: 1.5rem;
    list-style: none;
    
    li {
      padding: 0.5rem 0;
      color: #666;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.8;

      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: #4A90E2;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
`;

const IconList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  list-style: none;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #333;
    font-weight: 500;
    
    i {
      color: #4A90E2;
      font-size: 1.2rem;
    }
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.875rem 2rem;
  background-color: #4A90E2;
  color: #fff;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid #4A90E2;

  &:hover {
    background-color: #357ABD;
    border-color: #357ABD;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`;

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <ImageContainer>
          <AboutImage>
            <img 
              src="https://crwenterprise.in/wp-content/uploads/2024/03/about-2.jpg" 
              alt="About P.S.V Electricals" 
            />
          </AboutImage>
          <AboutImage>
            <img 
              src="https://crwenterprise.in/wp-content/uploads/2024/03/about-1.jpg" 
              alt="Solar Solutions" 
            />
          </AboutImage>
        </ImageContainer>
        <ContentContainer>
          <h3>About us</h3>
          <h2>About P.S.V Electricals</h2>
          <AboutText>
            <p>
              P.S.V Electricals, established in <strong>2025</strong> and headquartered in <strong>Wardha-Nagpur</strong><strong>, Maharashtra</strong>, is a leading solar energy provider in India offering premium solar solutions for residential, commercial, and government projects. We are committed to sustainability, innovation, and customer success.
            </p>
            <p>Our expertise includes:</p>
            <ul>
              <li>Ready to use solar project design & installation</li>
              <li>Solar inverter setup & battery integration</li>
              <li>Solar panel financing & subsidy support</li>
              <li>24×7 customer support & maintenance services</li>
            </ul>
          </AboutText>
          <IconList>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Solar Design & Installation</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Inverter & Battery Solutions</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>Financing & Subsidy Support</span>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <span>24×7 Service & Maintenance</span>
            </li>
          </IconList>
          <CTAButton href="#services">
            About Services
          </CTAButton>
        </ContentContainer>
      </AboutContainer>
    </AboutSection>
  );
}
