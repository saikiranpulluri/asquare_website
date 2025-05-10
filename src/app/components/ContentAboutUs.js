import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContentAboutUs = ({isMobile = false}) => {

  return (
    <Box className="about-us" sx={{width: "100%", overflow: "hidden", height: "100%" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <Typography variant="h3" fontWeight="bold" fontFamily= "Inria Serif, serif" textAlign="center"  color="white" sx={ {mb: 8}}>
          About us
        </Typography>
      </motion.div>

      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Background Image with proper cropping */}
        <Box
          component="img"
          src="/images/about.jpg"
          alt="Team"
          sx={{
            width: "100%",
            height: isMobile ? "400px" : "700px",
            objectFit: "cover",
            objectPosition: "center",
            // filter: "brightness(50%)", 
          }}
        />

        {/* Glassmorphic Text Box - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          style={{
            position: "absolute",
            bottom: isMobile ? "20%" : "-12%",
            right: isMobile ? "20%" : "4%",
            width: isMobile ? "60%" : "495px",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            // borderRadius: "10px",
            padding: "15px",
            textAlign: "left",
            color: "white",
           
            height: "497px"
          }}
        >
          <Typography variant="h4" fontWeight="bold" fontFamily= "Inria Serif, serif" fontSize={isMobile ? "24px" : "40px"}>
            "At A Square
          </Typography>
          <Typography variant="body2" fontSize={isMobile ? "12px" : "26px"} mt={1} sx={{ lineHeight: 1.4 }} fontWeight="300" fontFamily= "Inria Serif, serif">
            we are passionate about transforming spaces into timeless works of art. We believe that design
            is more than just decoration - its about creating spaces that reflect individuality, enhance daily life, and
            provide lasting comfort.
          </Typography>
          <Typography variant="h4" fontFamily= "Inria Serif, serif" fontWeight="bold" mt={2} fontSize={isMobile ? "24px" : "40px"}>
            Let us help you design the space of your dreams."
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContentAboutUs;
