import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted!", formData);
    setOpen(true);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ mt: 4, height: { md: "73vh", sm: "60vh" } }}
      >
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-laballedby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        slotProps={{ backdrop: { timeout: 1000 } }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              Thanks !
            </Typography>
            <Typography id="modal-description" variant="body1" sx={{ mt: 2 }}>
              We will get back to you as soon as possible !
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ContactForm;
