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
import EpicCards from "./EpicCards";

export default function InitativeRow(fixedVersions, issues, initiatives, epics){   
  
    return(
        <div>
            {initiatives.map((issu, i) => (
                // Getting initiatives and displaying them
                <div>
                    {(() => {
                        if(initiatives[i][initiatives[i].length -1] == true)
                            return (
                                // Getting fix versions
                                <Row>
                                    <div className="ui-cont">
                                        {" "}
                                        <Col xs="auto">
                                            <div className="initiativeBox">
                                                <div className="intiative">
                                                    {initiatives[i][1]}
                                                </div>
                                            </div>
                                        </Col>
                                        {EpicCards(fixedVersions, issues, initiatives, i)}
                                    </div>
                                </Row>
                            );
                    })()}
                </div>
            ))}
        </div> 
    )
};
