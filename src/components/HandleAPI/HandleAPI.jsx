import {
  CircularProgress,
  Typography,
  Button,
  Box,
  Grid2,
  Container,
} from "@mui/material";

import { useState, useEffect } from "react";
import PlantCard from "../Card/Card";

const HandleAPI = ({ axios }) => {
  const [plants, setPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const categoriesURL = "https://house-plants2.p.rapidapi.com/categories";
  const options = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "house-plants2.p.rapidapi.com",
    },
  };

  {
    /**********************************************************************/
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(categoriesURL, options);
        setCategories(response.data);
      } catch (err) {
        setError("Failed to retrieve categories.");
      }
    };

    fetchCategories();
  }, []);

  {
    /*********************************************************************/
  }

  const fetchPlantsByCategory = async (category) => {
    setLoading(true);
    setError(null);
    setPlants([]);

    const categoryURL = `https://house-plants2.p.rapidapi.com/category/${category}`;

    try {
      const response = await axios.get(categoryURL, options);
      setPlants(response.data);
    } catch (err) {
      setError("Failed to retrieve plants for the selected category.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchPlantsByCategory(category);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          m: 1,
          p: 1,
        }}
      >
        {categories.map((categoryObj, index) => (
          <Button
            sx={{ m: 0.5 }}
            key={index}
            variant={
              selectedCategory === categoryObj.Category
                ? "contained"
                : "outlined"
            }
            onClick={() => handleCategoryClick(categoryObj.Category)}
          >
            {categoryObj.Category}
          </Button>
        ))}
      </Box>

      {loading && <CircularProgress />}

      {error && <Typography color="error">{error}</Typography>}

      {!loading && plants.length > 0 && (
        <Container maxWidth="lg" sx={{ width: "100%", padding: 0 }}>
          <Grid2
            container
            spacing={1}
            sx={{ width: "100%" }}
            justifyContent={"center"}
          >
            {plants.map((plant) => (
              <Grid2 item xs={12} sm={6} md={4} key={plant.id}>
                <PlantCard plant={plant} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      )}

      {!loading && plants.length === 0 && !error && (
        <Typography>No plants found for this category.</Typography>
      )}
    </div>
  );
};

export default HandleAPI;
