import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 2 }}>
        <img src="/images/logo.png" alt="Logo"/>
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <IconButton sx={{ color: "white" }}>
          <Facebook fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <Instagram fontSize="large" />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <WhatsApp fontSize="large" />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography variant="body1">Services</Typography>
        <Typography variant="body1">Projects</Typography>
        <Typography variant="body1">About Us</Typography>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" color="gray">
        Copyright &copy; 2025 Mountain
      </Typography>
    </Box>
  );
};

export default Footer;