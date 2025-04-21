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
        backgroundImage: "url('/images/image3.jpeg')",
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
      {/* Main Centered Text */}
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h3" fontWeight="bold">
          Transforming Spaces,
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Elevating Lives
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Expertly crafted interior spaces that blend style, comfort, and you.
        </Typography>
      </Box>

      {/* Scroll Down Section (fixed to bottom center) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Scroll Down
        </Typography>
        <Button sx={{ color: "white" }} onClick={handleScroll}>
          <ExpandCircleDownRoundedIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};

export default ContentMain;
