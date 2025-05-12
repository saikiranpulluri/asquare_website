import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box,
  capitalize,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (url) => {
    window?.open(url, "_blank");
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const pages = [{sectionName: "Services", navigate: "services"},
    {sectionName: "Projects", navigate: "projects"},
    {sectionName: "About Us", navigate: "aboutus"},
    {sectionName: "Contact Us", navigate: "contactus"},
  ];

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  const headerIcons = [
    // { component: <Facebook />, url: "https://www.facebook.com" },
    { component: <Instagram style={{ color: isMobile ? '#E1306C' : ''}} />, url: "https://www.instagram.com/asquare_design_studio?igsh=cDhqamgwNDhwb2hz&utm_source=qr" },
    { component: <WhatsApp style={{ color: isMobile ? '#25D366' : ''}}  />, url: "https://wa.me/message/4GXMFNM7EONEE1" },
  ];

  return (
    
    <AppBar
    className="header"
      position="fixed"
      
      sx={{
        background: 'rgba(0,0,0,0.5)',
        left: '50%',
        top: '24px',
        width: '90%',
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {isMobile ? (
          <>
            <Box
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => handleScroll("main")}
            >
              <img src="/images/logomain.png" alt="Logo" height="30px" />
            </Box>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} >
              <MenuIcon sx={{ textTransform: "capitalize" }}/>
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  backdropFilter: "blur(5px)",
                  color: "white",
                  width: "50%",
                },
              }}
            >
              <List sx={{ width: 250 }}>
                {pages.map((section) => (
                  <ListItem
                    button
                    key={section.sectionName}
                    onClick={() => handleScroll(section.navigate)}
                    sx={{
                      position: "relative",
                      "&::after": {
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "yellow",
                        transition: "width 0.3s ease-in-out",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    <ListItemText
                      primary={section.sectionName}
                    />
                  </ListItem>
                ))}
                <Box sx={{ display: "flex", mt: 2 }}>
                  {headerIcons.map((item, index) => (
                    <IconButton
                      key={index}
                      onClick={() => handleClick(item.url)}
                      sx={{ color: "white" }}
                    >
                      {item.component}
                    </IconButton>
                  ))}
                </Box>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {/* Left Navigation */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {pages.map((section) => ( section.sectionName !== "Contact Us" && 
                <Button
                  key={section}
                  className="links"
                  color="inherit"
                  onClick={() => handleScroll(section.navigate)}
                  sx={{
                   textTransform : "capitalize",
                   fontFamily: "Inria Serif, serif",
                  }}
                >
                  {section.sectionName}
                </Button>
              ))}
            </Box>

            {/* Center Logo */}
            <Box className="center-logo" sx={{ cursor: "pointer" }} onClick={() => handleScroll("main")}>
              <img src="/images/logomain.png" alt="Logo" height="40px" />
            </Box>

            {/* Right Icons + Contact */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
              {headerIcons.map((item, index) => (
                <IconButton
                className="social-icons"
                  key={index}
                  onClick={() => handleClick(item.url)}
                >
                  {item.component}
                </IconButton>
              ))}
              <Button
                variant="outlined"
                color="secondary"
                className="primary-btn"
                sx={{
                  borderColor: "white",
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "Inria Serif, serif",
                  borderRadius: '0',
                  
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => handleScroll("contactus")}
              >
                Contact Us
              </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
   
  );
};

export default Header;
