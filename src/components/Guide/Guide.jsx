import { Box, Container, Grid2, Typography } from "@mui/material";

const Guide = () => {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        spacing={1}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        margin={"auto"}
        sx={{ minHeight: { xs: "auto", sm: "80vh", md: "75vh" } }}
      >
        <Grid2 size={{ xs: 12, sm: 12, md: 6 }} mt={2}>
          <Box
            mb={2}
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/plant-care.png)`,
              height: "400px",
              width: "100%",
            }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 12, md: 6 }}
          mb={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component={"h2"} variant="h4">
            General Plant Guide
          </Typography>
          <Typography
            component="p"
            variant="body1"
            p={1}
            m={1}
            textAlign={"justify"}
          >
            <strong>Rule 1:</strong> Ensure your plant gets the right amount of
            sunlight. Research your plant's needs — some thrive in bright,
            indirect light, while others prefer low-light conditions.
            <br />
            <br />
            <strong>Rule 2:</strong> Water your plants appropriately.
            Overwatering is one of the most common mistakes. Check the soil's
            top inch — if it's dry, it's time to water.
            <br />
            <br />
            <strong>Rule 3:</strong> Monitor humidity levels. Many houseplants
            love humidity, so consider misting them or using a humidifier during
            dry seasons.
            <br />
            <br />
            <strong>Rule 4:</strong> Feed your plants regularly. Use a balanced
            fertilizer during their growing season to keep them healthy and
            vibrant.
            <br />
            <br />
            <strong>Rule 5:</strong> Keep an eye out for pests. Inspect your
            plants regularly for common issues like spider mites or aphids, and
            treat them promptly if needed.
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Guide;
