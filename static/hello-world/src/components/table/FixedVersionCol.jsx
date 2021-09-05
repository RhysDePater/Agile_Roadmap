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
import { useAppContext } from "../../services/contextLib";


export default function FixedVersionCol() {
    const {fixedVersions, setFixedVersions} = useAppContext();

    const [FVdata, setFVData] = useState();

    useEffect(() => {
        setFVData(fixedVersions);
    }, [fixedVersions]);


    return(    
        <Row>
            <div className="ui-cont">
                <Col xs="auto">
                    <div className="InitiativeSize"></div>
                </Col>
                {(() => {
                    if (FVdata) {
                        return (
                            <div className="ui-cont">
                                {FVdata.map((fixVer, i) => {
                                    if(FVdata[i][FVdata[i].length -1] == true){
                                        return(
                                            <Col xs="auto">
                                                <div className="fixSize">
                                                    <p className="dateonfix">
                                                        {FVdata[i][1]} -- {FVdata[i][2]} -{" "}
                                                        {FVdata[i][3]}
                                                    </p>
                                                </div>
                                            </Col>
                                        )
                                    }else{
                                        return;
                                    }
                                })}
                            </div>
                        );
                    } else {
                        return <div>Loading..</div>;
                    }
                })()}
            </div>
        </Row>
    )
};