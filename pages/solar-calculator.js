import styled from 'styled-components';
import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  lookupPincode,
  calculateAll,
  calcEMI,
} from '../lib/solar-data';

/* ─── helpers ─── */
const fmt = (n) =>
  n == null ? 'N/A' : Number(n).toLocaleString('en-IN');

/* ─── layout ─── */
const Page = styled.div`padding-top: 80px;`;

const HeroBanner = styled.div`
  background: linear-gradient(135deg, #0f3460 0%, #1e5a96 100%);
  padding: 4rem 2rem 3rem;
  text-align: center;
  color: #fff;
  h1 { font-size: 2.8rem; margin-bottom: 0.5rem; }
  p  { font-size: 1.15rem; opacity: 0.9; max-width: 560px; margin: 0 auto; }
  @media (max-width: 768px) { h1 { font-size: 2rem; } }
`;

const Container = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
`;

/* ─── input section ─── */
const InputCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FieldLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
  &:focus { outline: none; border-color: #4a90e2; }
  &::placeholder { color: #b0b0b0; }
`;

const LocationTag = styled.span`
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.85rem;
  color: ${p => p.error ? '#e53e3e' : '#4a90e2'};
  font-weight: 500;
`;

const SliderWrap = styled.div`
  margin-top: 1.5rem;
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.6rem;
`;

const BillValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a5e;
`;

const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(
    to right,
    #4a90e2 0%,
    #4a90e2 ${p => p.pct}%,
    #e5e7eb ${p => p.pct}%,
    #e5e7eb 100%
  );
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px; height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #4a90e2;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  }
  &::-moz-range-thumb {
    width: 24px; height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #4a90e2;
    cursor: pointer;
  }
`;

const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.3rem;
`;

const CalcButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: #1a1a5e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s;
  &:hover { background: #12124a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,26,94,0.3); }
  &:disabled { opacity: 0.5; cursor: default; transform: none; box-shadow: none; }
`;

/* ─── result sections ─── */
const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #1f2937;
  margin: 2.5rem 0 1rem;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 1.75rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.04);
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

const StatBox = styled.div`
  text-align: center;
  padding: 1.25rem 0.75rem;
  border-radius: 12px;
  background: ${p => p.bg || '#f8fafc'};
  border: 1px solid ${p => p.borderColor || '#e5e7eb'};
`;

const StatLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.35rem;
`;

const StatValue = styled.span`
  display: block;
  font-size: 1.7rem;
  font-weight: 800;
  color: ${p => p.color || '#1a1a5e'};
`;

const StatUnit = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #6b7280;
  margin-left: 0.2rem;
`;

const LineItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  font-size: 0.95rem;
  color: #374151;
  border-bottom: 1px solid ${p => p.border ? '#e5e7eb' : 'transparent'};
  strong { color: #1f2937; }
`;

const HighlightRow = styled(LineItem)`
  font-weight: 700;
  font-size: 1.05rem;
  border-bottom: none;
  padding-top: 0.8rem;
  color: #1f2937;
`;

const SubsidyValue = styled.span`color: #10b981; font-weight: 600;`;
const ZeroValue = styled.span`color: #10b981; font-size: 1.2rem; font-weight: 800;`;

const EMIHighlight = styled.div`
  background: #f0f7ff;
  border-radius: 10px;
  padding: 0.85rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  color: #1a1a5e;
`;

const EnvGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`;

const EnvBox = styled.div`
  text-align: center;
  padding: 1.25rem 0.5rem;
`;

const EnvIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
  color: #6b7280;
`;

const Disclaimer = styled.div`
  background: #f3f4f6;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #6b7280;
  line-height: 1.6;
  p { margin: 0 0 0.4rem; }
  strong { color: #4b5563; }
`;

const CTABox = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #1fb6ff, #3f83f8);
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.25s;
  border: 1px solid rgba(255,255,255,0.4);
  &:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(31,182,255,0.3); }
`;

const NoResults = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 1rem;
  padding: 3rem 0;
`;

/* ─── component ─── */
const MIN_BILL = 500;
const MAX_BILL = 15000;
const STEP = 100;

export default function SolarCalculator() {
  const [pincode, setPincode] = useState('');
  const [bill, setBill] = useState(3000);
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emiTenure, setEmiTenure] = useState(60);
  const resultsRef = useRef(null);
  const debounceRef = useRef(null);

  const pct = ((bill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  const fetchLocation = useCallback(async (pin) => {
    if (!/^\d{6}$/.test(pin)) {
      setLocation(null);
      setLocError(pin.length ? 'Enter a valid 6-digit pincode' : '');
      return;
    }
    setLocError('');
    const loc = await lookupPincode(pin);
    if (loc.found) {
      setLocation(loc);
      setLocError('');
    } else {
      setLocation(null);
      setLocError('Could not find this pincode. Try another.');
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (/^\d{6}$/.test(pincode)) {
      debounceRef.current = setTimeout(() => fetchLocation(pincode), 400);
    } else {
      setLocation(null);
      if (pincode.length > 0 && pincode.length < 6) setLocError('');
    }
    return () => clearTimeout(debounceRef.current);
  }, [pincode, fetchLocation]);

  const handleCalculate = async () => {
    if (!/^\d{6}$/.test(pincode)) {
      setLocError('Enter a valid 6-digit pincode');
      return;
    }
    setLoading(true);
    let loc = location;
    if (!loc) {
      loc = await lookupPincode(pincode);
      if (loc.found) { setLocation(loc); setLocError(''); }
      else { setLocError('Could not find this pincode.'); setLoading(false); return; }
    }
    const r = calculateAll(bill, loc.state);
    setResults(r);
    setEmiTenure(60);
    setLoading(false);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const currentEMI = results ? calcEMI(results.netCost, emiTenure) : 0;
  const emiPct = ((emiTenure - 3) / (60 - 3)) * 100;

  return (
    <>
      <Header />
      <Page>
        <HeroBanner>
          <h1>Calculate Your Solar Savings</h1>
          <p>Find out how much you can save by switching to solar energy.</p>
        </HeroBanner>

        <Container>
          {/* ── Inputs ── */}
          <InputCard>
            <InputRow>
              <div>
                <FieldLabel>Pin code</FieldLabel>
                <InputField
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="e.g. 442001"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                />
                {location && (
                  <LocationTag>{location.city}, {location.state}</LocationTag>
                )}
                {locError && <LocationTag error>{locError}</LocationTag>}
              </div>
              <div>
                <FieldLabel>City</FieldLabel>
                <InputField
                  type="text"
                  value={location ? `${location.city}` : ''}
                  placeholder="Auto-detected from pincode"
                  readOnly
                  style={{ background: '#f9fafb', cursor: 'default' }}
                />
              </div>
            </InputRow>

            <SliderWrap>
              <SliderHeader>
                <FieldLabel style={{ marginBottom: 0 }}>Avg. monthly electricity bill</FieldLabel>
                <BillValue>&#8377;{fmt(bill)}</BillValue>
              </SliderHeader>
              <Slider
                type="range"
                min={MIN_BILL}
                max={MAX_BILL}
                step={STEP}
                value={bill}
                pct={pct}
                onChange={(e) => setBill(Number(e.target.value))}
              />
              <SliderLabels>
                <span>&#8377;{fmt(MIN_BILL)}</span>
                <span>&#8377;{fmt(MAX_BILL)}</span>
              </SliderLabels>
            </SliderWrap>

            <CalcButton onClick={handleCalculate} disabled={loading}>
              {loading ? 'Calculating...' : 'Calculate Your Solar Savings'}
            </CalcButton>
          </InputCard>

          {/* ── Results ── */}
          {results ? (
            <div ref={resultsRef}>
              {/* System Size */}
              <SectionTitle>Required System Size</SectionTitle>
              <Card>
                <StatRow>
                  <StatBox>
                    <StatLabel>System Size</StatLabel>
                    <StatValue>{results.sizeKW}<StatUnit>kW</StatUnit></StatValue>
                  </StatBox>
                  <StatBox>
                    <StatLabel>Roof Area</StatLabel>
                    <StatValue>{fmt(results.roofArea)}<StatUnit>sq. ft.</StatUnit></StatValue>
                  </StatBox>
                </StatRow>
              </Card>

              {/* Savings */}
              <SectionTitle>Your Solar Savings</SectionTitle>
              <Card>
                <StatRow>
                  <StatBox>
                    <StatLabel>Monthly</StatLabel>
                    <StatValue color="#1a1a5e">&#8377;{fmt(results.monthlySavings)}</StatValue>
                  </StatBox>
                  <StatBox>
                    <StatLabel>Yearly</StatLabel>
                    <StatValue color="#1a1a5e">&#8377;{fmt(results.yearlySavings)}</StatValue>
                  </StatBox>
                </StatRow>
              </Card>

              {/* Investment */}
              <SectionTitle>Your Investment</SectionTitle>
              <Card>
                <LineItem border>
                  <span>Total cost of plant</span>
                  <strong>&#8377;{fmt(results.totalCost)}</strong>
                </LineItem>
                <LineItem border>
                  <span>Central Subsidy</span>
                  <SubsidyValue>&minus;&#8377;{fmt(results.subsidy)}</SubsidyValue>
                </LineItem>
                <HighlightRow>
                  <span>Net Cost</span>
                  <span>&#8377;{fmt(results.netCost)}</span>
                </HighlightRow>

                <StatRow style={{ marginTop: '1.25rem' }}>
                  <StatBox bg="#f0fdf4" borderColor="#bbf7d0">
                    <StatLabel>Lifetime Savings</StatLabel>
                    <StatValue color="#059669">&#8377;{fmt(results.lifetimeSavings)}</StatValue>
                  </StatBox>
                  <StatBox bg="#f0f7ff" borderColor="#bfdbfe">
                    <StatLabel>Return on Investment</StatLabel>
                    <StatValue color="#1a1a5e">{results.roi}%<StatUnit>p.a.</StatUnit></StatValue>
                  </StatBox>
                </StatRow>
              </Card>

              {/* EMI */}
              <SectionTitle>Buy Solar at &#8377;0 Downpayment</SectionTitle>
              <Card>
                <LineItem border>
                  <span>Minimum Down Payment</span>
                  <strong>&#8377;{fmt(results.downPayment)}</strong>
                </LineItem>
                <LineItem border>
                  <span>Subsidy</span>
                  <SubsidyValue>&minus;&#8377;{fmt(results.subsidy)}</SubsidyValue>
                </LineItem>
                <HighlightRow>
                  <span>Net Down Payment</span>
                  <ZeroValue>&#8377;0</ZeroValue>
                </HighlightRow>

                <div style={{ marginTop: '1.25rem' }}>
                  <SliderHeader>
                    <span style={{ fontSize: '0.9rem', color: '#374151' }}>EMI tenure</span>
                    <strong style={{ color: '#1a1a5e' }}>{Math.round(emiTenure / 12 * 10) / 10} year{emiTenure > 12 ? 's' : ''}</strong>
                  </SliderHeader>
                  <Slider
                    type="range"
                    min={3}
                    max={60}
                    step={3}
                    value={emiTenure}
                    pct={emiPct}
                    onChange={(e) => setEmiTenure(Number(e.target.value))}
                  />
                  <SliderLabels>
                    <span>3 months</span>
                    <span>60 months</span>
                  </SliderLabels>
                </div>

                <EMIHighlight>
                  <span>EMI</span>
                  <span>&#8377;{fmt(currentEMI)}</span>
                </EMIHighlight>
              </Card>

              {/* Environmental */}
              <SectionTitle>Your Solar Saves More Than Money</SectionTitle>
              <Card>
                <EnvGrid>
                  <EnvBox>
                    <EnvIcon>&#127758;</EnvIcon>
                    <StatLabel>CO2 Mitigated</StatLabel>
                    <StatValue style={{ fontSize: '1.4rem' }}>{fmt(results.co2)}<StatUnit>Kg</StatUnit></StatValue>
                  </EnvBox>
                  <EnvBox>
                    <EnvIcon>&#127794;</EnvIcon>
                    <StatLabel>Trees Planted</StatLabel>
                    <StatValue style={{ fontSize: '1.4rem' }}>{fmt(results.trees)}</StatValue>
                  </EnvBox>
                  <EnvBox>
                    <EnvIcon>&#128663;</EnvIcon>
                    <StatLabel>Distance</StatLabel>
                    <StatValue style={{ fontSize: '1.4rem' }}>{fmt(results.distanceKm)}<StatUnit>Kms</StatUnit></StatValue>
                  </EnvBox>
                </EnvGrid>
              </Card>

              {/* Disclaimer */}
              <Disclaimer>
                <p><strong>Disclaimer:</strong></p>
                <p>1. Monthly, yearly and lifetime savings are calculated over 25 years with 1% annual panel degradation and 3% annual tariff inflation.</p>
                <p>2. Prices shown are indicative. Actual costs may vary based on your city, panel type, inverter, roof structure, discom charges, and installer.</p>
                <p>3. Subsidy amounts are as per PM Surya Ghar Yojana guidelines and are subject to government policy changes.</p>
              </Disclaimer>

              {/* CTA */}
              <CTABox>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Ready to start saving? Book a free consultation with our solar experts.
                </p>
                <Link href="/#contact" passHref legacyBehavior>
                  <CTAButton>Book a Free Consultation</CTAButton>
                </Link>
              </CTABox>
            </div>
          ) : (
            <NoResults>Enter your pincode and bill amount, then click calculate to see your solar savings.</NoResults>
          )}
        </Container>
      </Page>
      <Footer />
    </>
  );
}
