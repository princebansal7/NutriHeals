# NutriHeal - Premium Clinical Dietitian Website

A premium, modern, and conversion-focused website for NutriHeal, a professional clinical dietitian brand led by Dt. Yogita Bansal.

## Features

- **Modern UI/UX**: Glassmorphism, soft gradients, smooth animations
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Fast Performance**: Static export, optimized images
- **Interactive Elements**: Scroll animations, counters, testimonials carousel
- **Lead Generation**: Consultation form ready for Supabase integration
- **WhatsApp Integration**: Floating button for quick connect

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Static Export (GitHub Pages compatible)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/NutriHeal.git
cd NutriHeal
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

### Build the static site:
```bash
npm run build
```

This will create an `out` directory with static files ready for deployment.

## Deployment to GitHub Pages

### Step 1: Push Code to GitHub

1. Create a new repository on GitHub (e.g., `NutriHeal`)
2. Initialize git (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add your remote and push:
```bash
git remote add origin https://github.com/your-username/NutriHeal.git
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select `gh-pages` / `/(root)`
   - **Folder**: Select `/(root)`
4. Click **Save**

### Step 3: Set Up GitHub Actions (Automatic Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
        env:
          BASE_PATH: '/NutriHeal'
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: github-pages
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 4: Update Base Path (Optional)

If deploying to a subfolder (e.g., `yourusername.github.io/NutriHeal`), update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/NutriHeal',  // Replace with your repo name
};
```

### Step 5: Deploy

Push your code:
```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

The site will be available at: `https://your-username.github.io/NutriHeal/`

## Project Structure

```
/ nutrieal
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with all sections
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx      # Sticky navigation
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── DietPlans.tsx  # Diet plans section (12 cards)
│   ├── Benefits.tsx   # Benefits with animated counters
│   ├── WhyChooseUs.tsx # Why choose us section
│   ├── Testimonials.tsx # Testimonials carousel
│   ├── ConsultationForm.tsx # Lead capture form
│   ├── FAQ.tsx        # FAQ accordion
│   ├── FinalCTA.tsx   # Final call-to-action
│   ├── Footer.tsx    # Footer with links
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   └── ScrollProgress.tsx # Scroll progress indicator
├── public/            # Static assets
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind config (if needed)
├── tsconfig.json     # TypeScript config
└── package.json      # Dependencies
```

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #2D5A3D;        /* Main green */
  --primary-light: #4A7C59;
  --primary-dark: #1E3D2A;
  --background: #FDFBF7;     /* Warm off-white */
  /* ... more variables */
}
```

### Contact Information
Update the following files:
- `components/Footer.tsx` - Contact details
- `components/ConsultationForm.tsx` - Form destination
- `components/WhatsAppButton.tsx` - WhatsApp number

### Form Backend
The consultation form is ready for integration. Replace the mock submission in `ConsultationForm.tsx` with:

```typescript
// Example Supabase integration
const { data, error } = await supabase
  .from('consultations')
  .insert([formData]);
```

## License

This project is for demonstration purposes.

---

Built with love for NutriHeal by Dt. Yogita Bansal