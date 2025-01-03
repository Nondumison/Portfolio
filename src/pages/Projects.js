import { Container, Typography, Box } from "@mui/material";
import { Grid } from "@mui/system";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Memory Game Web App",
    description: "A fun memory game built with React and TDD principles.",
    github: "https://github.com/Nondumison/memory-game",
  },
  {
    title: "Intro to Redux for Home Automation",
    description: "Redux-based IoT project for managing smart devices.",
    github: "https://github.com/Nondumison/home-automation-redux",
  },
];

const Projects = () => (
  <Container sx={{ my: 5 }}>
    <Typography variant="h2" align="center" sx={{ mb: 4 }}>
      Projects
    </Typography>
    <Grid
      container
      spacing={4}
      justifyContent="center"
      sx={{
        padding: 2,
      }}
    >
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
