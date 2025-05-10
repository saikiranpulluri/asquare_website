import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';  
import ProjectModal from "./ProjectModal";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const projects = [
  {
    image: "/images/projects/project1.jpeg",
    quote: "A square made our home beautiful.",
    author: "B Rajesh",
    subImages: [
      "/images/projects/project1.jpeg",
      "/images/projects/project11.jpeg",
      "/images/projects/project12.jpeg",
      "/images/projects/project1.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project11.jpeg",
      // "/images/projects/project12.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project2.jpeg",
      // "/images/projects/project21.jpeg",
      // "/images/projects/project22.jpeg",
    ],
  },
  {
    image: "/images/projects/project21.jpeg",
    quote: "Elegant interiors that exceed expectations.",
    author: "S Mehta",
    subImages: [
      "/images/projects/project2.jpeg",
      "/images/projects/project21.jpeg",
      "/images/projects/project22.jpeg",
    ],
  },
  {
    image: "/images/projects/project1.jpeg",
    quote: "A square made our home beautiful.",
    author: "B Rajesh",
    subImages: [
      "/images/projects/project1.jpeg",
      "/images/projects/project11.jpeg",
      // "/images/projects/project12.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project11.jpeg",
      // "/images/projects/project12.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project1.jpeg",
      // "/images/projects/project2.jpeg",
      // "/images/projects/project21.jpeg",
      // "/images/projects/project22.jpeg",
    ],
  },
  {
    image: "/images/projects/project21.jpeg",
    quote: "Elegant interiors that exceed expectations.",
    author: "S Mehta",
    subImages: [
      "/images/projects/project2.jpeg",
      "/images/projects/project21.jpeg",
      "/images/projects/project22.jpeg",
    ],
  },
  {
    image: "/images/projects/project1.jpeg",
    quote: "A-square made our home beautiful and the process of making it easier.",
    author: "B Rajesh",
    subImages: [
      "/images/projects/project1.jpeg",
      "/images/projects/project11.jpeg",
      "/images/projects/project12.jpeg",
      "/images/projects/project1.jpeg",
      "/images/projects/project1.jpeg",
      "/images/projects/project11.jpeg",
      "/images/projects/project12.jpeg",
      "/images/projects/project1.jpeg",
      "/images/projects/project1.jpeg",
      // "/images/projects/project2.jpeg",
      // "/images/projects/project21.jpeg",
      // "/images/projects/project22.jpeg",
    ],
  },
  {
    image: "/images/projects/project21.jpeg",
    quote: "Elegant interiors that exceed expectations.",
    author: "S Mehta",
    subImages: [
      "/images/projects/project2.jpeg",
      "/images/projects/project21.jpeg",
      "/images/projects/project22.jpeg",
    ],
  },
];

const ProjectsCarousel = ({isMobile}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current?.autoplay){
      if(selectedProject) {
        swiperRef.current.autoplay.stop();
      }
      else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [selectedProject])
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box 
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: isMobile ? "100%" : "90%",
        }}
      >
        {!isMobile && (
          <IconButton
            className="prev"
            sx={{ color: "white", border: "1px solid white" }}
          >
            <ArrowBackOutlinedIcon fontSize="large" />
          </IconButton>
        )}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={isMobile ? 1 : 2}
          // slidesPerView="auto"
          loop
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={!isMobile && { nextEl: ".next", prevEl: ".prev" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Navigation, Autoplay]}
          style={{ width: "90%",  maxHeight: "768px" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
            
              style={{
                textAlign: "center",
                position: "relative",
                paddingBottom: "30px",
               
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{scale: 0.95}}
                onClick={() => setSelectedProject(project)}
              >
                <Box
                // className="swiper-slide-center"
                  sx={{
                    position: "relative",
                    // width: "768px",
                    height: "540px", // adjust as needed
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "white",
                    }}
                  >
                    <ZoomOutMapIcon fontSize="large" />
                  </IconButton>
                  <img
                    src={project.image}
                    alt="Project"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                      transition: "filter 0.3s ease",
                      filter:
                        activeIndex === index
                          ? "none"
                          : "grayscale(100%) brightness(50%)",
                    }}
                  />
                </Box>
                {/* Move text OUTSIDE the Box */}
                {activeIndex === index && <><Typography variant="body1" fontFamily= "Inria Serif, serif" mt={2} sx={{ color: "white", fontStyle: "italic", fontSize: "20px" , maxWidth: "390px", margin: "30px auto 0" }}>
                  {project.quote}
                </Typography><Typography variant="body2" fontFamily= "Inria Serif, serif" color="white" fontSize="20px">
                    - {project.author}
                  </Typography></>}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {!isMobile && (
          <IconButton
            className="next"
            sx={{ color: "white", border: "1px solid white" }}
          >
            <ArrowForwardOutlinedIcon fontSize="large" />
          </IconButton>
        )}
      </Box>

      {/* Project Modal */}
      <ProjectModal
        open={!!selectedProject}
        selectedProject={selectedProject}
        onClose={() => setSelectedProject(null)}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default ProjectsCarousel;
