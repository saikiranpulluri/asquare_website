import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  { src: "/images/services/card1.jpeg", title: "Client Consultation", desc: "Creative & modern architectural solutions. Creative & modern architectural solutions. Creative & modern architectural solutions. Creative & modern architectural solutions." },
  { src: "/images/services/card2.jpeg", title: "Wood Work", desc: "Enhancing spaces with elegant interiors." },
  { src: "/images/services/card3.jpeg", title: "Lighting & Electrical", desc: "Robust & sustainable construction." },
  { src: "/images/services/card4.jpeg", title: "Furniture", desc: "Smart city infrastructure development." },
  { src: "/images/services/card5.jpeg", title: "Sourcing & Procurement", desc: "Personalized and elegant home designs." },
];

const TitleBarImageList = ({ isMobile, isDesktop, isTablet }) => {
  const gridColumns = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)";
  const isOddImages = images.length % 3 === 2;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: gridColumns,
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        maxWidth: "1500px",
        width: "100%",
      }}
    >
      {images.map((image, index) => {
        const isSecondRowItem = index >= 3;

        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: isDesktop && isOddImages && isSecondRowItem ? "center" : "flex-start",
            }}
          >
            <Card
              component={motion.div}
              whileHover={isMobile ? {} : { scale: 1.03 }}
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 700,
                height: 400,
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardMedia
                component="img"
                height="100%"
                image={image.src}
                alt={image.title}
                sx={{ transition: "transform 0.3s ease" }}
              />

              {/* Expandable Overlay */}
              <motion.div
                initial={{ height: "30%" }}
                animate={{ height: hoveredIndex === index ? "100%" : "25%" }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  padding: "20px",
                  height: "30%",
                }}
              >
                {/* Title (Always Visible) */}
                <Typography variant="h5" fontWeight="bold">
                  {image.title}
                </Typography>

                {/* Description (Only shows when overlay is fully expanded) */}
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    style={{
                      marginTop: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="body2">{image.desc}</Typography>
                  </motion.div>
                )}
              </motion.div>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
};

export default TitleBarImageList;
