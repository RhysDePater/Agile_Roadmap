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
import { parseByIssueType, progressForEpics } from "./services/helper";
//import TableComponent from "./components/table/TableComponent";
//import FixedVersionCol from "./components/table/FixedVersionCol";
import ReactTableComponent from "./components/table/Table";
export default function App() {
  //usestates
  const [fixedVersions, setFixedVersions] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [epics, setEpics] = useState([]);
  const [epicsProgress, setEpicsProgress] = useState([]);
  const [issues, setIssues] = useState([]);
  const [modal, setModal] = useState(false);
  const toggleM = () => setModal(!modal);
  let test = [{ key: "CRKS-15" }, { key: "CKRS-14" }];
  let sortedInitiatives = [];

  useEffect(() => {
    async function getAllInfo() {
      try {
        const context = await view.getContext();
        const key = context.extension.project.key;
        await invoke("getFixedVersions", { projectKey: key }).then((data) =>
          setFixedVersions(data)
        );
        await invoke("getIssues", { projectKey: key }).then((data) => {
          setEpics(parseByIssueType(data, "Epic"));
          setInitiatives(parseByIssueType(data, "Initiative"));
          setIssues(data);
        });
      } catch (e) {
        console.log("API RENDER ERROR: " + e);
      }
    }
    getAllInfo();
  }, []);

  useEffect(() => {
    async function sortInitiatives() {
      try {
        if (initiatives.length > 0) {
          sortedInitiatives = initiatives;
          console.log(sortedInitiatives);
          sortedInitiatives = sortedInitiatives.sort(function (a, b) {
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.dueDate) - new Date(b.dueDate);
          });
          console.log(sortedInitiatives);
        }
      } catch (e) {
        console.log("API RENDER ERROR: " + e);
      }
    }
    sortInitiatives();
  }, [initiatives]);

  useEffect(() => {
    async function getProgressForEpics() {
      try {
        if (epics.length > 0) {
          let epicProgress = [];
          epics.map((epic, i) => {
            invoke("getStoriesForEpics", { epicKey: epic.key }).then((data) => {
              progressForEpics(data, epic.key).then((data) => {
                epicProgress.push(data);
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

  if (
    fixedVersions.length > 0 &&
    issues.length > 0 &&
    epicsProgress.length > 0
  ) {
    console.log(sortedInitiatives);
    return (
      <div>
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
          }}
        >
          <FilterComponent />

          <ReactTableComponent />
        </AppContext.Provider>

        <div>
          {fixedVersions.map((version, i) => (
            <p>
              {Object.keys(version).map((key, j) => (
                <span>
                  {key}: {version[key]}
                </span>
              ))}
            </p>
          ))}
        </div>
        <br></br>
        <div>
          {epics.map((epic, i) => (
            <p>
              {Object.keys(epic).map((key, j) => (
                <span>
                  {key}: {epic[key]}
                </span>
              ))}
            </p>
          ))}
        </div>
        <br></br>
        <div>
          {epicsProgress.map((epic, i) => (
            <p>
              {Object.keys(epic).map((key, j) => (
                <span>
                  {key}: {epic[key]}
                </span>
              ))}
            </p>
          ))}
        </div>
        <br></br>
        <div>
          {initiatives.map((initiative, i) => (
            <p>
              {Object.keys(initiative).map((key, j) => (
                <span>
                  {key}: {initiative[key]}
                </span>
              ))}
            </p>
          ))}
        </div>
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
