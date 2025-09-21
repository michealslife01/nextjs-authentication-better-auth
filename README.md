# NextJS Authentication with Better Auth

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/-Better%20Auth-00D4AA?style=for-the-badge&logo=better-auth&logoColor=white" alt="Better Auth" />
    <img src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </div>
</div>

A modern authentication system built with Next.js 15, Better Auth, Prisma, and PostgreSQL.

## Features

- Email/password authentication
- Google & GitHub OAuth
- Protected routes with middleware
- Responsive UI with Tailwind CSS
- Type-safe with TypeScript
- Session management
- Production ready

## Tech Stack

- **Next.js 15** - App Router
- **Better Auth** - Authentication library
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

## Quick Start

1. **Clone and install:**
```bash
git clone https://github.com/michealslife01/nextjs-authentication-better-auth.git
cd nextjs-authentication-better-auth/starter-code
npm install
```

2. **Set up environment:**
Create `.env.local`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/better_auth_db"
BETTER_AUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

3. **Setup database:**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. **Run development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
starter-code/
├── app/
│   ├── api/auth/[...all]/route.ts    # Auth API routes
│   ├── auth/                         # Auth pages
│   ├── dashboard/                    # Protected dashboard
│   └── components/                   # UI components
├── lib/
│   ├── actions/auth-actions.ts       # Server actions
│   ├── auth.ts                       # Auth config
│   └── generated/prisma/             # Prisma client
└── prisma/
    └── schema.prisma                 # Database schema
```

## OAuth Setup

### Google OAuth
1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create OAuth 2.0 credentials
3. Add redirect URI: `http://localhost:3000/api/auth/callback/google`

### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`

## Deployment

Deploy on Vercel:
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

## License

MIT