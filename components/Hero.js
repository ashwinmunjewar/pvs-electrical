import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSlider = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  .slick-slide {
    height: 100vh;
  }
  
  .slick-dots {
    bottom: 30px;
    z-index: 10;
    
    li button:before {
      color: #fff;
      font-size: 12px;
    }
    
    li.slick-active button:before {
      color: #4A90E2;
    }
  }
  
  .slick-prev,
  .slick-next {
    z-index: 10;
    width: 50px;
    height: 50px;
    
    &:before {
      font-size: 40px;
      color: #fff;
    }
  }
  
  .slick-prev {
    left: 30px;
  }
  
  .slick-next {
    right: 30px;
  }
`;

const Slide = styled.div`
  height: 100vh;
  background: linear-gradient(135deg, rgba(15, 52, 96, 0.95) 0%, rgba(30, 90, 150, 0.95) 100%);
  display: flex !important;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 52, 96, 0.92) 0%, rgba(30, 90, 150, 0.92) 100%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  text-align: center;
  color: #fff;
  z-index: 2;
  position: relative;
  padding: 2rem;
`;

const SmallHeading = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.9;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: #4A90E2;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroCTA = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2rem 0;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  display: inline-block;
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

  &:active {
    transform: translateY(0);
  }
  
  &.secondary {
    background-color: transparent;
    color: #fff;
    border-color: rgba(255, 255, 255, 0.8);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: #fff;
    }
  }
`;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: 'linear',
  pauseOnHover: true,
};

export default function Hero() {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <HeroSlider>
        <Slider {...sliderSettings}>
          <Slide>
            <HeroContent>
              <SmallHeading>Welcome to PR Electricals</SmallHeading>
              <HeroTitle>
                PR Electricals – Powering a Greener Future with <span>Solar Energy.</span>
              </HeroTitle>
              <HeroSubtitle>
                <strong>PR ELECTRICALS</strong> Power your world with smart solar. From custom design to expert installation and ongoing care, we make going solar effortless—and worth it.
              </HeroSubtitle>
              <HeroCTA>
                <strong>Join the Solar Revolution — Save on Electricity, Reduce Your Carbon Footprint, and Generate Your Own Power!</strong>
              </HeroCTA>
              <ButtonGroup>
                <CTAButton href="#contact" onClick={handleCTAClick}>
                  Get a Free Consultation
                </CTAButton>
                <CTAButton href="#contact" onClick={handleCTAClick} className="secondary">
                  Contact Now
                </CTAButton>
              </ButtonGroup>
            </HeroContent>
          </Slide>
        </Slider>
      </HeroSlider>
    </HeroSection>
  );
}
