## Project Architecture Overview

- Any good project should have a proper directory structure with clear seperation of concerns. Our project structure has been provoided below:

```bash
summarize/
├── frontend/          # Next.js 15 application
│   ├── src/
│   │   ├── app/           # App Router with route groups
│   │   │   ├── (auth)/    # Authentication routes
│   │   │   ├── (protected)/ # Protected dashboard routes
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── custom/    # Project-specific components
│   │   │   ├── forms/     # Form components with validation
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── data/
│   │   │   ├── actions/   # Server actions
│   │   │   ├── services/  # API service functions
│   │   │   └── validation/ # Zod schemas
│   │   └── types/         # TypeScript definitions
│   └── package.json
└── backend/           # Strapi CMS
    ├── src/
    │   ├── api/           # Custom API routes
    │   ├── components/    # Reusable content components
    │   └── content-types/ # Data models
    └── package.json
