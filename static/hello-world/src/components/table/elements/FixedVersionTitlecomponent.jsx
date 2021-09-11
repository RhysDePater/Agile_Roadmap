import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col
} from "reactstrap";


export default function FixedVersionTitle(props) {
    return (
        <Col xs="auto">
            <div className="fixSize">
                <p className="dateonfix">
                    {props.title} -- {props.start} -{" "}
                    {props.end}
                </p>
            </div>

        </Col>
    )
}