"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

function Login() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div>
      <div className="loginRectangle">
        {/* <div className="loginHeader">
          <h1>Login Page</h1>
        </div> */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }}>
              {/* <Item>xs=6 md=8</Item> */}
              <div className="loginPageImage"></div>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Login;
