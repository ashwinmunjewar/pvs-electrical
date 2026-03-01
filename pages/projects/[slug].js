import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageWrapper = styled.div`
  padding-top: 80px;
`;

const HeroBanner = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(15, 52, 96, 0.7) 0%,
      rgba(15, 52, 96, 0.5) 100%
    );
  }

  @media (max-width: 768px) {
    height: 260px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 0.75rem;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.15rem;
    opacity: 0.92;
    max-width: 600px;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 5rem;

  h2 {
    font-size: 1.8rem;
    color: #1f2937;
    margin: 2.5rem 0 1rem;
  }

  p {
    color: #4b5563;
    line-height: 1.75;
    font-size: 1.05rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0 2rem;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.65rem;
    color: #4b5563;
    line-height: 1.6;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #4a90e2;
      font-weight: 700;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  background: #f0f7ff;
  border: 1px solid #dbeafe;

  strong {
    display: block;
    font-size: 2rem;
    color: #4a90e2;
    margin-bottom: 0.25rem;
  }

  span {
    color: #6b7280;
    font-size: 0.9rem;
  }
`;

const BackLink = styled.div`
  margin-bottom: 2.5rem;

  a {
    color: #4a90e2;
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: color 0.2s;

    &:hover {
      color: #357abd;
    }
  }
`;

const projectData = {
  'photon-fusion': {
    title: 'Photon Fusion',
    tagline: 'Residential rooftop solar that pays for itself.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-1.jpg',
    overview:
      'Photon Fusion is P.S.V Electricals\u2019 flagship residential solar project focused on helping homeowners in Wardha and Nagpur transition to clean, self-generated power. Each installation is custom-designed based on the household\u2019s energy consumption, roof structure, and long-term savings goals.',
    highlights: [
      'Custom-designed 3 kW\u201310 kW rooftop systems for individual homes',
      'Tier-1 monocrystalline panels with 25-year performance warranty',
      'Grid-tied systems with net metering for bill credits',
      'Average electricity bill reduction of 80\u201390%',
      'Complete project handling \u2014 site survey, design, permits, installation',
      'Post-installation monitoring and annual maintenance support',
    ],
    stats: [
      { value: '80\u201390%', label: 'Bill Reduction' },
      { value: '25 yrs', label: 'Panel Warranty' },
      { value: '3\u201310 kW', label: 'System Range' },
      { value: '3\u20134 yrs', label: 'Payback Period' },
    ],
    details:
      'Every Photon Fusion project begins with a detailed site assessment where our engineers evaluate roof orientation, shade analysis, and structural suitability. We handle all MSEDCL paperwork and net-metering applications so homeowners can start earning credits from day one. Systems are designed to last 25+ years with minimal maintenance, and we offer annual cleaning and health-check packages to keep performance at peak levels.',
    cta: 'Families across Wardha and Nagpur are already generating their own electricity and saving thousands every year. Get a free site survey to see how much you can save.',
  },
  'luxsolar-dynamics': {
    title: 'LuxSolar Dynamics',
    tagline: 'Commercial solar that cuts costs and boosts ROI.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-2.jpg',
    overview:
      'LuxSolar Dynamics is our commercial and industrial solar division, delivering high-capacity rooftop and ground-mounted systems for offices, factories, warehouses, and retail spaces. The goal is simple \u2014 slash energy bills, improve sustainability credentials, and deliver a strong return on investment.',
    highlights: [
      'Scalable 10 kW\u2013100 kW+ systems for businesses of all sizes',
      'Customised design for flat roofs, sheds, and ground-mount structures',
      'High-efficiency bifacial panels for maximum generation per sq. ft.',
      'OPEX and CAPEX financing models available',
      'Accelerated depreciation tax benefits under Section 32 of IT Act',
      'Remote monitoring dashboards for real-time performance tracking',
    ],
    stats: [
      { value: '30\u201350%', label: 'Energy Cost Savings' },
      { value: '100 kW+', label: 'System Capacity' },
      { value: '40%', label: 'Depreciation Benefit' },
      { value: '4\u20135 yrs', label: 'ROI Period' },
    ],
    details:
      'Commercial electricity rates in Maharashtra are significantly higher than residential rates, making solar an even more compelling investment for businesses. LuxSolar Dynamics projects are engineered for maximum yield \u2014 we use bifacial modules, optimised tilt angles, and string inverter configurations tailored to each facility\u2019s load profile. Our team manages everything from structural engineering and electrical integration to MSEDCL liaison and commissioning.',
    cta: 'Businesses across Vidarbha are reducing overhead with solar. Request a free energy audit and customised proposal for your facility.',
  },
  'solarburst-ventures': {
    title: 'Solarburst Ventures',
    tagline: 'Industrial-scale solar with hybrid battery storage.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-3.jpg',
    overview:
      'Solarburst Ventures represents our most advanced project category \u2014 large-scale industrial solar installations paired with hybrid battery storage systems. These projects are designed for manufacturing units, cold-storage facilities, and energy-intensive operations that need reliable, uninterrupted power.',
    highlights: [
      'High-capacity 50 kW\u2013500 kW solar + battery hybrid systems',
      'Lithium-ion battery banks for backup during grid outages',
      'Peak shaving to reduce maximum demand charges',
      'Seamless integration with existing DG sets and grid supply',
      'SCADA-based remote monitoring and fault detection',
      'Designed for 24/7 operations with zero downtime goals',
    ],
    stats: [
      { value: '500 kW', label: 'Max Capacity' },
      { value: '24/7', label: 'Power Availability' },
      { value: '60%', label: 'Peak Demand Reduction' },
      { value: '8+ hrs', label: 'Battery Backup' },
    ],
    details:
      'Industrial facilities often face high demand charges, power quality issues, and costly diesel generator dependency. Solarburst Ventures solves all three. Our hybrid systems combine high-capacity solar arrays with lithium-ion battery storage to provide clean, uninterrupted power. Intelligent energy management systems automatically switch between solar, battery, and grid to minimise costs and ensure continuity. We handle the complete lifecycle \u2014 feasibility study, system design, procurement, installation, and ongoing O\u0026M support.',
    cta: 'If your facility spends heavily on electricity and diesel, a hybrid solar system could transform your energy economics. Contact us for a detailed feasibility study.',
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectData).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projectData[params.slug] || null;
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  return (
    <>
      <Header />
      <PageWrapper>
        <HeroBanner>
          <img src={project.image} alt={project.title} />
          <HeroOverlay>
            <h1>{project.title}</h1>
            <p>{project.tagline}</p>
          </HeroOverlay>
        </HeroBanner>

        <Content>
          <BackLink>
            <Link href="/#projects">&larr; Back to Projects</Link>
          </BackLink>

          <h2>Overview</h2>
          <p>{project.overview}</p>

          <StatsGrid>
            {project.stats.map((s, i) => (
              <StatCard key={i}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </StatCard>
            ))}
          </StatsGrid>

          <h2>Key Highlights</h2>
          <ul>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <h2>How It Works</h2>
          <p>{project.details}</p>

          <h2>Ready to Get Started?</h2>
          <p>{project.cta}</p>
        </Content>
      </PageWrapper>
      <Footer />
    </>
  );
}
