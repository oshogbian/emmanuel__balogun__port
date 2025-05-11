# React Portfolio App

This project is a personal portfolio website built with React. It showcases my skills, projects, and professional information in a clean, modern interface.

## Features

- Responsive design
- Dark mode toggle
- Sections for:
  - Hero/Introduction
  - Projects Grid
  - Resume/Skills
  - Contact Information
- Social media links

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── HeroSection/
│   ├── ProjectsGrid/
│   ├── Resume/
│   └── Footer/
├── containers/
│   └── App/
└── index.js
```

Each component has its own folder with a .jsx file for the component and a .css file for styling.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Customization

To personalize this portfolio:

1. Update the content in each component (Navbar.jsx, HeroSection.jsx, etc.)
2. Modify the styles in the corresponding CSS files
3. Add your own projects to the ProjectsGrid component
4. Update your resume information in the Resume component
5. Customize the color scheme and typography to match your personal brand

## Dependencies

- React
- lucide-react (for icons)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For information about deploying a React app, refer to the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).