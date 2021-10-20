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
import { view, invoke } from "@forge/bridge";
import "./App.css";
import FilterComponent from "./components/filter/FilterComponent";
import {
  paginationApiCalls,
  parseByIssueType,
  progressForEpics,
} from "./services/helper";
import ReactTableComponent from "./components/table/Table";
import { progressForInitiatives } from "./services/helper";
export default function App() {
  //usestates
  const [fixedVersions, setFixedVersions] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [epics, setEpics] = useState([]);
  const [epicsProgress, setEpicsProgress] = useState([]);
  const [initiativesProgress, setInitiativeProgress] = useState([]);
  const [issues, setIssues] = useState([]);
  const [modal, setModal] = useState(false);
  const toggleM = () => setModal(!modal);

  //get all issue info via api calls
  useEffect(() => {
    async function getAllInfo() {
      try {
        //get all project context
        const context = await view.getContext();
        //get project key from the context
        const key = context.extension.project.key;

        //get fixed versions and save them to the fixedVersions State
        await invoke("getFixedVersions", { projectKey: key }).then((data) =>
          setFixedVersions(data)
        );

        //call PaginatioApiCAlls for getIssues, which gets all issues
        //this is done as jql queries are limited to a maxResults of 100 for cloud apps
        //hence to get all issues for a large project this is required
        paginationApiCalls(key, "getIssues").then((data) => {
          //parse the data to only grab epic and save them to the epics state
          setEpics(parseByIssueType(data, "Epic"));
          //parse the data to only grab initiatives and save them to the intiatives state
          setInitiatives(parseByIssueType(data, "Initiative"));
          //save all issues
          setIssues(data);
        });
      } catch (e) {
        console.log("API RENDER ERROR: " + e);
      }
    }
    //call the function we just made
    getAllInfo();
  }, []);

  //sort initiatives in order of due date - refresh on initiative change
  useEffect(() => {
    function sortInitiatives() {
      try {
        //if there are initiatives
        if (initiatives.length > 0) {
          //save the new sorted array to temp_array
          const temp_array = initiatives.sort(function (a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
          });
          //set the initiatives as the new sorted array
          setInitiatives(temp_array);
        }
      } catch (e) {
        console.log("API RENDER ERROR: " + e);
      }
    }
    sortInitiatives();
    //runs this useEffect when a change in initiave is made
  }, [initiatives]);

  //get progress of all epics - refresh on epic change
  useEffect(() => {
    async function getProgressForEpics() {
      try {
        if (epics.length > 0) {
          let epicProgress = [];
          //map through all epics
          epics.map((epic, i) => {
            //run pagination on epics for the same reason we do with getting issues
            //this gets all the stories in the epic given to it
            paginationApiCalls(epic.key, "getStoriesForEpics").then((data) => {
              //function to parse through all the stories given and collate there progress values
              progressForEpics(data, epic.key).then((data) => {
                epicProgress.push(data);

                //if every epic has been done
                if (epics.length == epicProgress.length) {
                  setEpicsProgress(epicProgress);
                }
              });
            });
          });
        }
      } catch (e) {
        console.log("API RENDER ERROR: " + e);
      }
    }
    getProgressForEpics();
  }, [epics]);

  //get progress of initiatives - refresh when initiative, epics or fixedversions value changes
  useEffect(() => {
    function getInitiativesProgress() {
      try {
        if (
          initiatives.length > 0 &&
          epics.length > 0 &&
          fixedVersions.length > 0
        ) {
          const temp_array = progressForInitiatives(
            initiatives,
            epics,
            fixedVersions
          );
          setInitiativeProgress(temp_array);
        }
      } catch (e) {
        console.log("API ERROR: " + e);
      }
    }
    getInitiativesProgress();
  }, [initiatives, epics, fixedVersions]);

  // Check if fixed versions and epic arrays exist otherwise return loading ring
  if (fixedVersions.length > 0 && issues.length > 0) {
    return (
      <div>
        {/* Make arrays usestates global*/}
        <AppContext.Provider
          value={{
            fixedVersions,
            setFixedVersions,
            issues,
            setIssues,
            initiatives,
            setInitiatives,
            epics,
            setEpics,
            epicsProgress,
            setEpicsProgress,
            initiativesProgress,
            setInitiativeProgress,
          }}
        >
          {/* Display filter dropdowns*/}
          <FilterComponent />

          {/* Display table*/}
          <ReactTableComponent />
        </AppContext.Provider>
      </div>
    );
  } else {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
