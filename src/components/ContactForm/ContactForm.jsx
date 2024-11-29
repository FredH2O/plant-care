import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        We'd like to hear from you!
      </Typography>

      <Box component={"form"} onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          required
        ></TextField>

        <TextField
          fullWidth
          label="E-Mail"
          name="email"
          value={formData.email}
          variant="outlined"
          required
          onChange={handleChange}
          margin="normal"
        ></TextField>

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          required
        ></TextField>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{ mt: 2, mb: 5 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
