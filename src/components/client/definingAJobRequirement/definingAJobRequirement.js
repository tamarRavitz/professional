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
import axios from '../../../axios'
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from "@material-ui/core";
import swal from 'sweetalert';
// import { Navigate } from 'react-router-dom';
import EmployeeList from '../clientMenu/employeeList/employeeList';
//הגדרת דרישת עבודה

const theme = createTheme();

export default function DefiningAJobRequirement() {
    let navigate = useNavigate()
    const handleSubmit = (event) => {
       
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = JSON.parse(localStorage.getItem("user"))
        console.log(user)
        let definingAJobRequirement = {
            ProfessionID: data.get('profesion'),
            JobDescription: data.get('jobDescription'),
            GlobalPrice: data.get('payment'),
            PreHourPrice: data.get('maxPrice'),
            DateOfApplication: data.get('lastDate'),
            UserID: user.UserID,
            Status:0
        }
        console.log(definingAJobRequirement);
        axios.post('JobApplication/AddJobApplication/', definingAJobRequirement).
            then(res => {
                console.log(res.data)
                navigate('/EmployeeList');
                swal("בקשתך התקבלה בהצלחה!", " ", "success");
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
                        הגדרת דרישת עבודה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                        <FormControl >
                                <InputLabel id="demo-simple-select-helper-label">מקצוע</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value='3'
                                    //temp אם צריך לשמירה היה פה משתנה אפשר להסתכל ב
                                    label="Size"
                                    name="profesion"
                                    variant="outlined"
                                    style={{ minWidth: '16vw' }}
                                >
                                    <MenuItem value={1}>גרפיקה</MenuItem>
                                    <MenuItem value={2}>אינסטלטור</MenuItem>
                                    <MenuItem value={3}>נגר</MenuItem>
                                    <MenuItem value={4}>סבל</MenuItem>
                                    <MenuItem value={5}>הובלות</MenuItem>
                                    <MenuItem value={6}>שליחויות</MenuItem>
                                    <MenuItem value={7}>מאפרת</MenuItem>
                                    <MenuItem value={8}>מתסרקת</MenuItem>
                                    <MenuItem value={9}>פאנית</MenuItem>
                                    <MenuItem value={10}>חשמלאי</MenuItem>
                                    <MenuItem value={11}>הסעות</MenuItem>
                                    <MenuItem value={12}>גנן</MenuItem>
                                    <MenuItem value={13}>אדריכל</MenuItem>
                                    <MenuItem value={14}>משרטט</MenuItem>
                                    <MenuItem value={15}>ביביסיטר</MenuItem>
                                    <MenuItem value={16}>זגג</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="jobDescription"
                                    label="תיאור העבודה"
                                    type="jobDescription"
                                    id="jobDescription"
                                    autoComplete="new-jobDescription"
                                />
                            </Grid>
                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label"> צורת תשלום</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value='3'
                                    //temp אם צריך לשמירה היה פה משתנה אפשר להסתכל ב
                                    label="Size"
                                    name="payment"
                                    variant="outlined"
                                    style={{ minWidth: '16vw' }}
                                >
                                    <MenuItem value={0}>מחיר גלובלי</MenuItem>
                                    <MenuItem value={1}>מחיר שעתי</MenuItem>
                                </Select>
                            </FormControl>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    required
                                    fullWidth
                                    id="maxPrice"
                                    label="מחיר מקסימאלי"
                                    name="maxPrice"
                                    autoComplete="maxPrice"
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastDate"
                                    label="תאריך אחרון לביצוע"
                                    name="lastDate"
                                    autoComplete="lastDate"
                                    type="date"
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