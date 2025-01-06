// import { Container, Typography, Box } from "@mui/material";
// import { Grid } from "@mui/system";
// import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "Memory Game Web App",
//     description: "A fun memory game built with React and TDD principles.",
//     github: "https://github.com/Nondumison/memory-game",
//   },
//   {
//     title: "Intro to Redux for Home Automation",
//     description: "Redux-based IoT project for managing smart devices.",
//     github: "https://github.com/Nondumison/home-automation-redux",
//   },
// ];

// const Projects = () => (
//   <Container sx={{ my: 5 }}>
//     <Typography variant="h2" align="center" sx={{ mb: 4 }}>
//       Projects
//     </Typography>
//     <Grid
//       container
//       spacing={4}
//       justifyContent="center"
//       sx={{
//         padding: 2,
//       }}
//     >
//       {projects.map((project, index) => (
//         <Grid item key={index} xs={12} sm={6} md={4}>
//           <ProjectCard {...project} />
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// );

// export default Projects;

import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

const projects = [
  {
    title: "Memory Game",
    description: "A fun and interactive memory game built with React.",
    image: "https://via.placeholder.com/300x200", // Replace with actual project image URL
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/memory-game",
  },
  {
    title: "Home Automation App",
    description: "Manage smart devices using Redux and IoT.",
    image: "https://via.placeholder.com/300x200",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/home-automation-redux",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform with secure payment integration.",
    image: "https://via.placeholder.com/300x200",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/e-commerce-platform",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio website showcasing my work.",
    image: "https://via.placeholder.com/300x200",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/portfolio-website",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: "https://via.placeholder.com/300x200",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/weather-app",
  },
  {
    title: "Task Manager",
    description: "A productivity app to manage daily tasks efficiently.",
    image: "https://via.placeholder.com/300x200",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/task-manager",
  },
];

const Projects = () => (
  <Container sx={{ py: 8 }}>
    <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 600 }}>
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0 6px 30px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ height: 200 }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                href={project.link}
                target="_blank"
                startIcon={<OpenInNew />}
                sx={{
                  "&:hover": {
                    color: "#663187",
                  },
                }}
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="secondary"
                href={project.github}
                target="_blank"
                startIcon={<GitHub />}
                sx={{
                  "&:hover": {
                    color: "#663187",
                  },
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
