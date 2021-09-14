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
import FilterDropdown from "./elements/FilterDropdown";


export default function FilterComponent() {

    const { fixedVersions, setFixedVersions } = useAppContext();
    const { initiatives, setInitiatives } = useAppContext();

    return (
        <div className="dropItem">


            {FilterDropdown(fixedVersions, setFixedVersions, "Realises")}
            {FilterDropdown(initiatives, setInitiatives, "Initiative")}

        </div>
    )
}