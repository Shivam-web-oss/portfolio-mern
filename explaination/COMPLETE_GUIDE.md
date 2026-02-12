# MERN Portfolio - Complete Setup & Execution Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Installation Steps](#installation-steps)
4. [Running the Application](#running-the-application)
5. [Database Setup](#database-setup)
6. [Testing the Setup](#testing-the-setup)
7. [API Usage](#api-usage)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This is a **Full-Stack MERN Portfolio Application** that:
- Converts your static HTML portfolio into a dynamic, database-driven web app
- Features a React frontend for interactive UI
- Has an Express.js backend with RESTful APIs
- Uses MongoDB for persistent data storage
- Includes a contact form that stores messages in the database
- Manages projects dynamically from the database

### Architecture Flow

```
┌─────────────────────────────────────────────────────────┐
│                     Frontend (React)                     │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Components: Navbar, Hero, About, Projects,       │   │
│  │ Contact, Footer                                  │   │
│  │ State Management: React Hooks                    │   │
│  │ HTTP Client: Axios                               │   │
│  └──────────────────────────────────────────────────┘   │
│                 (Port 3000)                             │
└─────────────────────────────────────────────────────────┘
                         ↕ (HTTP)
┌─────────────────────────────────────────────────────────┐
│                  Backend (Express.js)                    │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Routes: /api/projects, /api/contact,             │   │
│  │ /api/portfolio                                   │   │
│  │ Controllers: Business Logic                      │   │
│  │ Models: MongoDB Schemas                          │   │
│  └──────────────────────────────────────────────────┘   │
│                 (Port 5000)                             │
└─────────────────────────────────────────────────────────┘
                         ↕ (MongoDB Driver)
┌─────────────────────────────────────────────────────────┐
│              Database (MongoDB)                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Collections: projects, contacts, portfolios      │   │
│  │ Documents: JSON-based data                       │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Prerequisites

### Required Software
- **Node.js** v14 or higher (Download from https://nodejs.org)
- **npm** (comes with Node.js)
- **MongoDB** (local or cloud)

### Optional Tools (Recommended)
- **MongoDB Compass** (GUI for MongoDB)
- **Postman** or **Insomnia** (API testing)
- **VS Code** (Code editor)

### Verify Installation
```bash
# Check Node.js version
node --version  # Should show v14+

# Check npm version
npm --version   # Should show 6+
```

---

## 🚀 Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd "C:\Users\Pravin Kankane\OneDrive\Desktop\portfolio mern"
```

### Step 2: Install All Dependencies
```bash
npm run install-all
```

This command:
- Installs backend dependencies (Express, MongoDB, etc.)
- Installs frontend dependencies (React, Axios, etc.)
- Takes 2-5 minutes depending on internet speed

**What's Installed:**
- Backend: express, mongoose, cors, dotenv, nodemon
- Frontend: react, react-dom, axios, react-scripts

### Step 3: Setup MongoDB

#### Option A: Local MongoDB (Recommended for Development)

1. **Download MongoDB Community Edition**
   - Visit: https://www.mongodb.com/try/download/community
   - Select your OS
   - Run installer with default settings

2. **Start MongoDB Service**
   ```bash
   # Windows (PowerShell) - if installed as service
   net start MongoDB
   
   # Or manually run mongod
   mongod
   ```

3. **Verify MongoDB is Running**
   ```bash
   # In another terminal
   mongo
   # Should open MongoDB shell
   ```

#### Option B: MongoDB Atlas (Cloud - Recommended for Production)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up with email

2. **Create Cluster**
   - Click "Create" button
   - Choose "Free" tier
   - Select your region
   - Create cluster (takes 1-2 minutes)

3. **Add Connection String**
   - Click "Connect"
   - Choose "Drivers"
   - Copy connection string
   - Replace `password` with your database password

4. **Update .env File**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

5. **Whitelist Your IP**
   - In Atlas: Network Access → IP Whitelist
   - Add your IP address (or 0.0.0.0 for development)

### Step 4: Configure Environment Variables

**Backend Configuration** (`backend/.env`):
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

**Frontend Configuration** (`client/.env.local` - optional):
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🏃 Running the Application

### Method 1: Run Both Servers in One Terminal (Recommended)
```bash
npm run dev
```

This uses `concurrently` to run both servers simultaneously.

**Output should show:**
```
[0] Listening on port 5000
[1] webpack compiled
[1] Compiled successfully!
[1] On Your Network: http://localhost:3000
```

### Method 2: Run Servers in Separate Terminals

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```

Expected output:
```
Server running on port 5000
MongoDB connected
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```

Expected output:
```
Compiled successfully!
On Your Network:  http://localhost:3000
```

### Method 3: Production Mode
```bash
# Build frontend
cd client
npm run build

# Start backend on production
cd ../backend
NODE_ENV=production npm start
```

---

## 💾 Database Setup

### Seed Initial Data

To populate the database with sample projects:

```bash
cd backend
npm run seed
```

**What This Does:**
- Connects to MongoDB
- Creates 3 sample projects from your original portfolio
- Displays confirmation messages

**Output:**
```
✅ Connected to MongoDB
🗑️  Cleared existing projects
✅ Inserted 3 sample projects

📊 Sample Projects Added:
- Task Manager App
- Weather API App
- Portfolio Website

✅ Database seeding completed successfully!
```

### Test MongoDB Connection

```bash
cd backend
npm run test-connection
```

**Expected Output:**
```
🔍 Testing MongoDB Connection...

✅ MongoDB Connection Successful!
📊 Database Status:
   Database: portfolio
   Host: localhost
   Port: 27017

📦 Collections (0):

✅ Test completed successfully!
```

---

## 🧪 Testing the Setup

### 1. Access Application
- **Frontend**: Open http://localhost:3000 in browser
- **Backend Health**: http://localhost:5000/api/health
- **All Projects**: http://localhost:5000/api/projects

### 2. Test Contact Form
1. Go to http://localhost:3000
2. Scroll to "Contact Me" section
3. Fill form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test

4. Click "Send Message"
5. Check success message

### 3. Verify Database
```bash
# Open MongoDB shell
mongo

# List databases
show dbs

# Use portfolio database
use portfolio

# Show collections
show collections

# View projects
db.projects.find()

# View contacts
db.contacts.find()
```

---

## 🔌 API Usage

### Test with Postman/Insomnia

#### 1. Get All Projects
```
GET http://localhost:5000/api/projects
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Task Manager App",
    "description": "...",
    "technologies": ["React", "Node.js"],
    "createdAt": "2024-01-15T10:30:00Z"
  }
]
```

#### 2. Create New Project
```
POST http://localhost:5000/api/projects
Content-Type: application/json

{
  "title": "E-commerce Platform",
  "description": "Full-stack e-commerce with payment integration",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "link": "https://ecommerce.example.com",
  "github": "https://github.com/username/ecommerce"
}
```

#### 3. Submit Contact Form
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Interested in your services"
}
```

#### 4. Get All Contact Messages
```
GET http://localhost:5000/api/contact
```

#### 5. Delete Contact Message
```
DELETE http://localhost:5000/api/contact/{id}
```

---

## 🐛 Troubleshooting

### Issue 1: MongoDB Connection Failed

**Error Message:**
```
MongooseError: Cannot connect to MongoDB
```

**Solutions:**
1. **Check if MongoDB is running:**
   ```bash
   # Windows
   Get-Process | Where-Object {$_.Name -like "*mongo*"}
   
   # Mac/Linux
   lsof -i :27017
   ```

2. **Start MongoDB:**
   ```bash
   mongod  # For local MongoDB
   ```

3. **Verify connection string:**
   - Edit `backend/.env`
   - Check `MONGODB_URI` value
   - For local: `mongodb://localhost:27017/portfolio`

4. **Check firewall:**
   - Ensure MongoDB port (27017) is not blocked

### Issue 2: Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**
```bash
# Find process on port 5000
netstat -ano | findstr :5000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001  # Use different port
```

### Issue 3: CORS Error in Browser

**Error Message:**
```
Access to XMLHttpRequest has been blocked by CORS policy
```

**Solutions:**
1. **Ensure backend is running** on port 5000
2. **Check proxy setting** in `client/package.json`:
   ```json
   "proxy": "http://localhost:5000"
   ```

### Issue 4: npm install Fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -r node_modules

# Reinstall
npm install
```

### Issue 5: React won't start

**Solution:**
```bash
# Clear React cache
rm -r client/node_modules client/package-lock.json

# Reinstall
cd client
npm install
npm start
```

### Issue 6: MongoDB Atlas Connection Issues

1. **Check connection string format:**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

2. **Whitelist IP Address:**
   - Atlas → Network Access
   - Add current IP or 0.0.0.0

3. **Verify credentials:**
   - Username and password are correct
   - Database name is 'portfolio'

---

## 📊 Useful Commands Reference

### Backend Commands
```bash
cd backend

npm install              # Install dependencies
npm start               # Run production server
npm run dev             # Run with auto-reload
npm run test-connection # Test MongoDB connection
npm run seed            # Populate sample data
```

### Frontend Commands
```bash
cd client

npm install             # Install dependencies
npm start              # Start dev server
npm run build          # Create production build
npm test               # Run tests
```

### Database Commands
```bash
mongod                 # Start MongoDB service
mongo                  # Open MongoDB shell
# In MongoDB shell:
use portfolio          # Switch to database
db.projects.find()     # View all projects
db.contacts.find()     # View all contacts
db.projects.deleteMany({})  # Clear projects
```

---

## 🎉 Success Checklist

- [ ] Node.js and npm installed
- [ ] MongoDB installed and running
- [ ] All dependencies installed (`npm run install-all`)
- [ ] `.env` files configured
- [ ] Backend starts without errors
- [ ] Frontend loads at http://localhost:3000
- [ ] Projects display from database
- [ ] Contact form works and submits to database
- [ ] Can see data in MongoDB

---

## 📚 File Structure Details

```
portfolio mern/
├── backend/
│   ├── models/          # Database schemas
│   │   ├── Project.js   # Project schema
│   │   ├── Contact.js   # Contact schema
│   │   └── Portfolio.js # Portfolio schema
│   ├── routes/          # API route definitions
│   │   ├── projectRoutes.js
│   │   ├── contactRoutes.js
│   │   └── portfolioRoutes.js
│   ├── controllers/     # Business logic
│   │   ├── projectController.js
│   │   ├── contactController.js
│   │   └── portfolioController.js
│   ├── server.js        # Express app setup
│   ├── seed.js          # Database seeding script
│   ├── testConnection.js # Connection test script
│   ├── package.json     # Dependencies
│   └── .env             # Environment variables
├── client/
│   ├── src/
│   │   ├── components/  # React components with CSS
│   │   │   ├── Navbar.js / Navbar.css
│   │   │   ├── Hero.js / Hero.css
│   │   │   ├── About.js / About.css
│   │   │   ├── Projects.js / Projects.css
│   │   │   ├── Contact.js / Contact.css
│   │   │   └── Footer.js / Footer.css
│   │   ├── App.js       # Main app component
│   │   ├── App.css      # Global styles
│   │   ├── index.js     # React entry point
│   │   └── index.css    # Global CSS
│   ├── public/
│   │   └── index.html   # HTML template
│   └── package.json     # Dependencies
├── package.json         # Root scripts
├── README.md            # Project overview
├── QUICKSTART.md        # Quick start guide
└── SETUP_GUIDE.md       # Detailed setup
```

---

## 🚀 Next Steps After Setup

1. **Customize Content**
   - Update your portfolio data
   - Add more projects
   - Customize colors in CSS files

2. **Add Features**
   - Blog section
   - Image uploads
   - User authentication
   - Dark mode

3. **Deploy Application**
   - Frontend: Vercel, Netlify, GitHub Pages
   - Backend: Heroku, Railway, Render
   - Database: MongoDB Atlas (already cloud)

---

## 💬 Need Help?

1. Check error messages in terminal
2. Look at browser console (F12)
3. Verify all ports are accessible
4. Ensure MongoDB is running
5. Check `.env` file configuration

---

## 🎓 Learning Resources

- **MongoDB**: https://docs.mongodb.com
- **Express.js**: https://expressjs.com
- **React**: https://react.dev
- **Node.js**: https://nodejs.org/en/docs
- **Mongoose**: https://mongoosejs.com

---

**Version: 1.0.0**
**Last Updated: February 2024**

Good luck with your MERN portfolio! 🚀
