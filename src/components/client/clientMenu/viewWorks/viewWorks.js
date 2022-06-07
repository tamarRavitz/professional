import swal from "sweetalert";
import axios from "../../../../axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const theme = createTheme();

export default function ViewWorks() {
    const navigate = useNavigate();
    const [jobApplication, setJobApplication] = useState([])
    const onLoading = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        axios.get(`JobApplication?id=${user.UserID}`).then(res => {
            console.log(res.data);
            res.data === null ? swal("סליחה", "אין הצעות עבודה", "error") :
                setJobApplication(res.data)
        })
            .catch(err => console.log(err))
    };
    useEffect(() => {
        onLoading()
    }, [])

    return (<>
        {jobApplication.length !== 0 ?
            jobApplication.map((item) => (<div key={item.jobApplicationID}>{item.JobDescription}</div>))
            : ''}</>
    );
}
