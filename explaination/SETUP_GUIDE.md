# MERN Portfolio Setup and Usage Guide

## Quick Start

### Step 1: Install All Dependencies
```bash
npm run install-all
```

This will install dependencies for both backend and frontend.

### Step 2: Setup MongoDB
- **Local MongoDB**: Make sure MongoDB is running on your system
- **Cloud MongoDB (Atlas)**: 
  1. Create a free account at https://www.mongodb.com/cloud/atlas
  2. Create a cluster and get your connection string
  3. Update `backend/.env` with your MongoDB URI

### Step 3: Configure Environment Variables

**Backend (`backend/.env`)**:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

**Frontend (`client/.env.local`)** (optional):
```
REACT_APP_API_URL=http://localhost:5000
```

### Step 4: Run the Application

**Option A: Run both servers simultaneously** (requires `concurrently`)
```bash
npm run dev
```

**Option B: Run servers separately**

Terminal 1 - Start Backend:
```bash
npm run server
```

Terminal 2 - Start Frontend:
```bash
npm run client
```

### Step 5: Access the Application
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Adding Your Portfolio Data

You can add projects and portfolio data in three ways:

### 1. Using the API with Postman/Insomnia

**Create a Project:**
```
POST http://localhost:5000/api/projects
Content-Type: application/json

{
  "title": "Your Project Title",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "link": "https://project-link.com",
  "github": "https://github.com/username/project"
}
```

**Send Contact Message:**
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "Your Name",
  "email": "your@email.com",
  "subject": "Subject",
  "message": "Your message"
}
```

### 2. Using MongoDB Compass
- Connect to your MongoDB database
- Navigate to the `portfolio` database
- Insert documents directly into `projects` or `contacts` collections

### 3. Frontend Integration
- The contact form on the frontend automatically saves to MongoDB
- Default projects are loaded from the database or fallback to hardcoded values

## File Structure Explanation

### Backend Structure
```
backend/
├── models/           # Database schemas
│   ├── Portfolio.js  # Portfolio information model
│   ├── Project.js    # Project model
│   └── Contact.js    # Contact submissions model
├── controllers/      # Business logic
│   ├── portfolioController.js
│   ├── projectController.js
│   └── contactController.js
├── routes/           # API endpoints
│   ├── portfolioRoutes.js
│   ├── projectRoutes.js
│   └── contactRoutes.js
└── server.js         # Express app configuration
```

### Frontend Structure
```
client/src/
├── components/       # Reusable React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Projects.js
│   ├── Contact.js
│   └── Footer.js
├── App.js           # Main app component
└── index.js         # React entry point
```

## Common Commands

### Backend
```bash
cd backend
npm start          # Run in production
npm run dev        # Run with nodemon (auto-reload)
```

### Frontend
```bash
cd client
npm start          # Start dev server
npm run build      # Create production build
npm test           # Run tests
```

## Deployment Options

### Deploy Backend
- **Heroku**: `git push heroku main`
- **Railway.app**: Connect your GitHub repo
- **Render.com**: Connect your GitHub repo
- **AWS/Azure**: Use their respective deployment services

### Deploy Frontend
- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: `npm run build` and push to gh-pages branch

## Troubleshooting

### Issue: "Cannot GET /api/projects"
**Solution**: Make sure backend server is running on port 5000

### Issue: "CORS error"
**Solution**: The backend already has CORS enabled. If following different domains, update:
```javascript
// In backend/server.js
app.use(cors({
  origin: 'http://your-frontend-domain',
  credentials: true
}));
```

### Issue: "MongooseError: Cannot connect to MongoDB"
**Solution**: 
1. Check if MongoDB is running: `mongod`
2. Verify connection string in `.env`
3. For Atlas: Whitelist your IP in Atlas console

### Issue: "Port 5000 is already in use"
**Solution**: 
```bash
# Kill process on port 5000
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:5000 | xargs kill -9
```

## Features Implemented

✅ Responsive portfolio design
✅ Backend API with Express
✅ MongoDB database integration
✅ Contact form with message storage
✅ Project management system
✅ Smooth animations
✅ Mobile-friendly UI
✅ Real-time data fetching

## Next Steps

1. Add more projects to showcase your work
2. Customize the colors and styling
3. Add your own images and content
4. Deploy to production
5. Add authentication if needed
6. Implement image upload feature
7. Add blog section

## Support

For issues or questions:
1. Check the README.md in project root
2. Review error messages in browser console
3. Check MongoDB connection
4. Verify all dependencies are installed

Happy coding! 🚀
