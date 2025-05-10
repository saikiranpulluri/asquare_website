"use client";
import Header from "./components/Header";
import dynamic from "next/dynamic";
import { Box, useMediaQuery, useTheme } from "@mui/material";
// import Content from "./components/Content";



const ContentMain = dynamic(() => import("./components/ContentMain"), {
  ssr: false,
});
const ContentServices = dynamic(() => import("./components/ContentServices"), {
  ssr: false,
});
const ContentProjects = dynamic(() => import("./components/ContentProjects"), {
  ssr: false,
});
const ContentAboutUs = dynamic(() => import("./components/ContentAboutUs"), {
  ssr: false,
});
const ContentContactUs = dynamic(
  () => import("./components/ContentContactUs"),
  { ssr: false }
);
const FooterComponent = dynamic(() => import("./components/Footer"), {
  ssr: false,
});

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box id="main-container" style={{ overflowY: "auto", height: "100vh" }} >
      <Header />
      <Box id="main">
        <ContentMain isMobile={isMobile} />
      </Box>
      <Box id="services">
        <ContentServices isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet} />
      </Box>
      <Box id="projects">
        <ContentProjects isMobile={isMobile} />
      </Box>
      <Box id="aboutus">
        <ContentAboutUs isMobile={isMobile} />
      </Box>
      <Box id="contactus">
        <ContentContactUs isMobile={isMobile} />
      </Box>
      <Box id="footer">
        <FooterComponent isMobile={isMobile} />
      </Box>
    </Box>
  );
}
