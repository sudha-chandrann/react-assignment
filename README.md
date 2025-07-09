# React Intern Assignment - Spreadsheet View

A pixel-perfect React prototype of an AI-powered spreadsheet interface, built as part of the internship assignment for creating next-generation solutions.

##  Project Overview

This project recreates a Google Sheets/Excel-like spreadsheet experience using React, TypeScript, and Tailwind CSS. The application features a fully interactive table with job management capabilities, status tracking, and responsive design.

##  Live Demo

**Live URL:** "https://react-assignment-peach.vercel.app/"

## 📋 Features

### Core Features
- ✅ Pixel-perfect implementation matching Figma design
- ✅ Google Sheets/Excel-like spreadsheet experience
- ✅ Interactive table with editable cells
- ✅ Status management (In-process, Complete, Blocked, Need to start)
- ✅ Priority levels (High, Medium, Low)
- ✅ Responsive mobile design with slide-out navigation
- ✅ All buttons and tabs are functional (no dead UI)


## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **React Icons** - Icon library


## 📁 Project Structure

```
src/
├── components/
│   ├── ActionButton.tsx    # Action buttons toolbar
│   ├── Footer.tsx          # Footer with filters
│   ├── Header.tsx          # Navigation header
│   ├── TableHeader.tsx     # Table column headers
│   ├── TableRow.tsx        # Individual table rows
│   └── ToolBar.tsx         # Secondary toolbar
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd react-intern-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design Implementation

### Figma Design
- **URL:** https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1
- **Implementation:** Pixel-perfect recreation with attention to spacing, colors, and typography

### Key Design Elements
- Clean, modern interface with proper spacing
- Consistent color scheme and typography
- Interactive hover states and animations
- Mobile-responsive design patterns
- Accessible UI components

## 💡 Technical Decisions & Trade-offs

### Custom Table Implementation
**Decision:** Built a custom table component instead of using react-table
**Reasoning:** 
- Better control over styling and behavior
- Smaller bundle size
- Easier to implement Excel-like editing experience
- More flexibility for custom interactions

### State Management
**Decision:** Used local component state with useState
**Reasoning:**
- Application complexity doesn't require external state management
- Keeps bundle size minimal
- Easier to understand and maintain
- Follows assignment requirements

### TypeScript Integration
**Decision:** Strict TypeScript mode with comprehensive interfaces
**Reasoning:**
- Better developer experience with autocomplete
- Prevents runtime errors
- Self-documenting code
- Assignment requirement

## 📱 Responsive Design

- **Desktop:** Full spreadsheet view with all features
- **Tablet:** Optimized layout with adjusted spacing
- **Mobile:** Slide-out navigation menu with condensed table view

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD)
- Accessibility attributes (ARIA labels)

## 📊 Data Structure

```typescript
interface TableRowProps {
  id: number;
  jobRequest?: string;
  dateSubmitted?: string;
  submitter?: string;
  status?: "In-process" | "Need to start" | "Complete" | "Blocked";
  url?: string;
  assigned?: string;
  priority?: "Medium" | "High" | "Low";
  dueDate?: string;
  estValue?: string;
}
```

## 🧪 Testing & Quality

- **ESLint:** Code linting passes with no errors
- **TypeScript:** Strict type checking passes
- **Prettier:** Code formatting consistent
- **Manual Testing:** All interactive elements tested

## 🚀 Deployment

The application is deployed and accessible at: [Your Live URL]

**Build Command:**
```bash
npm run build
``

## 🤝 Contributing

This is an assignment submission, but feedback and suggestions are welcome!

## 📄 License

This project is created for internship assignment purposes.

---

**Created with ❤️ for the React Intern Assignment**

*Building the next generation of AI-powered solutions—designed to scale impact, spark innovation, and move the world forward.*