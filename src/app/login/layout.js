import "../globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Box from "@mui/material/Box";
export default function LoginLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Make sure the layout covers full screen
      }}
    >
      <Navbar />

      {/* Main content takes up remaining space */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer always sticks to the bottom */}
      <Footer />
    </Box>
  );
}
