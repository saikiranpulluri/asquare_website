import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Instagram, WhatsApp, Email, LocationOn, Phone } from "@mui/icons-material";

const Footer = ({ isMobile }) => {
  const handleClick = (url) => window?.open(url, "_blank");

  const headerIcons = [
    { component: <Instagram style={{ color: '#E1306C', fontSize: 30 }}/>, url: "https://www.instagram.com/asquare_design_studio?igsh=cDhqamgwNDhwb2hz&utm_source=qr", key: "InstaFooter" },
    { component: <WhatsApp style={{ color: '#25D366', fontSize: 30 }} />, url: "https://wa.me/message/4GXMFNM7EONEE1", key: "whatsappFooter" },
  ];

  const pages = [
    { sectionName: "Services", navigate: "services" },
    { sectionName: "Projects", navigate: "projects" },
    { sectionName: "About Us", navigate: "aboutus" },
  ];

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#101010",
        color: "white",
        py: 6,
        px: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Square Logo */}
      <Box sx={{ mb: 2 }}>
        <img src="/images/logo.png" alt="A Square Design Studio" />
      </Box>



      {/* Navigation */}
      {/* <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 6, justifyContent: "center" }}>
        {pages.map((section) => (
          <Typography
            key={section.sectionName}
            variant="body1"
            sx={{ cursor: "pointer", fontSize: "18px" }}
            onClick={() => handleScroll(section.navigate)}
          >
            {section.sectionName}
          </Typography>
        ))}
      </Box> */}

      {/* Contact Info - Aligned */}
      <Stack spacing={1} alignItems="center" mb={4}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Email fontSize="small" />
          <Typography component="a" href="mailto:info@asquaredesignstudio.co.in" sx={{ color: "white", textDecoration: "none" }}>
            info@asquaredesignstudio.co.in
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Phone fontSize="small" />
          <Typography>+91-9959515287</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <LocationOn fontSize="small" />
          <Typography>Kondapur,  Hyderabad</Typography>
        </Stack>
      </Stack>
      {/* Social Icons */}
      <Box sx={{ display: "flex", gap: 3, mb: 4 }}>
        {headerIcons.map((item) => (
          <IconButton key={item.key} onClick={() => handleClick(item.url)} color="inherit">
            {item.component}
          </IconButton>
        ))}
      </Box>
      {/* Copyright */}
      <Typography variant="body2" fontSize="14px">
        © 2025 A Square Design Studio. All rights reserved.
      </Typography>

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "A Square Design Studio",
          url: "https://asquaredesignstudio.co.in/",
          logo: "https://www.asquaredesign.com/images/logo.png",
          image: "https://www.asquaredesign.com/images/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kondapur",
            addressLocality: "Hyderabad",
            addressRegion: "Hyderabad",
            postalCode: "500018",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9959515287",
            contactType: "Customer Support",
            email: "info@asquaredesignstudio.co.in"
          },
          sameAs: [
            "https://www.instagram.com/asquare_design_studio",
            "https://wa.me/message/4GXMFNM7EONEE1"
          ]
        })
      }} />
    </Box>
  );
};

export default Footer;