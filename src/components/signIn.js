import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from '../axios'
import swal from 'sweetalert';

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('userName'),
      password: data.get('password'),
    });
    let user = {
      UserName: data.get('userName'),
      Password: data.get('password'),
    }

    axios.get(`User/SignIn?name=${user.UserName}&password=${user.Password}`).then(res => {
      console.log(res.data);
      if (res.data !== null && res.data.Status == 'לקוח') {
       navigate('/ClientMenu');
       localStorage.setItem("user",JSON.stringify(res.data)); 
        swal("ברוך הבא", "!התחברת בהצלחה", "success");
      } else if (res.data != null && res.data.Status === 'בעל מקצוע') {
        navigate('/professionalMenu'); swal("ברוך הבא", "!התחברת בהצלחה", "success");
      } else { swal("משתמש לא קיים", "נא להרשם", "error"); navigate('/SignUp' ,{state:{user}}) }
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
            כניסה
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="שם משתמש"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמה"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="זכור אותי"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              התחברות
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
