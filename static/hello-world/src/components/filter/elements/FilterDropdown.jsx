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

export default function FilterDropdown(arrayToFilter, setArrayToFilter, filter) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>

            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className="buttonDrop">
                <DropdownToggle caret className="fgh">
                    Filter {filter}
                </DropdownToggle>
                <DropdownMenu>
                    {arrayToFilter.map((data, i) => (
                        <DropdownItem toggle={false}><FormGroup check>
                            <Label check>
                                {arrayToFilter[i].name /**label names */}
                                <Input type="checkbox"
                                    defaultChecked={data.isSelected /**checkbox is ticked value*/}
                                    onChange={(e) => {
                                        //store current data
                                        //if an event update
                                        if (e.target.checked == true) {
                                            let newArr = [...arrayToFilter];
                                            console.log("BOOLEAN set to: " + e.target.checked);
                                            //store updated value in temp array
                                            newArr[i].isSelected = e.target.checked;
                                            //update usestate
                                            setArrayToFilter(newArr)
                                            console.log(arrayToFilter[i].isSelected);
                                        }
                                        // check if box is not ticked
                                        if (e.target.checked == false) {
                                            let newArr = [...arrayToFilter];
                                            console.log("BOOLEAN set to: " + e.target.checked);
                                            //store updated value in temp array
                                            newArr[i].isSelected = e.target.checked;
                                            //update usestate
                                            setArrayToFilter(newArr)
                                            console.log(arrayToFilter[i].isSelected);

                                        }
                                    }} />{" "}
                            </Label>{" "}
                        </FormGroup></DropdownItem>
                    ))}
                </DropdownMenu>
            </ButtonDropdown>

        </div>
    )
};
