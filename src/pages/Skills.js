import { Typography, Container, LinearProgress, Box } from "@mui/material";
import { Grid } from "@mui/system";
const skills = [
  { name: "React.js", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "CSS", level: 80 },
  { name: "Material UI", level: 75 },
];

const Skills = () => (
  <Container sx={{ my: 5 }}>
    <Typography variant="h2" align="center" sx={{ mb: 4 }}>
      My Skills
    </Typography>
    <Grid container spacing={4}>
      {skills.map((skill, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Box>
            <Typography variant="h6">{skill.name}</Typography>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              sx={{ mt: 1 }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skills;
