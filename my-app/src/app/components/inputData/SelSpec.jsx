'use client'
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { inputSpec } from "@/redux/features/inputdataSlice";

 const SelSpec = () => {
    const [value, setValue] = useState('Спеціальність');
    const dispatch = useDispatch();
    const dispatcher = (val) =>{
      dispatch(inputSpec(val)) 
      setValue(val);
    }

    return (
    
<DropdownButton className="dropDown" variant="warning" id="dropdown-basic-button"  title={value}>
      <Dropdown.Item  onClick={()=>dispatcher("ФІСТ")}>ФІСТ</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("ФЕМ")}>ФЕМ</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("Приклад 1")}>Приклад 1</Dropdown.Item>
      <Dropdown.Item onClick={()=>dispatcher("Приклад 2")}>Приклад 2</Dropdown.Item>
    </DropdownButton>
    )
}
export default SelSpec;