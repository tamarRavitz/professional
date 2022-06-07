import swal from "sweetalert";
import axios from "../../../../axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function EmployeeList() {
    // let employeeList = []
    // const navigate = useNavigate();
    // const onLoading = (event) => {
    //     event.preventDefault();
    //     const user = JSON.parse(localStorage.getItem("user"));  
    //     axios.get(`JobApplication/GetAllJobApplication?id=${user.UserID}`).then(res => {
    //         console.log(res.data);
    //         res.data === null ? swal("סליחה", "אין הצעות עבודה", "error") :
    //             jobApplication = res.data
    //     })
    //         .catch(err => console.log(err))
    // };
    // onLoading()
    return (
    // <div onLoad={(e)=>onLoading(e)}>
    <div>
       {/* {employeeList.map(item => <div>{item.UserID}</div>)} */}
    </div>
    );
}
