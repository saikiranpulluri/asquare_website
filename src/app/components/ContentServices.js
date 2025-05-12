import React from "react";
import { Box, Typography } from "@mui/material";
import TitleBarImageList from "./TitleBarImageList";

const ContentServices = ({isMobile, isDesktop, isTablet}) => {
  return (
    <Box className="services"
      sx={{
        // backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
        flexDirection: "column",
        px: 3,
      }}
    >
      <Typography variant="h3" fontFamily= "Inria Serif, serif" sx={{fontWeight: "bold", mb: 2  }}   >
        Services
      </Typography>
      <Typography variant="body1" fontFamily= "Inria Serif, serif" fontSize="20px" sx={{ mb: isMobile ? '24px' : '48px', maxWidth: "700px" }} >
        Our passion for innovative design and attention to detail turns your
        vision into a stunning reality.
      </Typography>





      {/* Image List with Hover Effects */}
      <Box
      className="services-container"
        sx={{
         
          maxWidth: isDesktop ? "80%" : "100%"
        }}
      >
        <TitleBarImageList isMobile={isMobile} isTablet={isMobile} isDesktop={isDesktop}/>
      </Box>
    </Box>
  );
};

export default ContentServices;
