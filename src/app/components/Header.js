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
    { component: <Instagram />, url: "https://www.instagram.com/asquare_design_studio?igsh=cDhqamgwNDhwb2hz&utm_source=qr" },
    { component: <WhatsApp />, url: "https://wa.me/message/4GXMFNM7EONEE1" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0,0,0,0.5)",
        marginTop: "24px",
        // borderRadius: "10px",
        maxWidth: isMobile ? '100%' :"85%",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {isMobile ? (
          <>
            <Box
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => handleScroll("main")}
            >
              <img src="/images/logomain.png" alt="Logo" height="35px" />
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
                  color="inherit"
                  onClick={() => handleScroll(section.navigate)}
                  sx={{
                    position: "relative",
                    textTransform: "capitalize",
                    fontFamily: "Inria Serif, serif",
                    "&::after": {
                      content: "''",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#fff",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {section.sectionName}
                </Button>
              ))}
            </Box>

            {/* Center Logo */}
            <Box sx={{ cursor: "pointer" }} onClick={() => handleScroll("main")}>
              <img src="/images/logomain.png" alt="Logo" height="40px" />
            </Box>

            {/* Right Icons + Contact */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {headerIcons.map((item, index) => (
                <IconButton
                  key={index}
                  onClick={() => handleClick(item.url)}
                  color="inherit"
                  
                  sx={{
                   
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: '2px'
                    },
                  }}
                >
                  {item.component}
                </IconButton>
              ))}
              <Button
                variant="outlined"
                color="secondary"
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
