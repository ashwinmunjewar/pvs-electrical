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
  margin-bottom: 0.25rem;
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
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;

  span {
    color: #e53e3e;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #4A90E2;
  }

  &::placeholder {
    color: #b0b0b0;
  }
`;

const BillLabel = styled.p`
  color: #333;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0.25rem 0 0.5rem;

  span {
    color: #e53e3e;
  }
`;

const BillOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const BillChip = styled.button`
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 2px solid ${props => props.selected ? '#4A90E2' : '#e0e0e0'};
  background: ${props => props.selected ? '#EBF4FF' : '#fff'};
  color: ${props => props.selected ? '#4A90E2' : '#333'};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:hover {
    border-color: #4A90E2;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #1a1a5e;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${props => props.disabled ? 0.6 : 1};
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 26, 94, 0.35);
    background-color: #12124a;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 8px;
  margin-top: 0.5rem;
  text-align: center;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 8px;
  margin-top: 0.5rem;
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

const billRanges = [
  'Less than \u20B91500',
  '\u20B91500 \u2013 \u20B92500',
  '\u20B92500 \u2013 \u20B94000',
  '\u20B94000 \u2013 \u20B98000',
  'More than \u20B98000',
];

const WEB3FORMS_KEY = 'ef6339fc-773c-442d-9226-0b6ed80f3b8e';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    pincode: '',
    monthlyBill: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          subject: `New solar enquiry from ${formData.name} \u2014 P.S.V Electricals`,
          from_name: 'P.S.V Electricals Website',
          name: formData.name,
          whatsapp: formData.whatsapp,
          pincode: formData.pincode,
          monthly_bill: formData.monthlyBill || 'Not selected',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', whatsapp: '', pincode: '', monthlyBill: '' });
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
        <SectionTitle>Book a <span>FREE</span> Solar Consultation</SectionTitle>
        <SectionSubtitle>
          And save up to &#8377;78,000 with subsidy
        </SectionSubtitle>
        <ContactContainer>
          <ContactInfo>
            <h3>Contact Information</h3>
            <p>Expert guidance on solar systems, pricing, subsidies &amp; installation &mdash; one call away.</p>
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
              <Label>Full name <span>*</span></Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>WhatsApp number <span>*</span></Label>
              <Input
                type="tel"
                name="whatsapp"
                placeholder="Enter WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Pin code <span>*</span></Label>
              <Input
                type="text"
                name="pincode"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                maxLength={6}
                inputMode="numeric"
                pattern="[0-9]{6}"
              />
            </FormGroup>
            <div>
              <BillLabel>What is your average monthly bill? <span>*</span></BillLabel>
              <BillOptions>
                {billRanges.map((range) => (
                  <BillChip
                    key={range}
                    type="button"
                    selected={formData.monthlyBill === range}
                    onClick={() => setFormData({ ...formData, monthlyBill: range })}
                  >
                    {range}
                  </BillChip>
                ))}
              </BillOptions>
            </div>
            <SubmitButton type="submit" disabled={loading || !formData.monthlyBill}>
              {loading ? 'Sending...' : 'Get a FREE Quote'}
            </SubmitButton>
            {submitted && (
              <SuccessMessage>
                Thank you! We'll reach out on WhatsApp shortly with your free quote.
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
