import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
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
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  }

  &:hover .project-overlay {
    opacity: 1;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.9) 0%, rgba(53, 122, 189, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  background-color: #fff;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const projects = [
  {
    title: 'Photon Fusion',
    description: 'Advanced solar energy project showcasing innovative residential solutions.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-1.jpg'
  },
  {
    title: 'LuxSolar Dynamics',
    description: 'Commercial solar installation delivering significant energy cost savings.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-2.jpg'
  },
  {
    title: 'Solarburst Ventures',
    description: 'Large-scale industrial solar project with hybrid battery integration.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-3.jpg'
  },
  {
    title: 'Sunworks Initiative',
    description: 'Government project demonstrating sustainable energy solutions.',
    image: 'https://crwenterprise.in/wp-content/uploads/2024/03/service-4.jpg'
  }
];

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle>Our Projects</SectionTitle>
      <SectionSubtitle>
        Explore some of our recent work and successful solar energy projects
      </SectionSubtitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
              <ProjectOverlay className="project-overlay">
                View Details
              </ProjectOverlay>
            </ProjectImage>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}
