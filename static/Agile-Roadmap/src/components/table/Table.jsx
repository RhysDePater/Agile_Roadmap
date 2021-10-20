import React, { useEffect, useState } from "react";
import { useTable } from "react-table";

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


// import all elements 
import { useAppContext } from "../../services/contextLib";
import Initiative from "./elements/Initiative";
import FixedVersionTitle from "./elements/FixedVersionTitle";
import FixedVersionCell from "./elements/FixedVersionCell";




// Displays table
export default function ReactTableComponent() {

  // Import fixed versions and initiatives
  const { fixedVersions, setFixedVersions } = useAppContext();
  const { initiatives, setInitiatives } = useAppContext();
  const { epics, setEpics } = useAppContext();



  return (<div className="tablecont">

    {/* Display Fixed versions and due date*/}
    <Row>
      <div className="ui-cont">
        <Col xs="auto">
          <div className="InitiativeSize"></div>
        </Col>
        <div className="ui-cont">
          {fixedVersions.map((fixVer, i) => (

            <div>{(() => {

              // Check if fixed version is true on filter dropdown
              if (fixVer.isSelected == true) {
                return (
                  <FixedVersionTitle title={fixVer.name} start={fixVer.startDate} end={fixVer.releaseDate} />
                );
              }
            })()}
            </div>
          ))}
        </div>
      </div>
    </Row>


    {initiatives.map((initiative, i) => (

      <div>{(() => {
        //Check if initiative is true in filter dropdown
        if (initiative.isSelected == true) {
          return (
            <Row className="initRow">
              <div className="ui-cont">
                {/* Display initiative*/}
                <Initiative title={initiative.name} iKey={initiative.key} dueDate={initiative.dueDate}/>
                {fixedVersions.map((fixVer, j) => (
                  <Col xs="auto">
                    {(() => {
                      // Check if Fixed version is true on filter dropdown
                      if (fixVer.isSelected == true) {
                        return (
                          //Diplay cell for each fixed version
                          <FixedVersionCell id={fixVer.id} title={fixVer.name} start={fixVer.startDate} end={fixVer.releaseDate} initKey={initiative.key} />
                        );
                      }
                    })()}
                  </Col>
                ))}
              </div>
            </Row>
          );
        }
      })()}
      </div>
    ))}
  </div>)
}