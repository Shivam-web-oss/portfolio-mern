# MERN Portfolio

A full-stack MERN (MongoDB, Express, React, Node.js) portfolio application with backend and frontend integrated.

## Project Structure

```
portfolio mern/
├── backend/          # Node.js + Express backend
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── controllers/  # Route controllers
│   ├── server.js     # Main server file
│   ├── package.json
│   └── .env
└── client/           # React frontend
    ├── src/
    │   ├── components/  # React components
    │   ├── App.js
    │   └── index.js
    ├── public/
    ├── package.json
    └── .env
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

## Installation

### Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Contact
- `GET /api/contact` - Get all contacts
- `POST /api/contact` - Send contact message
- `DELETE /api/contact/:id` - Delete contact

### Portfolio
- `GET /api/portfolio` - Get portfolio info
- `POST /api/portfolio` - Create/update portfolio info

## Features

- **Responsive Design**: Mobile-friendly portfolio
- **Smooth Animations**: Engaging UI with animations
- **Contact Form**: Integrated contact form with MongoDB storage
- **Project Management**: Add, edit, and delete projects
- **Type-safe**: Well-structured code with proper validation
- **Real-time Updates**: Fetch data from database in real-time

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

### Frontend
- React 18
- Axios for API calls
- CSS3 for styling
- React Hooks for state management

## Running Both Servers

You can run both backend and frontend using the following approach:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm start
```

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

### Frontend (optional .env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Default Portfolio Data

The portfolio comes pre-configured with sample data from your existing HTML portfolio:
- Name: Shivam Gupta
- Three sample projects
- Contact information

You can modify this data through the MongoDB database or the API endpoints.

## Building for Production

### Frontend Build
```bash
cd client
npm run build
```

### Backend Production
Update `.env` with:
```
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
PORT=5000
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or provide a valid remote connection string
- Update `MONGODB_URI` in `.env`

### Port Already in Use
- Change the `PORT` in backend `.env`
- For React, use: `PORT=3001 npm start`

### CORS Issues
- Backend already has CORS enabled for development
- Update `CORS` settings in `server.js` for production

## Future Enhancements

- User authentication
- Image upload functionality
- Blog section
- Dark mode
- Analytics integration
- Email notifications

## License

ISC

## Author

Shivam Gupta
