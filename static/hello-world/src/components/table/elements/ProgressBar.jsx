import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col, Progress
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";





export default function ProgressBar(size, done, progress, backlog) {
    let number = 100 / size;

    return (
        <div className="ProgBar"><Progress multi>
            <Progress bar className="progressBlue" value={done * number}> {done}</Progress>
            <Progress bar className="progressGreen" color="success" value={progress * number}> {progress}</Progress>
            <Progress bar className="progressGrey" value={backlog * number}> {backlog}</Progress>
        </Progress></div>

    )
}