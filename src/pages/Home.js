import React from "react";
import {
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { ReactTyped as Typed } from "react-typed";
import { Fade, Slide } from "react-awesome-reveal";
import { GitHub, LinkedIn, Email, OpenInNew } from "@mui/icons-material";

const projects = [
  {
    title: "Memory Game",
    description: "A fun and interactive memory game built with React.",
    image: "/pic5.jpeg",
    link: "https://youtu.be/mV5424onKSE",
    github:
      "https://github.com/Umuzi-org/Nondumiso-Nkosi-222-memory-game-in-vanilla-js-javascript-react",
  },
  {
    title: "NDC Website ",
    description: "Manage smart devices using Redux and IoT.",
    image: "/pic1.png",
    link: "https://nondumison.github.io/project/index.html",
    github:
      "https://github.com/Nondumison/Nondumison.github.io/tree/master/project",
  },
  {
    title: "Recipe Search",
    description: "React and Redux recipe search using recipe API.",
    image: "/pic6.jpeg",
    link: "https://youtu.be/_gLDkFyXXHQ",
    github:
      "https://github.com/Umuzi-org/Nondumiso-Nkosi-532-react-and-redux-recipe-search-part-1-presenting-the-form-javascript-react",
  },
  {
    title: "Property Website",
    description: "A property buying platform with secure login credentials.",
    image: "/pic2.png",
    link: "https://nondumison.github.io/example/index.html",
    github:
      "https://github.com/Nondumison/Nondumison.github.io/tree/master/example",
  },
  {
    title: "Booking Flights",
    description: "A sleek website for booking flights and saving flights.",
    image: "/pic 3.png",
    link: "https://nondumison.github.io/webtest/index.html",
    github:
      "https://github.com/Nondumison/Nondumison.github.io/tree/master/webtest",
  },
  {
    title: "Movie App",
    description: "A React movie app using OpenMovie API.",
    image: "/pic 4.png",
    link: "https://yourproject-link.com",
    github: "https://github.com/Nondumison/movieapp",
  },
];

const Home = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      color: "#fff",
      minHeight: "100vh",
      padding: "3rem 1rem",
    }}
  >
    <Container>
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "3rem",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: 700, fontSize: { xs: "2rem", sm: "3.5rem" } }}
        >
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
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
            fontWeight: 400,
            marginTop: "1rem",
          }}
        />
        <Box sx={{ marginTop: "2rem" }}>
          <Button
            variant="contained"
            href="/_Nondumiso Nkosi_ CV.docx.pdf"
            download
            sx={{
              margin: "0 0.5rem",
              backgroundColor: "#663187",
              color: "#fff",
            }}
          >
            Download CV
          </Button>
          <Button
            variant="contained"
            href="https://github.com/Nondumison"
            target="_blank"
            sx={{
              margin: "0 0.5rem",
              backgroundColor: "#11273d",
              color: "#fff",
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            href="https://www.linkedin.com/in/nondumiso-nkosi/"
            target="_blank"
            sx={{
              margin: "0 0.5rem",
              backgroundColor: "#11273d",
              color: "#fff",
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
      {/* About Section */}
      <Slide direction="left" triggerOnce>
        <Box
          id="about"
          sx={{
            marginBottom: "4rem",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#E4E4E4", marginBottom: "2rem" }}
          >
            What They Say About Me
          </Typography>
          <Card
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              padding: "1.5rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              backgroundColor: "white",
            }}
          >
            <Avatar
              src="/image.jpg"
              alt="Mentor Avatar"
              sx={{
                width: "80px",
                height: "80px",
                margin: "0 auto 1rem",
              }}
            />
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              "Nondumiso is a highly skilled developer with a keen eye for
              detail. Her dedication to creating clean, scalable code is
              unmatched."
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#AFAFAF", textAlign: "center" }}
            >
              — Kera Former Colleague at Eldo Energy
            </Typography>
          </Card>
        </Box>
      </Slide>
      {/* Skills Section */}
      <Fade direction="up" triggerOnce>
        <Box id="skills" sx={{ marginBottom: "4rem" }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: "2rem" }}>
            Key Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { skill: "React.js", icon: "⚛️" },
              { skill: "JavaScript", icon: "💻" },
              { skill: "MUI", icon: "🎨" },
              { skill: "Node.js", icon: "🌐" },
            ].map((item, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Card
                  sx={{
                    textAlign: "center",
                    padding: "2rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    background: "linear-gradient(145deg, #11273d, #663187)",
                    color: "#fff",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <Typography variant="h3">{item.icon}</Typography>
                  <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
                    {item.skill}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>
      {/* Projects Section */}
      <Fade direction="up" triggerOnce>
        <Box id="projects" sx={{ marginBottom: "4rem" }}>
          <Typography variant="h4" align="center" sx={{ marginBottom: "2rem" }}>
            My Projects
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    background: "linear-gradient(145deg, #1a1d2f, #2d3250)",
                    color: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: "200px" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, marginBottom: "8px" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: "center", paddingBottom: "1rem" }}
                  >
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      startIcon={<OpenInNew />}
                      sx={{
                        backgroundColor: "#663187",
                        color: "#fff",
                        marginRight: "1rem",
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
                        color: "#fff",
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
      <Fade direction="up" triggerOnce>
        <div
          id="contact"
          style={{
            textAlign: "center",
            padding: "2rem",
            borderRadius: "8px",
            backgroundColor: "#1B1F3B",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            style={{ color: "#E4E4E4", marginBottom: "1rem" }}
          >
            Get in Touch
          </Typography>
          <Typography variant="h6" style={{ marginBottom: "1rem" }}>
            Connect with me on social platforms or drop me an email!
          </Typography>
          <div>
            <IconButton
              href="https://github.com/Nondumison"
              target="_blank"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/nondumiso-nkosi/"
              target="_blank"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="mailto:nondumiso.nkosi@example.com"
              style={{ color: "#fff", margin: "0 1rem" }}
            >
              <Email />
            </IconButton>
          </div>
        </div>
      </Fade>

      <Box
        sx={{
          backgroundColor: "#24243e",
          color: "#fff",
          padding: "2rem",
          textAlign: "center",
          marginTop: "4rem",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Nondumiso Nkosi. All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  </div>
);

export default Home;
