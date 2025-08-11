# GymHub Backend – Update A (Postgres)

## Deploy (Railway)
1) Create Postgres → copy DATABASE_URL.
2) New Service from GitHub (this repo).
3) Variables: PORT=3000, NODE_ENV=production, JWT_SECRET=..., DATABASE_URL=..., FRONTEND_URL=https://<your-frontend>.vercel.app
4) Deploy, then open Shell:
   npx prisma generate
   npx prisma migrate deploy
   npm run prisma:seed

## Endpoints
GET /               → health
GET/POST /users     → list/create users
GET/POST /tiers     → list/create membership tiers
POST    /attendance/checkin  → { userId, deviceId }
POST    /attendance/checkout → { userId }
GET/POST /payments          → cash records
GET/POST /payments/invoices → invoices
GET/POST /body              → body metrics
GET/POST /prs               → PRs
GET/POST /exercises         → exercise library
POST    /auth/dev-login     → returns JWT (staging only)