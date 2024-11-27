import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer.jsx";
import axios from "axios";
import HandleAPI from "./components/HandleAPI/HandleAPI.jsx";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        mx: "auto",
        p: 1,
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>
        <HandleAPI axios={axios} />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
