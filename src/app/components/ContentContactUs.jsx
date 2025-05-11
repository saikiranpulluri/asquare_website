import React, { useState } from "react";
import { Box, TextField, Button, Typography, Divider, CircularProgress } from "@mui/material";
import axios from "axios";

const ContactUs = ({ isMobile = false }) => {
  const creators = [
    { image: "/images/projects/project1.jpeg" },
    { image: "/images/projects/project2.jpeg" },
    { image: "/images/projects/project13.jpeg" },
    { image: "/images/projects/project21.jpeg" },
    { image: "/images/projects/project12.jpeg" },
    { image: "/images/projects/project22.jpeg" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setError("");
    setSuccess("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await axios.post("/api/contact", formData);
      if (response.data.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Email error:", error.message);
      setError("Something went wrong. Please try again later.");
    }
  
    setIsSubmitting(false);
  };
  
  return (
    <>
      <Box
      className="contact-us"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#101010",
          color: "white",
          padding: 4,
          maxWidth: "90%",
          margin: "0 auto"
        }}
      >
        {/* Section Heading */}
        <Typography
          variant="h3" fontFamily= "Inria Serif, serif"
          sx={{ textAlign: "center",mb: 8, fontWeight: "bold" }}
        >
          Contact us
        </Typography>

        <Box
        className="contact-section-wrapper"
       
        >
          {/* Left Side - Images */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
              gap: 1,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {creators.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: isMobile ? "100%" : "100%",
                  height: 300,
                  bgcolor: "#ccc",
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>
            ))}
          </Box>

          {/* Right Side - Contact Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              flex: 1,
              // paddingLeft: isMobile ? 0 : 4,
              // paddingTop: isMobile ? 4 : 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Name Field */}
            <TextField
              required
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={
                textFieldStyles}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 0 : 6,
              }}
            >
              {/* Email Field */}
              <TextField
                required
                fullWidth
                label="E-mail"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                sx={textFieldStyles}
              />

              {/* Phone Number Field */}
              <TextField
                required
                fullWidth
                label="Phone number"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                sx={textFieldStyles}
              />
            </Box>

            {/* Message Field */}
            <TextField
              required
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={8}
              value={formData.message}
              onChange={handleChange}
              sx={textFieldStyles}
            />

            {/* Status Messages */}
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            {success && (
              <Typography color="success.main" sx={{ mt: 2 }}>
                {success}
              </Typography>
            )}

            {/* Contact Button */}
            <Button
              type="submit"
              variant="outlined"
              fontFamily= "Inria Serif, serif"
      
              startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                borderColor: "white",
                color: "white",
                fontFamily:"Inria Serif, serif",
                fontSize: "20px",
                whiteSpace: "nowrap",
                textTransform: "capitalize",
                width: isMobile ? "100%" : "20%",
                borderRadius: "0",
                borderWidth: "2px",
                width:"150px",
                mt: isMobile ? '2' : '4',
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "white",
                  color: "black",
                  
                },
              }}
            >
              {isSubmitting ? "Sending..." : "Contact us"}
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          borderColor: "#696969",
          width: "100%",
        }}
      />
    </>
  );
};

const textFieldStyles = {
  marginBottom: "32px" ,
  backgroundColor: "#222",
  borderRadius: "5px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "0" },
    "&:hover fieldset": { borderColor: "0" },
    "&.Mui-focused fieldset": { borderColor: "#ddd", borderWidth: "2px" },
  },
  "& .MuiInputLabel-root": { color: "#bbb" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#ddd" },
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: "16px",
    padding: "12px",
  },
};

export default ContactUs;