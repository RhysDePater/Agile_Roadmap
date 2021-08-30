import React, { useEffect, useState } from "react";
import {
    Button,
    Container,
    Row,
    Col,
    ButtonDropdown,
    DropdownToggle,
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

import { view, invoke } from "@forge/bridge";
import "./App.css";

function App() {
    const [fixedVerions, setfixedVerions] = useState(null);
    const [issues, setIssues] = useState(null);
    const [contextKey, setContextKey] = useState(null);
    const [contextId, setContextId] = useState(null);
    const [dropdownOpen, setOpen] = useState(false);

    const [modal, setModal] = useState(false);

    const toggleM = () => setModal(!modal);

    const toggle = () => setOpen(!dropdownOpen);
    //export later get key
    useEffect(() => {
        async function getKey() {
            const value = await view.getContext();
            setContextKey(value.extension.project.key);
        }
        getKey();
    }, []);

    //export later get id
    useEffect(() => {
        async function getId() {
            const value = await view.getContext();
            setContextId(value.extension.project.id);
        }
        getId();
    }, []);

    useEffect(() => {
        async function getFixedVersions() {
            await invoke("getFixedVersions", { projectKey: "CKRS" }).then(
                setfixedVerions
            );
        }
        getFixedVersions();
    }, []);

    useEffect(() => {
        async function getIssues() {
            await invoke("getIssues", { projectKey: "CKRS" }).then(setIssues);
        }
        getIssues();
    }, []);

    return (
        <div>
            {/* Filter dropdown*/}
            <Row>
                <Col sm={{ size: "auto", offset: 10 }}>
                    <div className="options">
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>Filter</DropdownToggle>
                            <DropdownMenu>
                                <Form>
                                    {(() => {
                                        if (fixedVerions) {
                                            return (
                                                <div>
                                                    {fixedVerions.map((fixVer, i) => (
                                                        <DropdownItem>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    {fixedVerions[i][1]}
                                                                    <Input type="checkbox" />{" "}
                                                                </Label>{" "}
                                                            </FormGroup>
                                                        </DropdownItem>
                                                    ))}
                                                </div>
                                            );
                                        } else {
                                            return <DropdownItem>Loading..</DropdownItem>;
                                        }
                                    })()}
                                </Form>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                </Col>
            </Row>

            {/* Fixed versions*/}
            <Row>
                <div className="ui-cont">
                    <Col xs="auto">
                        <div className="InitiativeSize"></div>
                    </Col>

                    {(() => {
                        if (fixedVerions) {
                            return (
                                <div className="ui-cont">
                                    {fixedVerions.map((fixVer, i) => (
                                        <Col xs="auto">
                                            <div className="fixSize">
                                                <p className="dateonfix">
                                                    {fixedVerions[i][1]} -- {fixedVerions[i][2]} -{" "}
                                                    {fixedVerions[i][3]}
                                                </p>
                                            </div>
                                        </Col>
                                    ))}
                                </div>
                            );
                        } else {
                            return <div>Loading..</div>;
                        }
                    })()}
                </div>

                {/* Initiatives with matching epics in fixed versions*/}
            </Row>
            <div>
                {(() => {
                    if (issues && fixedVerions) {
                        return (
                            <div>
                                {issues[0].map((issu, i) => (
                                    // Getting initiatives and displaying them
                                    <div>
                                        {(() => {
                                            if (issues[0][i][2] == "Initiative") {
                                                return (
                                                    // Getting fix versions
                                                    <Row>
                                                        <div className="ui-cont">
                                                            {" "}
                                                            <Col xs="auto">
                                                                <div className="initiativeBox">
                                                                    <div className="intiative">
                                                                        {issues[0][i][1]}
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            {fixedVerions.map((fixv, j) => (
                                                                <Col xs="auto">
                                                                    <div className="fixedVersion">
                                                                        {issues[0].map((issu1, k) => (
                                                                            <div>
                                                                                {(() => {
                                                                                    if (issues[0][k][3] == fixedVerions[j][0]) {
                                                                                        return (
                                                                                            // Getting Epics
                                                                                            <div>
                                                                                                {issues[0][k][4].map((epi, l) => (
                                                                                                    // If Epics match Initiative and fix version then display
                                                                                                    <div>
                                                                                                        {(() => {
                                                                                                            if (issues[0][k][4][l] == issues[0][i][0]) {
                                                                                                                return (
                                                                                                                    // display stories
                                                                                                                    <div className="epic" onClick={toggleM}>
                                                                                                                        <p>
                                                                                                                            <div className="epicName">
                                                                                                                                {issues[0][k][1]}
                                                                                                                            </div>
                                                                                                                        </p>

                                                                                                                        {issues[0][k][5].map((str, x) => (
                                                                                                                            <div className="Storybox">
                                                                                                                                Story:{issues[0][k][5][x]}
                                                                                                                            </div>
                                                                                                                        )
                                                                                                                        )}
                                                                                                                        <p className="epicNum">{issues[0][k][0]}</p>
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
                            </div>
                        );
                    } else {
                        return <div>Loading...</div>;
                    }
                })()}
            </div>

            {/*
            <Modal isOpen={modal} toggle={toggleM}>
                <ModalHeader toggle={toggleM}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggleM}>Do Something</Button>{' '}
                </ModalFooter>
            </Modal>
            */}

            <br></br>
            <br></br>
            <br></br>

            {issues
                ? issues[0].map((value, i) => (
                    <div>
                        <div>{issues[0][i]}</div>
                    </div>
                ))
                : "Loading.."}
            <div className="Api">
                <div>
                    <h>Fixed Versions:</h>
                    {fixedVerions ? fixedVerions : "Loading..."}
                </div>
                <br></br>
                <div>
                    <h>contextKey:</h>
                    {contextKey ? contextKey : "Loading..."}
                </div>
                <br></br>
                <div>
                    <h>contextId:</h>
                    {contextId ? contextId : "Loading..."}
                </div>
            </div>
        </div>
    );
}

export default App;
