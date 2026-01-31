# Harsh Agarwal - Portfolio

A high-performance, aesthetically pleasing personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. This project showcases my engineering journey, technical skills, and key projects with a premium "Royal Blue" design theme.

## 🚀 Features

- **Royal Navy Theme**: A consistent, professional dark-themed aesthetic with royal blue accents.
- **Responsive Design**: Fully optimized layout for mobile, tablet, and desktop devices.
- **Section-Based Navigation**:
  - **About**: Professional bio and background.
  - **Education**: Academic qualifications and achievements.
  - **Skills**: Comprehensive list of technical competencies.
  - **Featured Projects**: Detailed showcases of major works like StayNest and the SIH Winning Solution.
  - **Responsibilities**: Leadership and extracurricular roles.
  - **Contact**: Direct communication channel.
- **Interactive UI**:
  - Smooth scrolling navigation.
  - Dynamic entry animations powered by Framer Motion.
  - Hover effects and micro-interactions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter), [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Utilities**: `clsx`, `tailwind-merge`

## 🏃‍♂️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hrshagarwal/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages
│   ├── layout.js         # Root layout and metadata
│   ├── page.js           # Main landing page
│   └── globals.css       # Global styles and Tailwind imports
├── components/           # Reusable UI components
│   ├── Navbar.js         # Navigation bar
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── FeaturedProject.js # Component for major projects
│   ├── ProjectCard.js    # Component for minor projects
│   └── ...               # Other sections (Skills, Education, etc.)
└── styles/               # Additional style resources
```

## 📄 License

This project is personal to **Harsh Agarwal**. All rights reserved.
