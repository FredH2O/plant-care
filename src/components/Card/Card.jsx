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
        width: 350,
        maxWidth: 350,
        margin: "auto",
        mt: 2,
        mb: 5,
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        sx={{
          objectFit: "cover",
          width: "100%",
          height: "250px",
        }}
        image={plant.Img}
        alt={plant["Common name"]?.[0]}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {plant["Common name"]?.[0]}
        </Typography>
        <Typography variant="subtitle" component="p" color="textSecondary">
          {plant.common_name}
        </Typography>
        <Typography variant="body2" component="p" sx={{ mt: 2 }}>
          How often to water?
          <Typography m={1} component="span" color="primary">
            {plant.watering}
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Learn More?
        </Button>
      </CardContent>
    </Card>
  );
}
