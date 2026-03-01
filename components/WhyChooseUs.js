import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const WhyChooseSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
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
    margin-bottom: 1rem;
    color: #333;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ProgressBarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProgressBarItem = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || 0}s;
  
  h4 {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 0.75rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e8e8e8;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4A90E2 0%, #357ABD 100%);
  width: ${props => props.percentage}%;
  transition: width 2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const ProgressPercentage = styled.span`
  font-weight: 700;
  color: #4A90E2;
  font-size: 1.1rem;
  min-width: 45px;
  text-align: right;
  transition: color 0.3s ease;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || 0}s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(74, 144, 226, 0.15);
    border-color: #4A90E2;
  }
`;

const FeatureImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${FeatureCard}:hover & img {
    transform: scale(1.15);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(74, 144, 226, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${FeatureCard}:hover &::after {
    opacity: 1;
  }
`;

const FeatureContent = styled.div`
  padding: 2rem;
  position: relative;
`;

const FeatureIcon = styled.div`
  position: absolute;
  top: -30px;
  left: 2rem;
  width: 50px;
  height: 50px;
  background-color: #4A90E2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  transition: all 0.3s ease;
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  
  svg {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 6px 16px rgba(74, 144, 226, 0.4);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
  margin-top: 1rem;
  transition: color 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: #4A90E2;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  pointer-events: none;
  z-index: 0;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, #4A90E2 0%, transparent 70%);
    animation: ${pulse} 4s ease-in-out infinite;
  }
  
  &::before {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    bottom: 10%;
    right: 10%;
    animation-delay: 2s;
  }
`;

const progressItems = [
  { title: 'Experienced Solar Experts', percentage: 100 },
  { title: 'High-Quality Material', percentage: 100 },
  { title: 'End-to-End Service', percentage: 100 },
  { title: 'Transparent Process', percentage: 100 }
];

const features = [
  {
    title: 'Residential Rooftop Projects',
    description: 'Reliable solar systems for homes and villas',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/whyus-1.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
      </svg>
    )
  },
  {
    title: 'Commercial Solar Installations',
    description: 'Cost-saving energy solutions for businesses',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/whyus-2.jpg',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    )
  }
];

function ProgressBarComponent({ title, percentage, delay = 0 }) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  const animateCounter = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = percentage / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setDisplayPercentage(percentage);
        clearInterval(timer);
      } else {
        setDisplayPercentage(Math.floor(current));
      }
    }, stepDuration);
  };

  return (
    <ProgressBarItem ref={ref} delay={delay}>
      <h4>
        {title}
        <ProgressPercentage>{displayPercentage}%</ProgressPercentage>
      </h4>
      <ProgressBar>
        <ProgressFill percentage={isVisible ? percentage : 0} />
      </ProgressBar>
    </ProgressBarItem>
  );
}

export default function WhyChooseUs() {
  return (
    <WhyChooseSection id="why-choose-us">
      <AnimatedBackground />
      <SectionHeader>
        <h3>Why Choose Us</h3>
        <h2>Best Solution For Your Solar Energy</h2>
        <p>
          <strong>Expert solar solutions with premium quality, transparent pricing, complete service, cost savings, and reliable 24×7 support.</strong>
        </p>
      </SectionHeader>
      
      <ProgressBarsContainer>
        {progressItems.map((item, index) => (
          <ProgressBarComponent
            key={index}
            title={item.title}
            percentage={item.percentage}
            delay={index * 0.1}
          />
        ))}
      </ProgressBarsContainer>

      <SectionHeader>
        <h2>Providing Solar Energy Solutions</h2>
      </SectionHeader>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index} delay={index * 0.15}>
            <FeatureImage>
              <img src={feature.image} alt={feature.title} />
            </FeatureImage>
            <FeatureContent>
              <FeatureIcon delay={index * 0.2}>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </WhyChooseSection>
  );
}
