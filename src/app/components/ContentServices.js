import React from "react";
import { Box, Typography } from "@mui/material";
import TitleBarImageList from "./TitleBarImageList";

const ContentServices = ({isMobile, isDesktop, isTablet}) => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "5%",
        flexDirection: "column",
        px: 3,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: "700px" }}>
        Our passion for innovative design and attention to detail turns your
        vision into a stunning reality.
      </Typography>

      {/* Image List with Hover Effects */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          maxWidth: isDesktop ? "80%" : "100%"
        }}
      >
        <TitleBarImageList isMobile={isMobile} isTablet={isMobile} isDesktop={isDesktop}/>
      </Box>
    </Box>
  );
};

export default ContentServices;
