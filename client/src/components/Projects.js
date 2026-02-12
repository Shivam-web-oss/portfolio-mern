import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.log('Error fetching projects:', error);
      // Fallback to default projects
      setProjects([
        {
          _id: '1',
          title: 'Task Manager App',
          description: 'A comprehensive full-stack application featuring secure user authentication, intuitive task management, and persistent data storage. Built with a responsive design, it allows users to create, organize, and track their tasks efficiently across multiple devices.'
        },
        {
          _id: '2',
          title: 'Weather API App',
          description: 'A dynamic weather application that provides real-time weather updates and forecasts by integrating with the OpenWeather API. Features location-based searches, detailed meteorological data, and an interactive user interface for seamless weather information access.'
        },
        {
          _id: '3',
          title: 'Portfolio Website',
          description: 'A modern, animated portfolio website showcasing my skills and projects. Built with HTML, CSS, and JavaScript, it features smooth scrolling navigation, responsive design, and engaging animations that provide an excellent user experience across all devices.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="projects-container">
          {projects.map(project => (
            <div key={project._id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
