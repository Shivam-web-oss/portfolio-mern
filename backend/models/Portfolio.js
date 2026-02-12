import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  about: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  projects: [{
    title: String,
    description: String,
    image: String,
    link: String
  }],
  skills: [String],
  social: {
    github: String,
    linkedin: String,
    twitter: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;
