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
          About Us
        </Typography>
      </motion.div>

      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Background Image with proper cropping */}
        <Box
        
          component="img"
          src={isMobile ? "/images/about_mobile.jpg" : "/images/about.jpg"}
          alt="Team"
          sx={{
            width: "100%",
            // height: isMobile ? "400px" : "700px",
            // objectFit: "cover",
            // objectPosition: "center",
            // filter: "brightness(50%)", 
          }}
        />

        {/* Glassmorphic Text Box - Responsive */}
        <motion.div
        className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          style={{
            
            
          }}
        >
          <Typography variant="h4" fontWeight="bold" fontFamily= "Inria Serif, serif" fontSize={isMobile ? "32px" : "40px"}>
            {`"At A Square`}
          </Typography>
          <Typography variant="body2" fontSize={isMobile ? "18px" : "26px"} mt={1} sx={{ lineHeight: 1.4 }} fontWeight="300" fontFamily= "Inria Serif, serif">
            we are passionate about transforming spaces into timeless works of art. We believe that design
            is more than just decoration - its about creating spaces that reflect individuality, enhance daily life, and
            provide lasting comfort.
          </Typography>
          <Typography variant="h4" fontFamily= "Inria Serif, serif" fontWeight="bold" mt={2} fontSize={isMobile ? "24px" : "40px"}>
            {`Let us help you design the space of your dreams."`}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ContentAboutUs;
