import { Container, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";

const experiences = [
  {
    title: "Software Developer at Eldo Energy",
    period: "Feb 2019 - Dec 2020",
    description: [
      "Developed React-based applications, managing project lifecycles.",
      "Implemented advanced debugging tools and automated production builds.",
      "Updated React architecture with hooks, enhancing efficiency.",
    ],
  },
  // Add more experiences here.
];

const Experience = () => (
  <Container sx={{ my: 5 }}>
    <Typography variant="h2" align="center" sx={{ mb: 4 }}>
      Experience
    </Typography>
    <Timeline>
      {experiences.map((exp, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography variant="body2" color="textSecondary">
              {exp.period}
            </Typography>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </Container>
);

export default Experience;
