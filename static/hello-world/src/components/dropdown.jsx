import React from 'react';

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

const dropDown = ((checkBoxNames, setBoolean) => {
    return( 
        <div className="dropitem">
            <FormGroup check>
              <Label check>
                <Input
                    type="checkbox"
                    onChange={(e) => console.log(e.target.value)}
                />{" "}
              </Label>
            </FormGroup>
        </div>);        
});
export default dropDown;