# Mock Interview Platform

## Overview

This application is a comprehensive mock interview platform designed to help candidates prepare for technical interviews. It provides a realistic interview environment with customizable scenarios, real-time feedback, and performance analytics.

## Features

- **Interactive Interview Sessions**: Practice with simulated technical interviews
- **Multiple Interview Types**: Choose from coding challenges, system design questions, behavioral interviews, etc.
- **Real-time Feedback**: Get immediate feedback on your answers
- **Performance Analytics**: Track your progress over time
- **Customizable Scenarios**: Practice with different difficulty levels and interview formats
- **User Authentication**: Secure login and user profile management

## Tech Stack

- **Frontend**:
  - React.js
  - TypeScript
  - Shadcn UI components
  - React Hook Form for form management

- **Backend**:
  - Node.js
  - FireBase

- **Deployment**:
  - Vercel

## Getting Started

### Prerequisites

- Node.js (version 15.x or higher)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/IsukaW/mock-interview-platform.git
   cd mock-interview-platform
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   ```
   Create a .env file based on .env
   ```

4. Start the development server
   ```bash
   npm run dev

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
mock-interview-platform/
├── components/           # UI components
├── pages/                # Application pages
├── public/               # Static assets
├── styles/               # Global styles
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
└── [Other directories]
```

## Component Usage

### FormField Component

The FormField component is used for consistent form input styling across the application:

```tsx
<FormField
  control={form.control}
  name="username"
  label="Username"
  placeholder="Enter your username"
  type="text"
/>
```

## License



## Contact

isuka1minjaya@gmail.com
