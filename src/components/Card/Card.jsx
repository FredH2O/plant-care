import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid2,
} from "@mui/material";

export default function PlantCard({ plant }) {
  console.log(plant.img);
  console.log(plant);
  return (
    <Card sx={{ maxWidth: 350, margin: "auto", mt: 4 }}>
      <CardMedia
        component="img"
        height="140"
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
          How often to water ?
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
