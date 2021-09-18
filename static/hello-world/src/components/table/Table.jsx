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

import { useAppContext } from "../../services/contextLib";
import Initiative from "./elements/InitiativeComponent";
import FixedVersionTitle from "./elements/FixedVersionTitlecomponent";
import FixedVersionCell from "./elements/FixedVersionCell";





export default function ReactTableComponent() {

  const { fixedVersions, setFixedVersions } = useAppContext();
  const { initiatives, setInitiatives } = useAppContext();
  const { epics, setEpics } = useAppContext();



  return (<div className="tablecont">

    {/* Fixed versions*/}
    <Row>
      <div className="ui-cont">
        <Col xs="auto">
          <div className="InitiativeSize"></div>
        </Col>
        <div className="ui-cont">
          {fixedVersions.map((fixVer, i) => (

            <div>{(() => {
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
        if (initiative.isSelected == true) {
          return (
            <Row className="initRow">
              <div className="ui-cont">
                <Initiative title={initiative.name} iKey={initiative.key} dueDate={initiative.dueDate}/>
                {fixedVersions.map((fixVer, j) => (
                  <Col xs="auto">
                    {(() => {
                      if (fixVer.isSelected == true) {
                        return (
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