import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";

const ProjectModal = ({ open, onClose, selectedProject: project, isMobile }) => {
  const [selectedSubImage, setSelectedSubImage] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const subImages = project?.subImages || [];
  const chunkSize = 3;
  const hasPrev = startIndex > 0;
  const hasNext = startIndex + chunkSize < subImages.length;

  useEffect(() => {
    setSelectedSubImage(project?.image || null);
    setStartIndex(0);
  }, [project]);

  const handlePrev = () => {
    if (hasPrev) setStartIndex(startIndex - chunkSize);
  };

  const handleNext = () => {
    if (hasNext) setStartIndex(startIndex + chunkSize);
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "100%" : "90%",
          maxWidth:isMobile? "100%" : "60%",
          bgcolor: "black",
          p: 2,
          borderRadius: 2,
          boxShadow: 24,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" mb={2}>
          {project?.quote}
        </Typography>
        <Typography variant="body2" color="gray" mb={2}>
          - {project?.author}
        </Typography>

        <Box sx={{ position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            onClick={onClose}
          >
            <CloseIcon fontSize="large" />
          </IconButton>

          <img
            src={selectedSubImage || project?.image}
            alt="Expanded Project"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
          />
        </Box>

        {/* Thumbnails Swiper */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            gap: 1,
          }}
        >
          {hasPrev && (
            <IconButton onClick={handlePrev} sx={{ color: "white" }}>
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

          <Box sx={{ display: "flex", gap: 1 }}>
            {subImages.slice(startIndex, startIndex + chunkSize).map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Sub ${idx}`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedSubImage(img)}
                style={{
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: selectedSubImage === img ? "2px solid white" : "1px solid gray",
                }}
              />
            ))}
          </Box>

          {hasNext && (
            <IconButton onClick={handleNext} sx={{ color: "white" }}>
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
