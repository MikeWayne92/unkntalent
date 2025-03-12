# UnknTalent - Premium Design Files Marketplace

A Next.js-based marketplace for premium design files, templates, and resources for creative professionals.

## Features

- Responsive design for all device sizes
- Product browsing and filtering
- User authentication
- Shopping cart functionality
- Checkout process with Stripe integration
- User profiles and order history
- Wishlist functionality

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Database**: SQLite (development), PostgreSQL (production)
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/unkntalent.git
   cd unkntalent
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your own credentials

4. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment to GitHub Pages

This project is configured for deployment to GitHub Pages using GitHub Actions.

### Setup

1. Create a GitHub repository for your project.

2. Push your code to the repository:
   ```bash
   git remote add origin https://github.com/yourusername/unkntalent.git
   git push -u origin main
   ```

3. In your GitHub repository settings, go to Pages and select "GitHub Actions" as the source.

4. The GitHub workflow will automatically build and deploy your site when you push to the main branch.

### Manual Deployment

You can also manually trigger a deployment from the Actions tab in your GitHub repository.

## Project Structure

- `/src/app`: Next.js app router pages and layouts
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions and shared code
- `/prisma`: Database schema and migrations
- `/public`: Static assets like images and fonts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from various marketplaces and e-commerce sites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- SVG placeholders created for development purposes
