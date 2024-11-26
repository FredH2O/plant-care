import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 1, minHeight: "100vh" }}>
      <Header />
    </Box>
  );
}

export default App;
