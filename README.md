# PR Electricals Website

PR Electricals website built with Next.js and styled-components. A modern, professional solar energy solutions website.

## Features

- **Fullscreen Hero Carousel**: Interactive slider with smooth transitions
- **About Us Section**: Complete company information with images
- **Services Grid**: 6 solar services displayed in a responsive slider
- **Why Choose Us**: Progress bars and feature cards showcasing company strengths
- **Projects Gallery**: Showcase of completed solar projects
- **Contact Form**: Fully functional contact form with validation
- **Footer**: Complete footer with links, contact info, and social media
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Components**: Hover effects, animations, and dynamic navigation

## Project Structure

```
├── components/
│   ├── Header.js          # Navigation header with scroll effects
│   ├── Hero.js            # Hero section with carousel
│   ├── About.js           # About section with company info
│   ├── Services.js        # Services grid with slider
│   ├── WhyChooseUs.js     # Why Choose Us section with progress bars
│   ├── Projects.js        # Portfolio/projects section
│   ├── ContactForm.js     # Contact form with validation
│   └── Footer.js           # Footer with links and info
├── pages/
│   ├── _app.js            # Next.js app wrapper with GlobalStyle
│   ├── _document.js       # Custom document with meta tags
│   └── index.js            # Home page
├── styles/
│   └── GlobalStyle.js     # Global CSS reset and base styles
├── public/                # Static assets
├── package.json
├── next.config.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd CR-enterprise
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

Build the production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Docker Setup (Optional)

If you prefer to run the application in Docker:

```bash
docker-compose up
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **styled-components**: CSS-in-JS styling solution
- **react-slick**: Carousel/slider component
- **slick-carousel**: Carousel styling
- **Font Awesome**: Icons
- **Google Fonts**: Rajdhani and Rubik fonts

## Sections

1. **Header**: Fixed navigation with smooth scroll behavior and mobile menu
2. **Hero**: Full-screen hero section with carousel and call-to-action buttons
3. **About**: Company information, history, and expertise
4. **Services**: Grid of 6 service cards with slider functionality
5. **Why Choose Us**: Progress bars and feature cards
6. **Projects**: Portfolio showcase with hover effects
7. **Contact**: Contact form with CTA section
8. **Footer**: Company info, links, and social media

## Content

## Contact Information

- **Email**: prelectricals.in
- **Phone**: 9765712208
- **Location**: Wardha-Nagpur, Maharashtra, India

## Notes

- This is a faithful replica of the original website
- All images are loaded from the original website URLs
- Form submission is handled with a client-side handler (can be connected to backend API)
- The site uses the exact fonts, colors, and styling from the original

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

1. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The site will automatically deploy when you push to the `main` branch

2. **Your site will be available at:**
   - `https://ashwinmunjewar.github.io/pvs-electrical/`

### Manual Deployment

If you want to build and deploy manually:

```bash
npm run build
```

The static files will be generated in the `out/` directory. You can then deploy these files to any static hosting service.

### Using a Custom Domain

If you want to use a custom domain:
1. Remove or modify the `basePath` in `next.config.js`
2. Update your GitHub Pages settings with your custom domain
3. Add a `CNAME` file in the `public/` folder with your domain name

## License

This is a replica project for development purposes.
