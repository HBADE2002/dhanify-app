import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <AppBar position="static" sx={{ mt: "auto" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
