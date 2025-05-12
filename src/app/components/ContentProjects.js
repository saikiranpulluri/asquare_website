import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import ProjectsCarousel from "./ProjectsCarousel";

const ContentProjects = ({isMobile = false}) => {
  const projectsRef = useRef(null);

  return (
    <Box className="our-projects"
      sx={{
        // backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
        width: "100%",
      }}
    >
      <Typography
        ref={projectsRef}
        variant="h3"
        align="center"
        fontFamily= "Inria Serif, serif"
        sx={{ fontWeight: "bold", mb: 8 }}
      >
        Our Projects
      </Typography>

      {/* Ensure carousel takes up proper width */}
      <Box sx={{ width: "100%", maxWidth: "100%", px: 2 }}>
        <ProjectsCarousel isMobile={isMobile}/>
      </Box>
    </Box>
  );
};

export default ContentProjects;
