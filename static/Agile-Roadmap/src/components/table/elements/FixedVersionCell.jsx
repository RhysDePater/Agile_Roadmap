import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import {router} from "@forge/bridge"
import {
    Col, Progress
} from "reactstrap";

// import components and elements
import {ProgressBar} from "./ProgressBar";
import { useAppContext } from "../../../services/contextLib";




export default function FixedVersionCell(props) {
    const { epics, setEpics } = useAppContext();
    const { epicsProgress, setEpicsProgress } = useAppContext();

    return (<div className="fixedVersion">
        <p className="fadedTitleCell">{props.title}</p>

        {/* loop through epics*/}
        {epics.map((epic, j) => (
            <div>


                {epic.fixVersions.map((eFV, p) => (
                    //Make epic open in new tab
                    <div onClick={(() => router.open(`/browse/${epic.key}`))}>
                        {(() => {
                            // Check if fixed version matches with epics fixed version
                            if (eFV == props.id) {
                                return (

                                    <div>
                                        {epic.parents.map((parent, h) => (
                                            <div>
                                                {(() => {
                                                    if (parent == props.initKey) {
                                                        return (

                                                            // Display epic 
                                                            <div>
                                                                <div className="epic">

                                                                    <div className="epicName">
                                                                        <p>
                                                                            {epic.name}
                                                                        </p>
                                                                    </div>

                                                                    {/* Check if progress bar for epic !empty else grey box */}
                                                                    {(() => {
                                                                    if(epicsProgress.length>0)
                                                                    {
                                                                    return(
                                                                        //Progress bar
                                                                    <div className="pbar">

                                                                        {epicsProgress.map((eProgress, i) => (
                                                                            <div>
                                                                                {(() => {
                                                                                    if (eProgress.key == epic.key) {

                                                                                        if (!eProgress.length == 0) {


                                                                                            return (
                                                                                                <div>
                                                                                                    <p>Number of Stories : {eProgress.length}</p>
                                                                                                    {ProgressBar(eProgress.length, eProgress.Done, eProgress.Progress, eProgress.Backlog)}
                                                                                                    <span className="storieGreen"> Done</span>
                                                                                                    <span> / </span>
                                                                                                    <span className="storieblue"> in Progress</span>
                                                                                                    <span> / </span>
                                                                                                    <span className="storieGrey"> Backlog</span>

                                                                                                </div>

                                                                                            );

                                                                                        } else {
                                                                                            return (
                                                                                                <div><p>Number of stories : {eProgress.length}</p></div>
                                                                                            )
                                                                                        };
                                                                                    }
                                                                                })()}
                                                                            </div>
                                                                        ))}
                                                                    
                                                                    </div>
                                                                    )}else{
                                                                        //Loading epics if data empty
                                                                        return (
                                                                            <div class="loader">Loading...</div>
                                                                        );
                                                                    }
                                                                    })()}
                                                                    <p className="epicNum">{epic.key}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })()}
                                            </div>
                                        ))}
                                    </div>
                                );
                            }
                        })()}
                    </div>
                ))}

            </div>
        ))}

    </div>)
}