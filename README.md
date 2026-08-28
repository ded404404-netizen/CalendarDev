# React Calendar

A minimal, performant, and fully responsive calendar component built with React.

## Features

- 🚀 **Optimized Performance**: Uses `useMemo` for efficient date calculations
- 📱 **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop screens
- 🎨 **Clean Design**: Minimalist aesthetic with focus on usability
- 🔄 **Navigation**: Easy month-to-month navigation
- 📅 **Date Selection**: Click to select dates with visual feedback
- ✨ **Current Day Indicator**: Highlights today's date automatically

## Tech Stack

- React 18+
- CSS Modules (scoped styling)
- Native Date API (no external dependencies)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd calendar-app
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
calendar-app/
├── src/
│   ├── components/
│   │   └── Calendar.jsx      # Main calendar component
│   ├── App.jsx               # Application entry point
│   ├── main.jsx              # React DOM render
│   └── index.css             # Global styles
├── public/
├── package.json
└── vite.config.js
```

## Usage

Import and use the Calendar component in your application:

```jsx
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="app">
      <Calendar />
    </div>
  );
}
```

## Customization

The calendar styles are modular and can be customized by modifying the CSS in `Calendar.jsx`. Key customizable elements:

- Color scheme
- Grid layout breakpoints
- Typography
- Spacing and borders
