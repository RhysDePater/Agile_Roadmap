import React, { useEffect, useState } from "react";

import {
    Button,
    Container,
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
} from "reactstrap";

export default function FilterDropdown(arrayToFilter, setArrayToFilter) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <div className="dropdwnbtn"><b>Filter ▶</b></div>
                </DropdownToggle>
                <DropdownMenu>
                    {arrayToFilter.map((data, i) => (
                        <div className="dropitem"><FormGroup check>
                            <Label check>
                                {arrayToFilter[i][1] /**label names */ }
                                <Input type="checkbox" 
                                defaultChecked={data[data.length - 1] /**checkbox is ticked value*/ } 
                                onChange={(e) => {
                                    //store current data
                                    //if an event update
                                    if(e.target.checked == true){     
                                        let newArr = [...arrayToFilter];       
                                        console.log("BOOLEAN set to: " + e.target.checked);                
                                        //store updated value in temp array
                                        newArr[i][newArr[i].length - 1] = e.target.checked;
                                        //update usestate
                                        setArrayToFilter(newArr)              
                                        console.log(arrayToFilter[i][newArr.length - 1]);                                                         
                                    }
                                    // check if box is not ticked
                                    if(e.target.checked == false){
                                        let newArr = [...arrayToFilter];
                                        console.log("BOOLEAN set to: " + e.target.checked);
                                        //store updated value in temp array
                                        newArr[i][newArr[i].length - 1] = e.target.checked;
                                        //update usestate
                                        setArrayToFilter(newArr)  
                                        console.log(arrayToFilter[i][newArr.length - 1]);                                                         
             
                                    }                                                                            
                                }} />{" "}
                            </Label>{" "}
                        </FormGroup></div>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )      
};
