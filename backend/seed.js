import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const sampleProjects = [
  {
    title: 'Task Manager App',
    description: 'A comprehensive full-stack application featuring secure user authentication, intuitive task management, and persistent data storage. Built with a responsive design, it allows users to create, organize, and track their tasks efficiently across multiple devices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://example.com/task-manager',
    github: 'https://github.com/username/task-manager'
  },
  {
    title: 'Weather API App',
    description: 'A dynamic weather application that provides real-time weather updates and forecasts by integrating with the OpenWeather API. Features location-based searches, detailed meteorological data, and an interactive user interface for seamless weather information access.',
    technologies: ['React', 'API Integration', 'CSS', 'JavaScript'],
    link: 'https://example.com/weather-app',
    github: 'https://github.com/username/weather-app'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, animated portfolio website showcasing my skills and projects. Built with HTML, CSS, and JavaScript, it features smooth scrolling navigation, responsive design, and engaging animations that provide an excellent user experience across all devices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: 'https://example.com/portfolio',
    github: 'https://github.com/username/portfolio'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('🗑️  Cleared existing projects');

    // Insert sample projects
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${insertedProjects.length} sample projects`);

    console.log('\n📊 Sample Projects Added:');
    insertedProjects.forEach(project => {
      console.log(`- ${project.title}`);
    });

    await mongoose.connection.close();
    console.log('\n✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Database seeding failed:', error.message);
    process.exit(1);
  }
};

seedDatabase();
