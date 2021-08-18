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
import {view, invoke} from '@forge/bridge'
import "./App.css"
 
function App() {
    const [data, setData] = useState(null);
    const [contextKey, setContextKey] = useState(null);
    const [contextId, setContextId] = useState(null)
    //export later get key
    useEffect(() => {
        async function getKey(){
            const value = await view.getContext();
            setContextKey(value.extension.project.key);
        }
        getKey();
    }, []);
    
    //export later get id
    useEffect(() => {
        async function getId(){
            const value = await view.getContext();
            setContextId(value.extension.project.id);
        }
        getId();
    }, []);

    useEffect(() => {
        async function getPromise(){
            await invoke('getText', { projectKey: "CKRS" }).then(setData); 
        }
        getPromise();

    }, []);

    return (
        <div>
            {data ? data : 'Loading...' }
            {contextKey ? contextKey : 'Loading...'}
            {contextId ? contextId : 'Loading...'}
        </div>
    );
}

export default App;
