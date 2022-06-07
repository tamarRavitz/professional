import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const theme = createTheme();
//עדכון פרטים רישיים
export default function UpdatePersonalDetails() {
  // let navigate = useNavigate()
  const [currentUser, setCurrentUser] = React.useState({})
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currentUser)
    axios.put('https://localhost:44315/api', { currentUser }).
      then(res => {
        console.log(res.data)
        // navigate('/')
      })
      .catch(err => console.log(err))

  };
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            עדכון פרטים רישיים
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  label="שם משפחה"
                  id="firstName"
                  autoFocus
                  value={currentUser.FirstName}
                  onChange={(e)=>setCurrentUser({...currentUser,FirstName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="שם פרטי"
                  name="lastName"
                  autoComplete="family-name"
                  value={currentUser.LastName}
                  onChange={(e)=>setCurrentUser({...currentUser,LastName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="טלפון"
                  name="phone"
                  autoComplete="family-name"
                  value={currentUser.Phone}
                  onChange={(e)=>setCurrentUser({...currentUser,Phone:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="מייל"
                  name="email"
                  autoComplete="email"
                  value={currentUser.Email}
                  onChange={(e)=>setCurrentUser({...currentUser,Email:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  text-align="left"
                  autoComplete="given-name"
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="עיר"
                  autoFocus
                  value={currentUser.City}
                  onChange={(e)=>setCurrentUser({...currentUser,City:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="כתובת"
                  name="adress"
                  autoComplete="family-name"
                  value={currentUser.Address}
                  onChange={(e)=>setCurrentUser({...currentUser,Address:e.target.value})}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              אישור
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}