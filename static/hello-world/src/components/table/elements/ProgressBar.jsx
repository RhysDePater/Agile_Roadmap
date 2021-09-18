import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col, Progress
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";





export function ProgressBar(size, done, progress, backlog) {
    let number = 100 / size;

    return (
        <div className="ProgBar"><Progress multi>
            <Progress bar className="progressGreen" color="success" value={done * number}> {done}</Progress>
            <Progress bar className="progressBlue"  value={progress * number}> {progress}</Progress>
            <Progress bar className="progressGrey" value={backlog * number}> {backlog}</Progress>
        </Progress></div>

    )
}

export function LoadingBar(){
    return(
        <div>
            <Progress animated value="100">Loading...</Progress>
        </div>

    )
}

export function EmptyBar(){
    return(
        <div className="ProgBar">
            <Progress bar className="progressGrey" value="100">No Epics exist</Progress>
        </div>
    )
}