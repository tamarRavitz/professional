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
import { useNavigate,useLocation } from 'react-router-dom'
import axios from '../axios'
import Combobox from "react-widgets/Combobox";
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@material-ui/core";
import swal from 'sweetalert';

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = React.useState({
    FirstName: '',
      LastName: '',
      Password: location.state.user.Password,
      UserName: location.state.user.UserName,
      Status: 'בעל מקצוע',
      City: '',
      Phone: '',
      Address: '',
      Email: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log(user);
    axios.post('User/SignIn/',  user ).
      then(res => {
        console.log(res.data)
        if (res.data !== null && res.data.Status == 'לקוח') {
          navigate('/ClientMenu'); 
           swal("ברוך הבא", "!נרשמת בהצלחה", "success");
         } else if (res.data != null && res.data.Status === 'בעל מקצוע') {
           navigate('/professionalMenu'); swal("ברוך הבא", "!נרשמת בהצלחה", "success");
         } else { swal("משתמש קיים", "נא להכנס", "error"); navigate('/SignIn') }
       })
      .catch(err => console.log(err))

  };

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
            הרשמה
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="שם משתמש"
                  name="userName"
                  autoComplete="userName"
                  value={user.UserName}
                  onChange={(e)=>setUser({...user,UserName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="סיסמה"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.Password}
                  onChange={(e)=>setUser({...user,Password:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  required
                  fullWidth
                  label="שם משפחה"
                  id="lastName"
                  value={user.LastName}
                  onChange={(e)=>setUser({...user,LastName:e.target.value})}
                  // autoFocus="lastName"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="שם פרטי"
                  name="firstName"
                  autoComplete="firstName"
                  value={user.FirstName}
                  onChange={(e)=>setUser({...user,FirstName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl >
                  <InputLabel id="demo-simple-select-helper-label"> סטטוס</InputLabel>
                  <Select
                    name="status"
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    // value='3'
                    //temp אם צריך לשמירה היה פה משתנה אפשר להסתכל ב
                    label="Size"
                    variant="outlined"
                    style={{ minWidth: '10vw' }}
                    value={user.Status}
                    onChange={(e)=>setUser({...user,Status:e.target.value})}
                  >
                    <MenuItem value={"בעל מקצוע"}>בעל מקצוע</MenuItem>
                    <MenuItem value={"לקוח"}>לקוח</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="טלפון"
                  name="phone"
                  autoComplete="phone"
                  value={user.Phone}
                  onChange={(e)=>setUser({...user,Phone:e.target.value})}
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
                  value={user.Email}
                  onChange={(e)=>setUser({...user,Email:e.target.value})}
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
                  value={user.City}
                  onChange={(e)=>setUser({...user,City:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="כתובת"
                  name="adress"
                  autoComplete="adress"
                  value={user.Address}
                  onChange={(e)=>setUser({...user,Address:e.target.value})}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}