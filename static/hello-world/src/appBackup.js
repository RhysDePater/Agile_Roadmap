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
//
import { AppContext } from "./services/contextLib";
//components
// 
import { view, invoke } from "@forge/bridge";
import "./App.css";
// import FilterDropDown from "./components/filter/FilterDropdown"
import FilterComponent from "./components/filter/FilterComponent";
import {parseIssues, parseInitiatives} from "./services/helper";
import TableComponent from "./components/table/TableComponent";
import FixedVersionCol from "./components/table/FixedVersionCol";
export default function App() {
    //usestates
    const [fixedVersions, setFixedVersions] = useState([]);
    const [initiatives, setInitiatives] = useState([]);
    const [issues, setIssues] = useState([]);
    const [modal, setModal] = useState(false);
    const toggleM = () => setModal(!modal);

    useEffect(() => {
        async function getAllInfo() {
            try{
                const context = await view.getContext();
                const key = context.extension.project.key
                await invoke("getFixedVersions", { projectKey: key }).then((data) =>
                    setFixedVersions(data)
                );
                await invoke("getIssues", { projectKey: key }).then(async function func(data){
                    const issues = parseIssues(data);
                    setInitiatives(parseInitiatives(issues));
                    setIssues(issues);
                    } 
                );
            }catch(e){
                console.log("API RENDER ERROR: " + e);
            }
        }
        getAllInfo();        
    }, []);
            
    //fixedVersions[i][fixedVersions.length -1] this is the index of the true or false value for the filter function
    //initiatives[i][initiatives.length -1] this is the index of the true or false value for the filter function
    //add this filter function to the if checks when rendering what is displayed

    if(issues.length > 0 && fixedVersions.length > 0 && fixedVersions.length > 0){
        return (
            <div>
                <AppContext.Provider value={{fixedVersions, setFixedVersions, issues, setIssues, initiatives, setInitiatives}}>
                    <FilterComponent/>
                    <FixedVersionCol/>
                    {issues.map((issu, i) => (
                                    // Getting initiatives and displaying them
                                    <div>
                                        {(() => {
                                            if (issues[i][2] == "Initiative") {
                                                return (
                                                    // Getting fix versions
                                                    <Row>
                                                        <div className="ui-cont">
                                                            {" "}
                                                            <Col xs="auto">
                                                                <div className="initiativeBox">
                                                                    <div className="intiative">
                                                                        {initiatives[i][1]}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            {fixedVersions.map((fixv, j) => (
                                                                <Col xs="auto">
                                                                    <div className="fixedVersion">
                                                                        {issues.map((issu1, k) => (
                                                                            <div>
                                                                                {(() => {
                                                                                    if (issues[k][3] == fixedVersions[j][0]) {
                                                                                        return (
                                                                                            // Getting Epics
                                                                                            <div>
                                                                                                {issues[k][4].map((epi, l) => (
                                                                                                    // If Epics match Initiative and fix version then display
                                                                                                    <div>
                                                                                                        {(() => {
                                                                                                            if (issues[k][4][l] == issues[i][0]) {
                                                                                                                return (
                                                                                                                    // display stories
                                                                                                                    <div className="epic" onClick={toggleM}>

                                                                                                                        <div className="epicName">
                                                                                                                            <p>
                                                                                                                                {issues[k][1]}
                                                                                                                            </p>
                                                                                                                        </div>

                                                                                                                        {issues[k][5].map((str, x) => (
                                                                                                                            <div className="Storybox">
                                                                                                                                Story: {issues[k][5][x]}
                                                                                                                            </div>
                                                                                                                        )
                                                                                                                        )}
                                                                                                                        <p className="epicNum">{issues[k][0]}</p>
                                                                                                                    </div>
                                                                                                                );
                                                                                                            }
                                                                                                        })()}
                                                                                                    </div>
                                                                                                )
                                                                                                )}
                                                                                            </div>
                                                                                        );
                                                                                    }
                                                                                })()}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </Col>
                                                            ))}
                                                        </div>
                                                    </Row>
                                                );
                                            }
                                        })()}
                                    </div>
                                ))}

                    <div className="Api">
                        <div>
                            {fixedVersions ? fixedVersions : "Loading..."}
                        </div>
                        <div>
                            {issues ? issues : "Loading..."}
                        </div>

                    </div>
                </AppContext.Provider>
            </div>       
        );
    }else{
        return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    }
}