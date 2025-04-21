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
        <img src="/images/logo.png" alt="Logo" />
      </Box>

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        {headerIcons.map((item, index) => (
          <IconButton
            key={item.key}
            onClick={() => handleClick(item.url)}
            sx={{ color: "white" }}
          >
            {item.component}
          </IconButton>
        ))}
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