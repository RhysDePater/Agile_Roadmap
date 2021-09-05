import React, { useEffect, useState, version } from "react";

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


export default function EpicCards(fixedVersions, issues, intiatives, i){
    const [modal, setModal] = useState(false);
    const toggleM = () => setModal(!modal);

    return(
        <div>       
            {fixedVersions.map((fixv, j) => (
                <Col xs="auto">
                    <div className="fixedVersion">
                        {issues.map((issu1, k) => (
                            <div>
                                {(() => {
                                    if (issues[k][3] == fixedVersions[j][0]) {
                                        return (
                                            // Getting Epics
                                            <div>
                                                {issues[k][4].map((epi, l) => (
                                                    // If Epics match Initiative and fix version then display
                                                    <div>
                                                        {(() => {
                                                            if (issues[k][4][l] == intiatives[i][0]) {
                                                                return (
                                                                    // display stories
                                                                    <div className="epic" onClick={toggleM}>
                                                                    
                                                                        <div className="epicName">
                                                                            <p>
                                                                                {issues[k][1]}
                                                                            </p>
                                                                        </div>
                                                                
                                                                        {issues[k][5].map((str, x) => (
                                                                            <div className="Storybox">
                                                                                Story: {issues[k][5][x]}
                                                                            </div>
                                                                        )
                                                                        )}
                                                                        <p className="epicNum">{issues[k][0]}</p>
                                                                    </div>
                                                                );
                                                            }
                                                        })()}
                                                    </div>
                                                )
                                                )}
                                            </div>
                                        );
                                    }
                                })()}
                            </div>
                        ))}
                    </div>
                </Col>
            ))}
        </div>
    )
}

