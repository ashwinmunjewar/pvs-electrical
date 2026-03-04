import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h3 {
    font-size: 1rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.9rem;
  }

  h2 {
    font-size: 2.4rem;
    color: #333;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    max-width: 760px;
    margin: 0 auto;
    line-height: 1.6;
    font-size: 1.05rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
`;

const PhotoWrap = styled.div`
  width: 100%;
  height: 230px;
  background: linear-gradient(135deg, #ebf4ff 0%, #f5f8ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PhotoFallback = styled.div`
  text-align: center;
  color: #5b6470;
  padding: 1rem;

  strong {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.35rem;
    color: #1a1a5e;
  }

  span {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Body = styled.div`
  padding: 1rem 1rem 1.2rem;
`;

const Quote = styled.p`
  color: #414b5a;
  font-size: 0.95rem;
  line-height: 1.65;
  margin-bottom: 0.85rem;
`;

const Meta = styled.div`
  font-size: 0.86rem;
  color: #596272;

  strong {
    color: #1a1a5e;
  }
`;

function PhotoCard({ testimonial }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = Boolean(testimonial.imageSrc) && !imageFailed;

  return (
    <Card>
      <PhotoWrap>
        {hasImage ? (
          <Photo
            src={testimonial.imageSrc}
            alt={testimonial.alt}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <PhotoFallback>
            <strong>Customer Photo Slot</strong>
            <span>Add an installation photo to showcase local trust.</span>
          </PhotoFallback>
        )}
      </PhotoWrap>
      <Body>
        <Quote>{testimonial.quote}</Quote>
        <Meta>
          <strong>{testimonial.name}</strong> · {testimonial.location}
        </Meta>
      </Body>
    </Card>
  );
}

const testimonials = [
  {
    name: 'Homeowner',
    location: 'Wardha',
    quote:
      'Just one call and their team handled the full process, from site planning to subsidy paperwork and final installation.',
    // Place your provided photo here: public/testimonials/client-wardha-1.jpg
    imageSrc: '/testimonials/client-wardha-1.jpg',
    alt: 'Completed residential rooftop solar installation in Wardha',
  },
  {
    name: 'Commercial Client',
    location: 'Nagpur',
    quote:
      'The process felt simple and transparent. We received timely updates and the system was commissioned as promised.',
    imageSrc: '',
    alt: '',
  },
  {
    name: 'Homeowner',
    location: 'Wardha District',
    quote:
      'They guided us on system size and savings clearly. Installation quality and after-support have both been reliable.',
    imageSrc: '',
    alt: '',
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Header>
        <h3>Customer Stories</h3>
        <h2>Proof from Real Installations</h2>
        <p>
          Local project photos and customer feedback help remove uncertainty. We handle permits, subsidy paperwork, and
          installation so going solar feels straightforward.
        </p>
      </Header>
      <Grid>
        {testimonials.map((testimonial) => (
          <PhotoCard key={`${testimonial.name}-${testimonial.location}`} testimonial={testimonial} />
        ))}
      </Grid>
    </Section>
  );
}
