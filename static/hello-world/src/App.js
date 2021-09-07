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
import {parseByIssueType} from "./services/helper";
import TableComponent from "./components/table/TableComponent";
import FixedVersionCol from "./components/table/FixedVersionCol";
export default function App() {
    //usestates
    const [fixedVersions, setFixedVersions] = useState([]);
    const [initiatives, setInitiatives] = useState([]);
    const [epics, setEpics] = useState([]); 
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
                await invoke("getIssues", { projectKey: key }).then((data) => {
                    setEpics(parseByIssueType(data, "Epic"))
                    setInitiatives(parseByIssueType(data, "Initiative"))
                    setIssues(data)                    

                }
                );
            }catch(e){
                console.log("API RENDER ERROR: " + e);
            }
        }
        getAllInfo();        
    }, []);
            
    if(fixedVersions.length > 0 && issues.length > 0){
        return(
            <div>
                <AppContext.Provider value={{fixedVersions, setFixedVersions, issues, setIssues, initiatives, setInitiatives}}>
                    <FilterComponent />
                </AppContext.Provider>
                <div>
                {fixedVersions.map((version, i) => (
                    <p>
                    {Object.keys(version).map((key, j) => (
                         <span>{key}: {version[key] }</span>        
                    ))}
                    </p>
                ))} 
                </div>   
                <div>
                    {epics.map((epic, i) => (
                        <p>
                        {Object.keys(epic).map((key, j) => (
                             <span>{key}: {epic[key] }</span>        
                        ))}
                        </p>
                    ))}    
                </div> 
                <div>
                    {initiatives.map((initiative, i) => (
                        <p>
                        {Object.keys(initiative).map((key, j) => (
                             <span>{key}: {initiative[key] }</span>        
                        ))}
                        </p>
                    ))}    
                </div> 

            </div>
            
        )    
    }else {
        return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    }

}