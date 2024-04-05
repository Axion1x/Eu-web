'use client'
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputName } from "@/redux/features/inputdataSlice";
const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const query = useSelector((state)=> state.inputData.studentName)
  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    dispatch(inputName(""))
    setIsOpen((isOpen) => !isOpen);
    
    dispatch(inputName(option[label]));
    
  };
  

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (selectedVal) {
      return selectedVal;
    }
    if (query) {
      return query;
    }
    return "";
  };
  

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            placeholder="Введіть ім'я ..."
            type="text"
            value={query}
            name="searchTerm"
            onChange={(e) => {
              dispatch(inputName(e.target.value))

              handleChange(null);
            }}
            onClick={toggle}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option[label] === selectedVal ? "selected" : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchableDropdown;