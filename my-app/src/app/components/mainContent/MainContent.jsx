import Marks from "./Marks"
import Example from "../Example"
import { useSelector } from "react-redux";
const MainContent = () => {
    const studentName = useSelector((state)=> state.inputData.studentName);
    
    return (
        <>
            {studentName ? <Marks /> : <Example />}
        </>
    )
}

export default MainContent
