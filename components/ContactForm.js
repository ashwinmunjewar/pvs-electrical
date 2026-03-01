import styled from 'styled-components';
import { useState } from 'react';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  span {
    color: #4A90E2;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  i {
    color: #4A90E2;
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
  
  div {
    strong {
      display: block;
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
    }

    span {
      color: #666;
      line-height: 1.6;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #4A90E2;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #4A90E2;
  color: #fff;
  border: 2px solid #4A90E2;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    background-color: #fff;
    color: #000;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  border: 1px solid #f5c6cb;
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, rgba(6, 147, 227, 0.9) 0%, rgba(155, 81, 224, 0.9) 100%);
  padding: 4rem 2rem;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://crwenterprise.in/wp-content/uploads/2024/03/cta-image.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 1;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
    
    span {
      color: #4A90E2;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PhoneButton = styled.a`
  display: inline-block;
  padding: 0.875rem 2rem;
  background-color: #4A90E2;
  color: #fff;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid #4A90E2;

  &:hover {
    background-color: #357ABD;
    border-color: #357ABD;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`;

const WEB3FORMS_KEY = 'ef6339fc-773c-442d-9226-0b6ed80f3b8e';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New enquiry from ${formData.name} — P.S.V Electricals`,
          from_name: 'P.S.V Electricals Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactSection id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a question or want to work together? We'd love to hear from you.
        </SectionSubtitle>
        <ContactContainer>
          <ContactInfo>
            <h3>Contact Information</h3>
            <p>
              Our team is ready to help you with all your solar energy needs. Whether it's choosing the right system, understanding costs, or getting assistance with installation and subsidies, we're just a call away.
            </p>
            <InfoItem>
              <i className="fas fa-envelope"></i>
              <div>
                <strong>Email</strong>
                <span>parantak8600@gmail.com</span>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-user"></i>
              <div>
                <strong>Parantak N. Raut</strong>
                <span>Contact No: 9765712208</span>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-user"></i>
              <div>
                <strong>Abhijeet S. Nakhale</strong>
                <span>Contact No: 9595654794</span>
              </div>
            </InfoItem>
            <InfoItem>
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Office Address</strong>
                <span>Lahri Nagar Murarka Layout Oppo Maa Vaishnavi Complex No 05 Wardha 442001</span>
              </div>
            </InfoItem>
          </ContactInfo>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email *</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {submitted && (
              <SuccessMessage>
                Thank you! Your message has been sent successfully. We'll get back to you shortly.
              </SuccessMessage>
            )}
            {error && (
              <ErrorMessage>{error}</ErrorMessage>
            )}
          </Form>
        </ContactContainer>
      </ContactSection>
      
      <CTASection>
        <CTAContent>
          <h2>Have Questions?<span> Call Us</span></h2>
          <p>
            Ready to make the switch to solar? Our experts are available to discuss your energy needs, help you choose the right system, and guide you through every step of the process.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <PhoneButton href="tel:9765712208">Call Parantak: 976-571-2208</PhoneButton>
            <PhoneButton href="tel:9595654794">Call Abhijeet: 959-565-4794</PhoneButton>
          </div>
        </CTAContent>
      </CTASection>
    </>
  );
}
