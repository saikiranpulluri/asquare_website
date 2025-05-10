import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  const handleClick = (url) => {
    window?.open(url, "_blank");
  };
  const headerIcons = [
    // { component: <Facebook />, url: "https://www.facebook.com" },
    { component: <Instagram />, url: "https://www.instagram.com/asquare_design_studio?igsh=cDhqamgwNDhwb2hz&utm_source=qr", key: "InstaFooter" },
    { component: <WhatsApp />, url: "https://wa.me/message/4GXMFNM7EONEE1", key: "whatsappFooter" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        color: "white",
        py: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 3, mt: 4 }}>
        <img src="/images/logo.png" alt="Logo" />
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
        {headerIcons.map((item, index) => (
          <IconButton
          className="social-icons"
            key={item.key}
            onClick={() => handleClick(item.url)}
            
          >
            {item.component}
          </IconButton>
        ))}
      </Box>

      {/* Navigation Links */}
      <Box
      className="footer-links"
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 8,
        }}
      >
        <Typography  className="links" variant="body1" fontFamily= "Inria Serif, serif" fontSize="20px">Services</Typography>
        <Typography  className="links" variant="body1" fontFamily= "Inria Serif, serif" fontSize="20px">Projects</Typography>
        <Typography  className="links" variant="body1" fontFamily= "Inria Serif, serif" fontSize="20px">About Us</Typography>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" color="white" fontFamily= "Inria Serif, serif" fontSize="20px">
        Copyright &copy; 2025 Mountain
      </Typography>
    </Box>
  );
};

export default Footer;