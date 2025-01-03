import { Typography, Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => (
  <Container>
    <Box sx={{ textAlign: "center", my: 5 }}>
      <Typography variant="h1">Welcome to My Portfolio</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        A passionate Front-End Developer building impactful web and mobile
        applications.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/projects"
        sx={{ mt: 4 }}
      >
        View My Work
      </Button>
    </Box>
  </Container>
);

export default Home;
