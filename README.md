# BlueCollar - Gig Economy Platform

A modern, full-stack gig economy platform that connects clients who need help with tasks to skilled local workers. Built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

### Core Functionality

- **Dual User Roles**
  - **Clients**: Post tasks, review applications, hire workers, make payments, leave reviews
  - **Workers**: Browse tasks, submit applications, complete jobs, receive payments, build reputation

- **Task Management**
  - Post detailed task descriptions with budget, location, and timeline
  - Browse and search available tasks by category
  - Real-time task status tracking (Open, Assigned, In Progress, Completed, Cancelled)
  - Support for multiple categories: Cleaning, Moving, Handyman, Delivery, Lawn Care, Assembly, Painting, Plumbing, and more

- **Application & Booking System**
  - Workers can apply for tasks with proposed rates and messages
  - Clients can review multiple applications
  - Booking status management (Pending, Accepted, Declined, Completed, Cancelled)

- **Authentication & Authorization**
  - Secure authentication with NextAuth.js
  - Role-based access control (Client, Worker, Admin)
  - Protected routes and API endpoints

### Platform Features

- **User Profiles**
  - Client profiles with task history
  - Worker profiles with skills, hourly rate, bio, and reviews
  - Avatar support and verification badges

- **Reviews & Ratings**
  - Two-way rating system
  - 1-5 star ratings with written reviews
  - Reputation building for workers

- **Secure Payments** (Schema ready, implementation pending)
  - Stripe integration
  - Escrow-style payment system
  - Payment history tracking

- **Messaging System** (Schema ready, implementation pending)
  - In-app messaging between clients and workers
  - Task-specific conversations
  - Real-time notifications with Pusher

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications
- **date-fns** - Date formatting
- **Zustand** - State management (ready for use)

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Primary database
- **NextAuth.js** - Authentication
- **bcryptjs** - Password hashing

### Payments & Real-time
- **Stripe** - Payment processing (ready to integrate)
- **Pusher** - Real-time messaging (ready to integrate)

## Database Schema

The platform uses a comprehensive database schema with the following models:

- **User** - Client, Worker, and Admin accounts
- **Task** - Job postings with all details
- **Booking** - Worker applications for tasks
- **Message** - In-app communication
- **Review** - Ratings and feedback
- **Payment** - Transaction records

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- (Optional) Stripe account for payments
- (Optional) Pusher account for real-time features

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BlueCollar-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```

   Required variables:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/bluecollar"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

   Optional (for full functionality):
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."

   NEXT_PUBLIC_PUSHER_APP_KEY="your_pusher_key"
   NEXT_PUBLIC_PUSHER_CLUSTER="us2"
   PUSHER_APP_ID="your_app_id"
   PUSHER_SECRET="your_pusher_secret"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev --name init

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
BlueCollar-App/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── auth/            # Authentication endpoints
│   │   ├── tasks/           # Task CRUD operations
│   │   └── bookings/        # Booking operations
│   ├── auth/                # Auth pages (login, register)
│   ├── tasks/               # Task pages (list, detail, create)
│   ├── profile/             # User profile pages
│   ├── dashboard/           # Client & Worker dashboards
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   └── providers.tsx        # Context providers
├── components/              # React components
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── ui/                 # Reusable UI components
│   ├── tasks/              # Task-related components
│   ├── auth/               # Auth-related components
│   └── profile/            # Profile components
├── lib/                     # Utility functions
│   ├── prisma.ts           # Prisma client
│   └── auth.ts             # NextAuth configuration
├── prisma/                  # Database
│   └── schema.prisma       # Database schema
├── types/                   # TypeScript type definitions
├── utils/                   # Helper functions
├── public/                  # Static assets
└── package.json            # Dependencies

```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open Prisma Studio (database GUI)
npx prisma migrate dev # Create new database migration
```

## Key Features Implementation Status

✅ **Completed**
- Project setup with Next.js, TypeScript, and Tailwind CSS
- Database schema design with Prisma
- User authentication (login, register) with role-based access
- Task posting and browsing
- Task detail pages with full information
- Worker application system
- Booking management

🚧 **Ready to Implement** (Schema in place)
- User profile pages with edit functionality
- Client dashboard (view posted tasks, manage applications)
- Worker dashboard (view applications, job history)
- In-app messaging system
- Payment integration with Stripe
- Reviews and ratings functionality
- Admin dashboard
- Email notifications
- Image upload for avatars and task photos
- Advanced search and filtering
- Geolocation for nearby tasks
- Worker availability calendar

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Tasks
- `GET /api/tasks` - List all tasks (with filters)
- `POST /api/tasks` - Create new task (Client only)
- `GET /api/tasks/[id]` - Get task details

### Bookings
- `POST /api/bookings` - Apply for a task (Worker only)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.

## Roadmap

- [ ] Complete user profile pages
- [ ] Implement client and worker dashboards
- [ ] Add real-time messaging with Pusher
- [ ] Integrate Stripe payments
- [ ] Build reviews and ratings system
- [ ] Create admin dashboard
- [ ] Add email notifications
- [ ] Implement image uploads
- [ ] Add geolocation features
- [ ] Mobile app (React Native)

## Screenshots

(Add screenshots here once the application is running)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI powered by [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Database ORM by [Prisma](https://www.prisma.io/)
