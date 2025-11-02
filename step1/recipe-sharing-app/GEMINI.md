# GEMINI.md

## Project Overview

This is a React-based web application for a recipe sharing platform. The current version features a waitlist signup form on the homepage. The application is built with Vite and uses modern CSS for styling.

**Key Technologies:**
- React 18
- Vite
- CSS3

**Architecture:**
- The application follows a simple component-based architecture with a main `App.jsx` component serving as the primary UI.
- The entry point is `src/main.jsx`, which renders the `App` component.
- Styling is handled by `src/App.css` and `src/index.css`.

## Building and Running

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
Install the project dependencies:
```bash
npm install
```

### Running the Development Server
To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5000`.

### Building for Production
To create a production build:
```bash
npm run build
```

### Previewing the Production Build
To preview the production build locally:
```bash
npm run preview
```

## Development Conventions

### Coding Style
- The project uses functional React components with hooks.
- Component logic and rendering are contained within the same file (`.jsx`).
- Basic form handling and validation are managed within the component's state.

### Testing
- There are currently no testing frameworks or configurations set up in the project.
- TODO: Add a testing framework like Jest and React Testing Library to ensure code quality and prevent regressions.

### Contribution Guidelines
- No explicit contribution guidelines are defined.
- TODO: Create a `CONTRIBUTING.md` file to outline the process for contributing to the project.
