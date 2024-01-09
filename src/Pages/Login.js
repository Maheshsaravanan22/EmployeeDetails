import "../assets/css/Login.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();
   const handleClick = () => {
    navigate("/AllEmployee");
   }
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          mb:11
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://img.freepik.com/premium-photo/portrait-young-businesswoman-working-her-laptop-coffee-shop-business-concept_58466-13675.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Login 
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                 <label for="exampleFormControlInput1" className="form-label" style={{fontSize:"15px",textAlign:"center",color:"blue"}}>Please login to continue</label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                   <Box className="bd-cnt"
                          sx={{     display: 'flex',flexWrap:'nowrap' }}>
                            <Box className="col-auto">
                            <Checkbox {...label}/>
                            <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                            </Box>
                            <Box className="col-auto">
                            <label className="form-check-label" for="flexCheckDefault">Forgot Password  ?
                </label>
                            </Box>
                            </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/Signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}