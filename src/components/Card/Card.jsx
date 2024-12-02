import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function PlantCard({ plant }) {
  // console.log(plant.Img);
  console.log(plant);

  return (
    <Card
      sx={{
        width: "350px",
        maxWidth: "350px",
        margin: "auto",
        mt: 2,
        mb: 5,
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        sx={{
          objectFit: "contain",
          width: "100%",
          height: "250px",
          p: 1,
        }}
        image={plant.Img}
        alt={plant["Common name"]?.[0]}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {plant["Latin name"]}
        </Typography>

        {plant["Common name"] ? (
          <Typography variant="subtitle" component="p" color="textSecondary">
            <Typography component={"i"}>Common name: </Typography>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {plant["Common name"]?.[0]}
              {plant["Common name"]?.[1]
                ? `, ${plant["Common name"]?.[1]}`
                : null}
            </Typography>
          </Typography>
        ) : null}

        {plant["Other names"] ? (
          <Typography variant="subtitle" component="p" color="textSecondary">
            <Typography component={"i"}>Other names: </Typography>
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {plant["Other names"]}
            </Typography>
          </Typography>
        ) : null}

        <Typography variant="body2" component="p" sx={{ mt: 2 }}>
          <strong>Preferred Climate:</strong> {plant.Climat}
          <br />
          <strong>Family:</strong> {plant.Family}
          <br />
          <strong>Origin:</strong>
          <Typography m={1} component="span" color="secondary">
            {plant.Origin}
          </Typography>
        </Typography>

        <Button
          variant="contained"
          color="primary"
          href="http://www.tropicopia.com/house-plant/"
          target="_blank"
          sx={{ mt: 2, width: "50%" }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
