import SelSpec from "./SelSpec";
import SearchableDropdown from "./SearchableDropdown";
import { useState } from "react";
import students from "@/app/data/students";
import SelCourse from "./SelCourse"; 

const InputContainer = () => {
    const [value, setValue] = useState("Ваше ім'я");

    return(
        <div className="inputContainer">
            <SelCourse/>
            <SelSpec/>
            <div className="dropdownContainer">
                <SearchableDropdown
                    options={students}
                    label="name"
                    id="id"
                    selectedVal={value}
                    handleChange={(val) => setValue(val)}
                />
            </div>
        </div>
    )
}
export default InputContainer;
