# 🍽️ Dosa Atelier

A full-stack restaurant website for **Dosa Atelier**, featuring online ordering, table reservations, and a complete admin console for managing the restaurant's day-to-day operations — built as a MERN application with real-time updates.

---

## ✨ Features

### Customer-facing
- Browse the full menu with filtering
- Add items to cart and place orders online
- Order summary and checkout flow
- Table reservation system with date/time selection
- Live order/delivery tracking on an interactive map
- User authentication (register, login, OTP verification, forgot/reset password)
- User profile and order history
- Photo gallery and customer reviews
- About Us and Contact pages
- Fully responsive design

### Admin console
- Central dashboard with key metrics
- Menu management (add, edit, filter menu items)
- Order management and live order feed (via WebSockets)
- Reservation management, including walk-in bookings
- Table availability management
- Inventory tracking
- Bill generation
- Reports and analytics

---

## 🛠️ Tech Stack

**Frontend**
- React 18 + Vite
- React Router DOM v6
- Tailwind CSS
- Socket.IO Client (real-time updates)
- Firebase (authentication support)
- Leaflet / React Leaflet (live tracking map)
- Recharts (admin analytics charts)
- Axios

**Backend**
- Node.js + Express 5
- MongoDB with Mongoose
- Socket.IO (real-time order/reservation updates)
- JWT-based authentication
- Bcrypt.js (password hashing)
- Nodemailer (emails/OTP)
- Cloudinary + Multer (image uploads)

---

## 📁 Project Structure

```
dosa-atelier/
├── backend/
│   ├── config/          # Cloudinary config
│   ├── controllers/      # Route logic (auth, orders, menu, reservations, etc.)
│   ├── middleware/       # Auth & admin protection middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express route definitions
│   ├── utils/             # Email utility
│   ├── socket.js          # Socket.IO initialization
│   └── server.js          # App entry point
│
└── frontend/
    ├── src/
    │   ├── components/    # Shared UI + admin components
    │   ├── context/        # Auth, Cart, Menu context providers
    │   ├── hooks/           # Custom hooks (inventory, menu, sockets, tables)
    │   ├── pages/            # Route-level pages
    │   ├── services/         # API service layer
    │   └── App.jsx             # Routes & layout
    └── index.html
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB Atlas (or local MongoDB) instance
- A Cloudinary account (for image uploads)
- An email account/app password (for Nodemailer)

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/dosa-atelier.git
cd dosa-atelier
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
FRONTEND_URL=http://localhost:5173
CLOUDINARY_URL=your_cloudinary_url
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
```

Run the backend:
```bash
node server.js
```

### 3. Frontend setup
```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/` with:
```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

Run the frontend:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`, connecting to the API at `http://localhost:5000`.

---

## 📜 Available Scripts

**Frontend** (`frontend/package.json`)
| Command           | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start the Vite development server  |
| `npm run build`    | Build for production                |
| `npm run preview`  | Preview the production build        |

**Backend**
| Command            | Description                    |
|----------------------|-------------------------------|
| `node server.js`    | Start the Express API server   |

---

## 🔌 API Overview

All API routes are prefixed with `/api`:

| Route                | Purpose                              |
|------------------------|--------------------------------------|
| `/api/auth`           | Registration, login, password reset  |
| `/api/otp`             | OTP generation & verification         |
| `/api/menu`            | Menu items                             |
| `/api/cart`             | Cart operations                        |
| `/api/orders`           | Order placement & tracking            |
| `/api/reservations`     | Table reservations                     |
| `/api/tables`           | Table availability                     |
| `/api/walkin`           | Walk-in customer bookings              |
| `/api/inventory-details`| Inventory management                  |
| `/api/bill`             | Bill generation                        |
| `/api/reports`          | Admin analytics & reports              |
| `/api/admin`            | Admin-only operations                  |

---

## 📄 License

This project is proprietary to Dosa Atelier. All rights reserved.