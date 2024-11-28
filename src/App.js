import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Box } from "@mui/material";
import Footer from "./components/Footer/Footer.jsx";
import axios from "axios";
import HandleAPI from "./components/HandleAPI/HandleAPI.jsx";
import { Route, Routes } from "react-router-dom";
import Guide from "./components/Guide/Guide.jsx";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        p: 1,
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HandleAPI axios={axios} />} />
          <Route path="Guide" element={<Guide />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
