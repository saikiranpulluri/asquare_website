import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Instagram, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  const handleClick = (url) => {
    window?.open(url, "_blank");
  };
  const headerIcons = [
    { component: <Instagram />, url: "https://www.instagram.com/asquare_design_studio?igsh=cDhqamgwNDhwb2hz&utm_source=qr", key: "InstaFooter" },
    { component: <WhatsApp />, url: "https://wa.me/message/4GXMFNM7EONEE1", key: "whatsappFooter" },
  ];
  const pages = [{ sectionName: "Services", navigate: "services" },
  { sectionName: "Projects", navigate: "projects" },
  { sectionName: "About Us", navigate: "aboutus" }
  ];
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
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
      <Box sx={{ mb: 3, mt: 4 }} className="footer-logo">
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
        {pages.map((section) => (
          <Typography className="links" sx={{cursor: "pointer"}} variant="body1" onClick={() => handleScroll(section.navigate)} fontFamily="Inria Serif, serif" fontSize="20px">{section.sectionName}</Typography>
        ))}
       </Box>

      {/* Copyright */}
      <Typography className="copyright" variant="body2" fontFamily="Inria Serif, serif" >
        Copyright &copy; 2025. A Square.
      </Typography>
    </Box>
  );
};

export default Footer;