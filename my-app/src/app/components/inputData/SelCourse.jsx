import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { inputYear } from "@/redux/features/inputdataSlice";

 const SelCourse = () => {
    const [value, setValue] = useState('Курс');
    const dispatch = useDispatch()

    const dispatcher = (val) =>{
      dispatch(inputYear(val)) 
      setValue(val);
    }

    return (
    
<DropdownButton className="dropDown" variant="warning" id="dropdown-basic-button"  title={value}>
      <Dropdown.Item  onClick={()=>dispatcher("I курс")}>I курс</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("II курс")}>II курс</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("III курс")}>III курс</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("IV курс")}>IV курс</Dropdown.Item>
    </DropdownButton>
    )
}
export default SelCourse;