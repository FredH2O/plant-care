import { Container, Grid2, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#4caf50", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent={"center"}>
          <Grid2 xs={12} sm={4}>
            <Typography component="h3" variant="h6">
              About Us
            </Typography>
            <Typography component="p" variant="body2">
              Plant Care provides helpful tisp and guides to keep your plants
              healthy and thriving.
            </Typography>
          </Grid2>

          <Grid2 xs={12} sm={4}>
            <Typography variant="h6" component={"h3"}>
              Quick Links
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
                to={"/about"}
                color="inherit"
                underline="hover"
              >
                About
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
              <br />
            </Typography>
          </Grid2>

          <Grid2 xs={12} sm={4}>
            <Typography variant="h6" component="h3" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" component="p">
              Stay connected with us on social media for more updates.
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="#" color="inherit" underline="hover">
                Facebook
              </Link>
              <br />
              <Link href="#" color="inherit" underline="hover">
                Instagram
              </Link>
              <br />
              <Link href="#" color="inherit" underline="hover">
                Twitter
              </Link>
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </footer>
  );
};
export default Footer;
