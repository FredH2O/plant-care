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
        height={"100vh"}
        margin={"auto"}
        border={"1px solid red"}
      >
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
          <Box
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/plant-care.png)`,
              height: "300px",
              width: "100%",
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6, md: 6 }} border={"1px solid red"}>
          <Typography>plant care</Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Guide;
