import { Container, Grid2, Typography, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#4caf50", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={2}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {/* About us here */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              <strong>About Us</strong>
            </Typography>

            <Typography
              component="p"
              variant="body2"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              Plant Care provides helpful tips and guides to keep your plants
              healthy and thriving.
            </Typography>
          </Grid2>

          {/* Links here */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              component={"h3"}
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              <strong>Quick Links</strong>
            </Typography>
            <Typography variant="body2" component={"div"}>
              <Link
                component={RouterLink}
                to={"/"}
                color="inherit"
                underline="hover"
              >
                Home
              </Link>
              <br />
              <Link
                component={RouterLink}
                to={"/search"}
                color="inherit"
                underline="hover"
              >
                Search
              </Link>
              <br />
              <Link
                component={RouterLink}
                to={"/guide"}
                color="inherit"
                underline="hover"
              >
                Guide
              </Link>
              <br />
              <Link
                component={RouterLink}
                to={"/contact"}
                color="inherit"
                underline="hover"
              >
                Contact
              </Link>
            </Typography>
          </Grid2>

          {/* Socials here */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              <strong>Follow Us</strong>
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
            >
              Stay connected with us on social media for more updates.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                mt: 1,
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              <Link
                href="www.facebook.com"
                target="_blank"
                color="inherit"
                underline="hover"
                display="flex"
                alignItems="center"
              >
                <Facebook sx={{ marginRight: 1 }} />
                Facebook
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                display="flex"
                alignItems="center"
              >
                <Instagram sx={{ marginRight: 1 }} />
                Instagram
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                display="flex"
                alignItems="center"
              >
                <Twitter sx={{ marginRight: 1 }} />
                Twitter
              </Link>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};
export default Footer;
