import React, { useState } from "react";
import { Box, Typography, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

const projects = [
  {
    image: "/images/image3.jpg",
    quote: "A square made our home beautiful.",
    author: "B Rajesh",
    subImages: ["/images/sub1.jpg", "/images/sub2.jpg", "/images/sub3.jpg"]
  },
  {
    image: "/images/Main2.jpg",
    quote: "Elegant interiors that exceed expectations.",
    author: "S Mehta",
    subImages: ["/images/sub4.jpg", "/images/sub5.jpg", "/images/sub6.jpg"]
  }
];

const ProjectsCarousel = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "black", color: "white", py: 8, textAlign: "center", position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", maxWidth: "1500px", mx: "auto" }}>
        {!isMobile && (
          <IconButton className="prev" sx={{ position: "absolute", left: 0, color: "white", zIndex: 2 }}>
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
        )}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={isMobile ? 1 : 3}
          loop
          navigation={!isMobile && { nextEl: ".next", prevEl: ".prev" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          modules={[EffectCoverflow, Navigation]}
          style={{ width: "100%", padding: "20px 0" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} style={{ textAlign: "center", position: "relative" }}>
              <motion.div whileHover={{ scale: 1.05 }} onClick={() => setSelectedProject(project)}>
                <Box sx={{ position: "relative", width: "100%", borderRadius: 2, overflow: "hidden", boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)", cursor: "pointer" }}>
                  <img
                    src={project.image}
                    alt="Project"
                    style={{ width: "100%", borderRadius: "10px", transition: "filter 0.3s ease", filter: activeIndex === index ? "none" : "grayscale(100%) brightness(50%)" }}
                  />
                </Box>
                <Typography variant="body1" mt={2}>{project.quote}</Typography>
                <Typography variant="body2" color="gray">- {project.author}</Typography>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <IconButton className="next" sx={{ position: "absolute", right: 0, color: "white", zIndex: 2 }}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        )}
      </Box>
      <Modal open={!!selectedProject} onClose={() => setSelectedProject(null)} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ position: "relative", width: "80%", maxWidth: "900px", bgcolor: "black", p: 2, borderRadius: 2, boxShadow: 24 }}>
          <IconButton onClick={() => setSelectedProject(null)} sx={{ position: "absolute", top: 10, right: 10, color: "white" }}>
            <CloseIcon />
          </IconButton>
          {selectedProject && (
            <>
              <img src={selectedProject.image} alt="Enlarged Project" style={{ width: "100%", borderRadius: "10px" }} />
              <Typography variant="h6" mt={2} textAlign="center">{selectedProject.quote}</Typography>
              <Typography variant="body2" color="gray" textAlign="center">- {selectedProject.author}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
                <IconButton className="sub-prev" sx={{ color: "white", mr: 1 }}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <Swiper
                  modules={[Navigation, Thumbs]}
                  spaceBetween={10}
                  slidesPerView={3}
                  navigation={{ nextEl: ".sub-next", prevEl: ".sub-prev" }}
                  style={{ maxWidth: "80%" }}
                >
                  {selectedProject.subImages.map((subImage, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={subImage} alt={`Sub ${idx}`} style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <IconButton className="sub-next" sx={{ color: "white", ml: 1 }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ProjectsCarousel;