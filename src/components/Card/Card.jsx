import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function PlantCard({ plant }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 4 }}>
      <CardMedia component="img" height="140" image="" alt="" />

      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          "plant.name here"
        </Typography>

        <Typography variant="subtitle" component="p" color="textSecondary">
          "plant.name here"
        </Typography>

        <Typography variant="body2" component="p" sx={{ mt: 2 }}>
          Water every{" "}
          <Typography component="span" color="primary">
            "plant.water{" "}
          </Typography>
        </Typography>

        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Learn More?
        </Button>
      </CardContent>
    </Card>
  );
}
