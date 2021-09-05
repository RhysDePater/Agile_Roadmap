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
import FixedVersionCol from "./FixedVersionCol";
import InitativeRow from "./InitativeRow";
import { useAppContext } from "../../services/contextLib";
import { parseEpicsWithFV } from "../../services/helper";

export default function TableComponent() {
    const {fixedVersions, setFixedVersions} = useAppContext();
    const {issues, setIssues} = useAppContext();
    const {initiatives, setInitiatives} = useAppContext();
    const [FVdata, setFVData] = useState();
    const [issuesData, setIssueData] = useState();
    const [initiativesData, setInitiativesData] = useState();
    const [epics, setEpics] = useState();

    useEffect(() => {
        setFVData(fixedVersions);
        setInitiativesData(initiatives);
        setIssueData(issues);
        setEpics(parseEpicsWithFV(fixedVersions, issues));
    }, [fixedVersions, issues, initiatives]);

    try {
        return(
            <div>
                {FixedVersionCol(FVdata)}
                {InitativeRow(FVdata, issuesData, initiativesData, epics)}
            </div>
        )        
    } catch (error) {
        console.log(error);
        //data loads after it is called
        return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    }
}