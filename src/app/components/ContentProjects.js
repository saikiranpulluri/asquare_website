import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import ProjectsCarousel from "./ProjectsCarousel";

const ContentProjects = ({isMobile = false}) => {
  const projectsRef = useRef(null);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingY: "5%",
        width: "100%",
      }}
    >
      <Typography
        ref={projectsRef}
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Projects
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{ mb: 4, fontWeight: "bold", maxWidth: "80%" }}
      >
        A-square made our home beautiful and the process of making it easier.
      </Typography>

      {/* Ensure carousel takes up proper width */}
      <Box sx={{ width: "100%", maxWidth: "100%", px: 2 }}>
        <ProjectsCarousel isMobile={isMobile}/>
      </Box>
    </Box>
  );
};

export default ContentProjects;
