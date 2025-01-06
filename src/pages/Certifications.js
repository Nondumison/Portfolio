import { Container, Typography, Box, Chip } from "@mui/material";

const certifications = [
  { name: "React Advanced Development", year: "2024" },
  { name: "C Programming Bootcamp", year: "2017" },
  { name: "NQF Level 5, Computer Science", year: "2019" },
];

const Certifications = () => (
  <Container sx={{ my: 5 }}>
    <Typography variant="h2" align="center" sx={{ mb: 4 }}>
      Certifications
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {certifications.map((cert, index) => (
        <Chip
          key={index}
          label={`${cert.name} (${cert.year})`}
          color="primary"
          variant="outlined"
        />
      ))}
    </Box>
  </Container>
);

export default Certifications;
