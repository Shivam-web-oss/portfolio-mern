# ⚡ MERN Portfolio - Quick Reference Card

## 📌 Project Location
```
C:\Users\Pravin Kankane\OneDrive\Desktop\portfolio mern
```

---

## 🎯 Get Started in 3 Commands

```bash
# 1. Install everything
npm run install-all

# 2. Start MongoDB (separate terminal)
mongod

# 3. Run the app
npm run dev
```

**Open:** http://localhost:3000

---

## 📂 Important Files

| File | Purpose | Action |
|------|---------|--------|
| `START_HERE.md` | Overview | **Read first!** |
| `backend/.env` | Config | **Update for MongoDB Atlas** |
| `backend/server.js` | Express app | API server |
| `client/src/App.js` | React app | Main component |
| `package.json` | Scripts | Quick commands |

---

## 🚀 Startup Commands

```bash
# Run everything at once
npm run dev

# Or in separate terminals:
npm run server        # Terminal 1
npm run client        # Terminal 2
```

---

## 🔗 Access URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |
| API Health | http://localhost:5000/api/health |

---

## 🐛 Common Issues & Fixes

### MongoDB won't connect
```bash
# Start MongoDB
mongod

# Test connection
cd backend && npm run test-connection
```

### Port already in use
```bash
# Change PORT in backend/.env
PORT=5001
```

### npm install fails
```bash
npm cache clean --force
npm install
```

---

## 📋 What Was Created

✅ **Backend**
- Express server with 9 API endpoints
- MongoDB models & controllers
- Connection testing script
- Database seeding script

✅ **Frontend**
- 6 React components
- Responsive design
- Contact form
- Dynamic project loading

✅ **Database**
- 3 MongoDB collections
- Sample data ready
- Cloud-compatible

✅ **Documentation**
- 5 guide documents
- Complete API reference
- Troubleshooting tips

---

## 🎨 Customize

### Update Colors
`client/src/App.css` - Change `--primary-color`

### Add Projects
Use API or MongoDB directly

### Change Content
Edit database or seed.js

---

## 📈 Project Stats

```
40+ Files Created
2000+ Lines of Code
9 API Endpoints
6 React Components
3 Database Models
```

---

## 💾 Database Setup

### Option 1: Local MongoDB
```bash
mongod
```

### Option 2: MongoDB Atlas (Cloud)
1. Create account: https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Copy connection string
4. Update `backend/.env`

---

## 🧪 Test Everything

```bash
# 1. Test MongoDB
cd backend
npm run test-connection

# 2. Load sample data
npm run seed

# 3. Start app
npm run dev

# 4. open http://localhost:3000
```

---

## 📚 Documentation Files

```
READ IN ORDER:

1. START_HERE.md          (Overview)
2. QUICKSTART.md          (5-min setup)
3. COMPLETE_GUIDE.md      (Detailed)
4. SETUP_GUIDE.md         (Troubleshooting)
5. PROJECT_SUMMARY.md     (Complete summary)
```

---

## 🔄 API Endpoints

### Get Projects
```
GET /api/projects
```

### Create Project
```
POST /api/projects
Body: {title, description, technologies, link, github}
```

### Submit Contact
```
POST /api/contact
Body: {name, email, subject, message}
```

### More Endpoints
See SETUP_GUIDE.md for complete API reference

---

## 🎓 Tech Stack

```
Backend:    Node.js + Express + MongoDB
Frontend:   React 18 + Axios + CSS3
Database:   MongoDB (local or Atlas)
Tools:      Nodemon, Concurrently, Mongoose
```

---

## 🚀 Deployment

When ready:
- Frontend → Vercel / Netlify
- Backend → Railway / Render
- Database → MongoDB Atlas

---

## ✅ Checklist

- [ ] Node.js installed?
- [ ] Terminal in project folder?
- [ ] Ran `npm run install-all`?
- [ ] MongoDB running?
- [ ] Terminal shows "Server running on port 5000"?
- [ ] Browser shows http://localhost:3000?

---

## 💡 Next Steps

1. Read `START_HERE.md`
2. Run `npm run install-all`
3. Start MongoDB
4. Run `npm run dev`
5. Open http://localhost:3000
6. Test contact form
7. Customize your content

---

## 📞 Need Help?

1. Check browser console (F12)
2. Check terminal output
3. Read COMPLETE_GUIDE.md
4. Run `npm run test-connection`
5. Verify MongoDB is running

---

## 🎉 You Have Everything!

Your MERN portfolio is **complete and ready to use**.

Just run the 3 commands above and start coding! 🚀

---

**Version:** 1.0.0
**Stack:** MERN (MongoDB, Express, React, Node.js)
**Status:** ✅ Ready to Deploy
