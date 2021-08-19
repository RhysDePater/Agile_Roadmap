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
    const [fixedVerions, setfixedVerions] = useState(null);
    const [issues, setIssues] = useState(null);
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
        async function getFixedVersions(){
            await invoke('getFixedVersions', { projectKey: "CKRS" }).then(setfixedVerions); 
        }
        getFixedVersions();
    }, []);

    useEffect(() => {
        async function getIssues(){
            await invoke('getIssues', { projectKey: "CKRS" }).then(setIssues); 
        }
        getIssues();
    }, []);

    return (
        <div>
            <div>
                <h>
                    Fixed Versions: 
                </h>
                {fixedVerions ? fixedVerions : 'Loading...' }
            </div>
            <div>
                 <h>
                    Issues: 
                 </h>
                 {issues ? issues : 'Loading...' }
            </div>
            <div>
                <h>
                    contextKey: 
                 </h>                            
                {contextKey ? contextKey : 'Loading...'}
            </div>
            <div>
                <h>
                    contextId: 
                </h>                            
                {contextId ? contextId : 'Loading...'}
            </div>            
        </div>
    );
}

export default App;
