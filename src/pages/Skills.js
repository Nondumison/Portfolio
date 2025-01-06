import React from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions, // Add this import
  Avatar,
  IconButton,
} from "@mui/material";

import { ReactTyped as Typed } from "react-typed";
import { Fade, Slide } from "react-awesome-reveal";
import { GitHub, LinkedIn, Email, OpenInNew } from "@mui/icons-material";

// Projects Data
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
];

const Skills = () => (
  <Box
    sx={{
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      color: "#fff",
      minHeight: "100vh",
      py: 6,
      px: 3,
    }}
  >
    <Container>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 8,
          py: 6,
          backgroundImage: "linear-gradient(to right, #663187, #302b63)",
          borderRadius: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: "3.5rem" }}>
          Nondumiso Nkosi
        </Typography>
        <Typed
          strings={[
            "Frontend Developer",
            "Web Developer",
            "Fullstack Developer",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            display: "block",
            marginTop: "10px",
          }}
        />
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            href="/Nondumiso_Nkosi_CV.pdf"
            download
            sx={{
              mx: 2,
              backgroundColor: "#663187",
              "&:hover": { backgroundColor: "#562774" },
            }}
          >
            Download CV
          </Button>
          <Button
            variant="contained"
            href="https://github.com/Nondumison"
            target="_blank"
            sx={{
              mx: 2,
              backgroundColor: "#11273d",
              "&:hover": { backgroundColor: "#663187" },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/nondumiso-nkosi/"
            target="_blank"
            sx={{
              mx: 2,
              backgroundColor: "#11273d",
              "&:hover": { backgroundColor: "#663187" },
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>

      {/* Projects Section */}
      <Fade direction="up" triggerOnce>
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 4 }}>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(145deg, #1a1d2f, #2d3250)",
                    color: "#fff",
                    borderRadius: 3,
                    overflow: "hidden",
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
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      startIcon={<OpenInNew />}
                      sx={{
                        backgroundColor: "#663187",
                        "&:hover": { backgroundColor: "#562774" },
                      }}
                    >
                      Live Demo
                    </Button>
                    <Button
                      variant="contained"
                      href={project.github}
                      target="_blank"
                      startIcon={<GitHub />}
                      sx={{
                        backgroundColor: "#663187",
                        "&:hover": { backgroundColor: "#562774" },
                      }}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Skills Section */}
      <Fade direction="up" triggerOnce>
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" align="center" sx={{ mb: 4 }}>
            Key Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { skill: "React.js", icon: "⚛️" },
              { skill: "JavaScript", icon: "💻" },
              { skill: "Material UI", icon: "🎨" },
              { skill: "Node.js", icon: "🌐" },
            ].map((item, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 2,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    background: "linear-gradient(145deg, #11273d, #663187)",
                    color: "#fff",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                >
                  <Typography variant="h3">{item.icon}</Typography>
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    {item.skill}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Contact Section */}
      <Fade direction="up" triggerOnce>
        <Box
          sx={{
            my: 8,
            textAlign: "center",
            py: 6,
            px: 3,
            backgroundColor: "#1B1F3B",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#E4E4E4", mb: 4 }}
          >
            Get in Touch
          </Typography>
          <Box>
            <IconButton
              href="https://github.com/Nondumison"
              target="_blank"
              sx={{ mx: 2, color: "#fff" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/nondumiso-nkosi/"
              target="_blank"
              sx={{ mx: 2, color: "#fff" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:nondumiso.nkosi@example.com"
              sx={{ mx: 2, color: "#fff" }}
            >
              <Email />
            </IconButton>
          </Box>
        </Box>
      </Fade>

      {/* Footer Section */}
      <Box
        sx={{
          mt: 8,
          py: 3,
          textAlign: "center",
          backgroundColor: "#11273d",
          color: "#fff",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Nondumiso Nkosi. All Rights
          Reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Skills;
