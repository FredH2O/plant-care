import { Box, Container, Grid2, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        spacing={1}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ minHeight: { xs: "auto", sm: "80vh", md: "75vh" } }}
        margin={"auto"}
      >
        <Grid2
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: { sm: "25px" },
            marginBottom: { sm: "25px" },
          }}
        >
          <Typography component={"h2"} variant="h4">
            Home
          </Typography>
          <Typography
            component="p"
            variant="body1"
            p={2}
            sx={{ wordSpacing: 5 }}
            textAlign={"center"}
          >
            Welcome to Plant-Care, where our mission is to inspire and empower
            plant lovers of all levels to nurture their green companions and
            contribute to a healthier, more sustainable planet. We believe that
            caring for plants is not just a hobby — it's a way to reconnect with
            nature, improve our well-being, and create a cleaner, greener world
            for future generations. At Plant-Care, we're passionate about
            providing the tools, knowledge, and encouragement you need to keep
            your plants thriving. <br />
            <br />
            Whether you're a seasoned gardener or just starting your plant care
            journey, our app offers expert tips, tailored guidance, and a
            supportive community to help you along the way. By taking care of
            our plants, we also take a step towards improving air quality,
            reducing carbon footprints, and fostering a sense of harmony with
            the environment. Join us as we cultivate not only vibrant, healthy
            plants but also a shared commitment to making the world a better,
            greener place — one leaf at a time.
          </Typography>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 6 }}
          sx={{ marginTop: { sm: "25px" }, marginBottom: { sm: "35px" } }}
        >
          <Box
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/plant-room.png)`,
              height: "400px",
              width: "100%",
              borderRadius: "25px",
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;
