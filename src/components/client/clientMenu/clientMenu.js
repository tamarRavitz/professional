import { useNavigate } from "react-router-dom";

export default function ClientMenu() {
const navigate = useNavigate();
return(<>

<button onClick={()=>navigate("/ViewWorks")}>לעבודות</button>
<button onClick={()=>navigate("/DefiningAJobRequirement")}>לעבודה</button>

</>)
}