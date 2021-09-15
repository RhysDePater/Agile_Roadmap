import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";
import {ProgressBar, LoadingBar } from "./ProgressBar";


export default function Initiative(props) {
    return (
        <Col xs="auto">
            <div className="initiativeBox">
                <div className="intiative">
                    {props.title}
                </div>
            </div>

        </Col>

    )
}