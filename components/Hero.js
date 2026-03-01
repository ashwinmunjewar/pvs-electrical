import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const shimmerEffect = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

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
    width: 46px;
    height: 46px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.45);
    transition: all 0.25s ease;
    
    &:before {
      font-size: 24px;
      color: #fff;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.35);
      transform: translateY(-1px);
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
  padding: 2.25rem;
`;

const SmallHeading = styled.h6`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.9rem;
  opacity: 0.95;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: #8bd5ff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  
  span {
    background: linear-gradient(135deg, #6fd3ff 0%, #3b82f6 50%, #a78bfa 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeaturesBox = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  margin: 1.5rem auto 0;
  border-radius: 999px;
  background: rgba(4, 21, 46, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    padding: 0.85rem 1.25rem;
    font-size: 0.85rem;
    border-radius: 16px;
  }
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
  background: linear-gradient(135deg, #1fb6ff 0%, #3f83f8 100%);
  color: #fff;
  font-weight: 500;
  border-radius: 999px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.45);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.35) 50%,
      transparent 100%
    );
    transition: none;
  }

  &:hover {
    background: linear-gradient(135deg, #35b3ff 0%, #5a98fb 100%);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(31, 182, 255, 0.35);

    &::after {
      animation: ${shimmerEffect} 0.75s ease forwards;
    }
  }

  &:active {
    transform: translateY(0);
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.8);
    
    &:hover {
      background: rgba(255, 255, 255, 0.16);
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

const heroSlides = [
  {
    heading: 'Welcome to P.S V Electricals',
    title: 'Transform Your Home with <span>Residential Solar Power</span>',
    subtitle:
      'Experience energy independence with custom-designed solar rooftop systems. Cut electricity bills by up to 90% while contributing to a sustainable future.',
    features: 'Premium Quality Panels \u00B7 Expert Installation \u00B7 25-Year Warranty \u00B7 Subsidy Assistance',
    primaryButton: 'Get a Free Consultation',
    secondaryButton: 'Calculate Savings',
    bgImage:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1950&q=80',
  },
  {
    heading: 'Commercial Solar Experts',
    title: 'Power Your Business with <span>Smart Solar Solutions</span>',
    subtitle:
      'Reduce operational costs and enhance your corporate sustainability. Our scalable solar systems for offices, factories, and industrial facilities deliver exceptional ROI.',
    features: 'Lower Energy Costs \u00B7 Tax Benefits \u00B7 Reduce Carbon Footprint \u00B7 Reliable Power Supply',
    primaryButton: 'Request Business Quote',
    secondaryButton: 'Our Services',
    bgImage:
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1950&q=80',
  },
  {
    heading: 'Join the Solar Revolution',
    title: 'Save Money While <span>Saving the Planet</span>',
    subtitle:
      'Generate your own clean energy and watch your electricity bills drop. With flexible financing options and government subsidies, solar has never been more affordable.',
    features: 'Zero Down Payment Options \u00B7 Government Subsidies \u00B7 Quick Installation \u00B7 24/7 Support',
    primaryButton: 'Start Your Solar Journey',
    secondaryButton: 'Why Choose Us',
    bgImage:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1950&q=80',
  },
];

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const secondaryTargets = {
    'Calculate Savings': 'contact',
    'Our Services': 'services',
    'Why Choose Us': 'why-choose-us',
  };

  return (
    <HeroSection id="home">
      <HeroSlider>
        <Slider {...sliderSettings}>
          {heroSlides.map((slide) => (
            <Slide key={slide.heading} bgImage={slide.bgImage}>
              <HeroContent>
                <SmallHeading>{slide.heading}</SmallHeading>
                <HeroTitle dangerouslySetInnerHTML={{ __html: slide.title }} />
                <HeroSubtitle>{slide.subtitle}</HeroSubtitle>
                <FeaturesBox>{slide.features}</FeaturesBox>
                <ButtonGroup>
                  <CTAButton href="#contact" onClick={(e) => scrollTo(e, 'contact')}>
                    {slide.primaryButton}
                  </CTAButton>
                  <CTAButton
                    href={`#${secondaryTargets[slide.secondaryButton] || 'contact'}`}
                    onClick={(e) => scrollTo(e, secondaryTargets[slide.secondaryButton] || 'contact')}
                    className="secondary"
                  >
                    {slide.secondaryButton}
                  </CTAButton>
                </ButtonGroup>
              </HeroContent>
            </Slide>
          ))}
        </Slider>
      </HeroSlider>
    </HeroSection>
  );
}


