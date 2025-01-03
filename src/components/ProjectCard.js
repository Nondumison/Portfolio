import { Card, CardContent, Typography, Button } from "@mui/material";

const ProjectCard = ({ title, description, github }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        {description}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{ mt: 2 }}
        href={github}
        target="_blank"
      >
        View on GitHub
      </Button>
    </CardContent>
  </Card>
);

export default ProjectCard;
