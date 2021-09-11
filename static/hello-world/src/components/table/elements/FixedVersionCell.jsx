import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

import {
    Col
} from "reactstrap";
import { useAppContext } from "../../../services/contextLib";


export default function FixedVersionCell(props) {
    const { epics, setEpics } = useAppContext();

    return (<div className="fixedVersion">
        <p className="fadedTitleCell">{props.title}</p>
        {epics.map((epic, j) => (
            <div>
                {(() => {
                    if (epic.fixVersions == props.id) {
                        return (

                            <div>
                                {epic.parents.map((parent, h) => (
                                    <div>
                                        {(() => {
                                            if (parent == props.initKey) {
                                                return (

                                                    <div>
                                                        <div className="epic">

                                                            <div className="epicName">
                                                                <p>
                                                                    {epic.name}
                                                                </p>
                                                            </div>
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

    </div>)
}