import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import "./App.css"
//import API TO MOVE TO APPROPRIATE LOCATION LATER
import {fetchIssueKeys} from "./controller/api/fetch";
import {getAppContextKey, getAppContextId } from './controller/helper/contextLib';
//

function Column(props) {
    return (
        <Col class="col">
            <div class="columnBox"> {props.title}</div>
        </Col>
    );
}

function App() {
    //API CONSTS TO MOVE TO APPROPRIATE LOCATION LATER
    const contextKey = getAppContextKey();
    const contextId = getAppContextId();
    const [issues] = useState(async () => await fetchIssueKeys(contextKey));    
    /** HTML TO DISPLAY DATA
    <div>
        <Text>Hello world 4! Project Key: {contextKey}, Project ID: {contextId}</Text>
        <Text>{JSON.stringify(issues)}</Text>
    </div>

     */
    const [ColumnName, SetColumnName] = useState();
    const [columns, setColumns] = useState([
        { id: 1, title: "Column 1" },
        { id: 1, title: "Column 2" }
    ]);

    function handleNewColumn() {
        // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
        const updateUsers = [
            // copy the current users state
            ...columns,
            // now you can add a new object to add to the array
            {
                // using the length of the array for a unique id
                id: columns.length + 1,
                // adding a new user name
                title: ColumnName
            }
        ];
        // update the state to the updatedUsers
        setColumns(updateUsers);
    }

    return (
        <div>
            <Container fluid={true}>
                <Row xs="5">
                    <Form
                        inline
                        onSubmit={() => {
                            event.preventDefault();
                            handleNewColumn();
                        }}
                    >
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <InputGroup>
                                <Input
                                    type="text"
                                    id="newColumnInput"
                                    value={ColumnName}
                                    onChange={(event) => {
                                        const { value } = event.target;
                                        SetColumnName(value);
                                    }}
                                />
                                <InputGroupAddon addonType="append">
                                    <Button color="secondary" type="submit">
                                        Add Column
                                    </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </Row>
                <br />

                <Row xs="6">
                <Col class="col">
                    <div class="columnBox"> Column <div class="card"> card 1 </div></div>
                    </Col>
                    {columns.map((column) => (
                        <Column title={column.title} />
                    ))}
                    
                    
                </Row>
            </Container>
        </div>
    );
}

export default App;
