import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";

const ContentMain = ({ isMobile = false }) => {
  const handleScroll = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage:  "url('/images/banner.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Box className="banner_overlay"></Box> 
      {/* Main Centered Text */}
      <Box class="banner_content">
        <Typography variant="h3" fontWeight="bold" fontFamily= "Inria Serif, serif" >
          Transforming Spaces,
        </Typography>
        <Typography variant="h3" fontWeight="bold" fontFamily= "Inria Serif, serif" >
          Elevating Lives
        </Typography>
        <Typography variant="subtitle1" fontFamily= "Inria Serif, serif" fontSize="20px" fontWeight="300" sx={{ mt: 2 , maxWidth: '700px'}}>
          Expertly crafted interior spaces that blend style, comfort, and you.
        </Typography>
      </Box>

      {/* Scroll Down Section (fixed to bottom center) */}
      <Box className="scroll-down-wrapper">
        <Box className="scroll-down">
        <Typography variant="subtitle1" fontFamily= "Inria Serif, serif" fontSize="22px" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <Button sx={{ color: "white" }} onClick={handleScroll}>
          <ExpandCircleDownRoundedIcon fontSize="medium" />
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentMain;
