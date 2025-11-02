# Recipe Sharing App

A React web application for sharing recipes with a waitlist signup form on the homepage.

## Features

- Beautiful, responsive homepage with gradient design
- Waitlist signup form with validation
- Email and name validation
- Success message after form submission
- Feature highlights section
- Mobile-responsive design

## Tech Stack

- React 18
- Vite
- CSS3 with modern styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
recipe-sharing-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies
```

## Form Validation

The waitlist form includes:
- Name field validation (required)
- Email field validation (required + valid email format)
- Real-time error messages
- Success confirmation message

## Customization

You can customize the app by:
- Modifying colors in `src/App.css` and `src/index.css`
- Updating the hero text in `src/App.jsx`
- Adding more features to the features section
- Integrating with a backend API for actual form submission

## Future Enhancements

- Backend integration for storing waitlist signups
- Email confirmation system
- Recipe browsing functionality
- User authentication
- Recipe upload and sharing features
