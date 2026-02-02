import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServicesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
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
`;

const ServicesSlider = styled.div`
  .slick-slide {
    padding: 0 15px;
  }
  
  .slick-dots {
    bottom: -50px;
    
    li button:before {
      color: #4A90E2;
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
      color: #333;
    }
    
    &:hover:before {
      color: #4A90E2;
    }
  }
  
  .slick-prev {
    left: -60px;
  }
  
  .slick-next {
    right: -60px;
  }
  
  @media (max-width: 1200px) {
    .slick-prev {
      left: -30px;
    }
    
    .slick-next {
      right: -30px;
    }
  }
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    border-color: #e0e0e0;
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #4A90E2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.3;
  
  a {
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #4A90E2;
    }
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
  flex: 1;
`;

const services = [
  {
    icon: '🔋',
    title: 'Residential Solar Rooftop Systems',
    description: 'Efficient solar systems for homes that reduce electricity bills and increase energy independence.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-1.jpg'
  },
  {
    icon: '🏢',
    title: 'Commercial & Industrial Solar',
    description: 'Scalable solar solutions for businesses — from offices to factories — cutting operational energy costs',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-2.jpg'
  },
  {
    icon: '⚡',
    title: 'Solar Inverter Setup & Integration',
    description: 'Enhancing solar power conversion with reliable inverter systems that ensure optimum performance.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-3.jpg'
  },
  {
    icon: '🔋',
    title: 'Battery Storage / Hybrid Solar Solutions',
    description: 'Power backup for night, outages or inconsistent grid supply with intelligent battery storage.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-4.jpg'
  },
  {
    icon: '🔧',
    title: 'Solar Maintenance Services',
    description: 'Annual checkups, system cleaning, performance optimization and quick support.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-5.jpg'
  },
  {
    icon: '📄',
    title: 'Solar Financing & Subsidy Assistance',
    description: 'Flexible payment plans and expert help to make your solar investment low-cost and high-value.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-6.jpg'
  }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

export default function Services() {
  return (
    <ServicesSection id="services">
      <SectionHeader>
        <h3>Our services</h3>
        <h2>Best Offer For Solar Power Solutions</h2>
      </SectionHeader>
      <ServicesSlider>
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard>
                <ServiceImage>
                  <img src={service.image} alt={service.title} />
                  <ServiceIcon>{service.icon}</ServiceIcon>
                </ServiceImage>
                <ServiceContent>
                  <ServiceTitle>
                    <a href="#">{service.title}</a>
                  </ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceContent>
              </ServiceCard>
            </div>
          ))}
        </Slider>
      </ServicesSlider>
    </ServicesSection>
  );
}
