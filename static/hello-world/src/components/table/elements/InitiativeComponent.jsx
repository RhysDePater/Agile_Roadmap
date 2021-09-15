import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col, Progress
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";
import {ProgressBar, LoadingBar } from "./ProgressBar";


export default function Initiative(props) {
    const { initiativesProgress, setInitiativeProgress } = useAppContext();
    return (
        <Col xs="auto">
            <div className="initiativeBox">
                <div className="intiative">
                    {props.title}
                    <div className="pbar">
                    {initiativesProgress.map((iProgress, i) => (
                        <div>
                            {(() => {
                                if (iProgress.key == props.iKey) {

                                    if (!iProgress.length == 0) {


                                        return (
                                            <div>
                                                {ProgressBar(iProgress.length, iProgress.Done, iProgress.Progress, iProgress.Backlog)}
                                                <span className="storieblue"> Done</span>
                                                <span> / </span>
                                                <span className="storieGreen"> in Progress</span>
                                                <span> / </span>
                                                <span className="storieGrey"> Backlog</span>

                                            </div>

                                        );

                                    };
                                }
                            })()}
                        </div>
                    ))}
                    </div>
                </div>
            </div>

        </Col>

    )
}