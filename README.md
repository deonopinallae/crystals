# Crystals E-Commerce Website

A modern, beautiful e-commerce website for ethically sourced crystals. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

### Pages Implemented
- **Home** - Landing page with showcase sections, carousel, featured crystals, and reviews
- **Crystals Catalog** - Browse all crystals with filtering by category
- **Product Detail** - Individual product pages with pricing and details
- **Shopping Cart** - Cart management page
- **About** - Company information and mission
- **Contact** - Contact form for inquiries
- **Shipping Info** - Shipping details and rates
- **Privacy Policy** - Privacy and data handling information
- **Terms & Conditions** - Legal terms
- **Returns & Exchanges** - Return policy details

### Components

#### Home Page Sections
- **HomeMainSection** - Hero section with large typography
- **Carousel** - Infinitely scrolling text carousel
- **CardsSliderSection** - Featured crystals showcase with category cards
- **ReviewsSection** - Customer testimonials and reviews
- **CrystalsListSection** - Popular crystals grid

#### Layout Components
- **HomeHeader** - Navigation header with logo and cart icon
- **Footer** - Multi-column footer with links and information
- **AppColumn** - Main layout wrapper
- **Page** - Page content container

#### UI Components
- **Button** - Primary call-to-action button
- **Input** - Form input field
- **Icons** - Search, pyramid (cart), wave, and circle decor icons
- **LoadingOverlay** - Loading state indicator
- **ErrorMessage** - Error display component
- **ModalWindow** - Reusable modal dialog component

### Data Models

#### Crystal Object
```typescript
{
  id: number
  name: string
  price: number
  color: string
  description: string
  category: string
  details?: string
}
```

### Styling

- **Design System** - Custom CSS variables for colors, spacing, and typography
- **Typography** - Three custom Google Fonts:
  - Bricolage Grotesque (headings, bold text)
  - Roboto (body text)
  - Newsreader (large titles)
- **Responsive Design** - Mobile-first approach with breakpoints for tablet (724px) and desktop (1440px)
- **Color Scheme**:
  - Background: #EEEEEE
  - Primary Text: #000000
  - Primary Color: #5F33E1 (purple)
  - Border Color: #EAC1BF (light pink)

### Technology Stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Styling**: 
  - Tailwind CSS 4.x
  - SASS/SCSS with modules
- **State Management**: Zustand 5.0.9
- **Forms**: React Hook Form 7.68.0
- **Validation**: Yup 1.7.1
- **Data Fetching**: TanStack React Query 5.90.12
- **Linting**: ESLint 9.x
- **Code Formatting**: Prettier 3.6.2

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── not-found.tsx       # 404 page
│   ├── (home)/
│   │   └── page.tsx        # Home page
│   └── (routes)/
│       ├── cart/
│       ├── crystals/
│       │   ├── page.tsx    # Crystals listing
│       │   └── [id]/
│       │       └── page.tsx # Product detail
│       ├── about/
│       ├── contact/
│       ├── shipping/
│       ├── privacy/
│       ├── terms/
│       └── returns/
├── entites/
│   └── home-sections/      # Home page sections
│       ├── cards-slider/
│       ├── carousel/
│       ├── crystals-list/
│       ├── home-main-section/
│       └── reviews-section/
├── shared/
│   ├── api/                # API endpoints and data
│   ├── lib/                # Utilities and configs
│   ├── modal-window/       # Modal component and state
│   ├── types/              # TypeScript types
│   ├── ui/                 # Shared UI components
│   │   ├── buttons/
│   │   ├── icons/
│   │   └── layout/
│   └── styles/             # Global styles
└── public/                 # Static assets
```

### Getting Started

#### Installation

```bash
npm install
```

#### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Build

```bash
npm run build
npm start
```

#### Linting

```bash
npm run lint
```

### Configuration Files

- **next.config.ts** - Next.js configuration with React Compiler enabled
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.mjs** - PostCSS and Tailwind integration
- **.prettierrc.json** - Code formatting rules
- **eslint.config.mjs** - ESLint rules

### State Management

#### Modal Store (Zustand)
```typescript
useModalStore - {
  isOpen: boolean
  open: () => void
  close: () => void
}
```

### Future Enhancements

- [ ] Add shopping cart functionality with local storage persistence
- [ ] Implement product search and advanced filtering
- [ ] Add user authentication and accounts
- [ ] Create admin dashboard
- [ ] Add payment integration (Stripe/PayPal)
- [ ] Implement product reviews and ratings
- [ ] Add newsletter subscription
- [ ] Create wishlist functionality
- [ ] Add product recommendations
- [ ] Implement inventory management

### Customization

All colors, fonts, and spacing are defined in CSS variables in `src/styles/vars.scss`. You can easily customize the design by updating these values:

```scss
:root {
  --bg-color: #eeeeee;
  --font-color-main: #000;
  --main-dark-color: #5f33e1;
  --border-light-color: #eac1bf;
}
```

### License

This project is proprietary and confidential.

### Support

For questions or issues, please contact support@crystals.com
