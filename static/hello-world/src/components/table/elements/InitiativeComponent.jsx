import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col, Progress
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";
import { ProgressBar, LoadingBar } from "./ProgressBar";


export default function Initiative(props) {
    const { initiativesProgress, setInitiativeProgress } = useAppContext();
    return (
        <Col xs="auto">
            <div className="initiativeBox">
                <div className="intiative">
                    <div className="iniTitle">{props.title}</div>

                    <div className="pbar">
                        {initiativesProgress.map((iProgress, i) => (
                            <div>
                                {(() => {
                                    if (iProgress.key == props.iKey) {

                                        if (!iProgress.length == 0) {


                                            return (
                                                <div>
                                                    <div className="initiativeBar">{ProgressBar(iProgress.length, iProgress.Done, iProgress.Progress, iProgress.Backlog)}</div>

                                                    <span className="storieGreen"> Done</span>
                                                    <span> / </span>
                                                    <span className="storieblue"> in Progress</span>
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