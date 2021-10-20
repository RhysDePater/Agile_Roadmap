import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import {router} from "@forge/bridge"
import {
    Col, Progress
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";
import { ProgressBar, LoadingBar, EmptyBar } from "./ProgressBar";


export default function Initiative(props) {
    const { initiativesProgress, setInitiativeProgress } = useAppContext();
    return (
        <Col xs="auto">
            <div className="initiativeBox">

                {/* Display initiative and allow it to open in new tab when clicked*/}
                <div className="initiative" onClick={(()=> router.open(`/browse/${props.iKey}`))}>
                    <div className="iniTitle">{props.title}</div>

                    {/* Display progress bar for initiative*/}
                    <div className="pbar">
                        {initiativesProgress.map((iProgress, i) => (
                            <div>
                                {(() => {
                                    if (iProgress.key == props.iKey) {

                                        {/* Display progress bar, if empty display gray box*/}
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

                                        }else{
                                            return(
                                                <div>
                                                    <div className="initiativeBar">{EmptyBar()}</div>

                                                </div>
                                            )
                                        };
                                    }
                                })()}
                            </div>
                        ))}
                    </div>
                    {/* initiative due date and key*/}
                    <div className="InititivetextCont">
                        <div className="initiativeDueDate"><p className="initDueDate">{props.dueDate}</p></div>
                        <div className="initiativeKey"><p className="initKey">{props.iKey}</p></div>

                    </div>
                    
                </div>
            </div>

        </Col>

    )
}