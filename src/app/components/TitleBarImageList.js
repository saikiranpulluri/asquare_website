import React, { useState } from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  { src: "/images/services/card2.jpeg", title: "Interior Design Consultation", desc: "Expert-led design planning with space planning, theme selection, material consultation, mood boards, and design strategy." },
  { src: "/images/services/card3.jpeg", title: "Personalized Home Interiors", desc: "Tailored designs for villas, apartments, and high-rises. Whether you love modern minimalism or rich traditional tones, we bring your vision to life with elegance and precision." },
  { src: "/images/services/card4.jpeg", title: "Modular Solutions", desc: "Smart storage meets stunning design. Our modular solutions are built for daily comfort, lasting durability, and a sleek aesthetic." },
  { src: "/images/services/card5.jpeg", title: "Bespoke Furniture & Decor Styling", desc: "Every piece tells your story. From custom sofas to curated decor accents, we handpick or design furniture that fits your lifestyle and elevates your space." },
  { src: "/images/services/card1.jpeg", title: "Lighting & Ceiling Design", desc: "Set the mood, highlight the details. We create layered lighting and designer ceilings that add dimension, warmth, and character to every room."},
  { src: "/images/services/card2.jpeg", title: "Renovation & Civil Works", desc: "Looking to refresh your space? We handle flooring, plumbing, electricals, wall modifications, and more — all with expert coordination and flawless execution."},
  { src: "/images/services/card3.jpeg", title: "3D Visualizations & Design Previews", desc: "See your space before it comes alive. Our 3D renders and walkthroughs let you experience the design in detail and make confident choices."},
  { src: "/images/services/card4.jpeg", title: "Smart Home & Automation Integration", desc: "Control lighting, climate, and security at your fingertips. We integrate smart tech seamlessly into your interiors for modern, effortless living."},
  { src: "/images/services/card5.jpeg", title: "End-to-End Project Management", desc: "From the first sketch to the final cushion, we manage it all — timelines, vendors, quality checks, and handover — so you can simply enjoy the transformation."},
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
