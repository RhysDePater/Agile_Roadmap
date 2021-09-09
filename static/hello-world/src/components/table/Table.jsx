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

export default function ReactTableComponent() {

  const { fixedVersions, setFixedVersions } = useAppContext();
  const { initiatives, setInitiatives } = useAppContext();
  const { epics, setEpics } = useAppContext();



  const data = React.useMemo(
    () => {
      let temp_array = [];


      initiatives.map((initiative, i) => {

        //Display each initiative 
        let element = {
          col1: initiative.name,
        };

        epics.map((epic, j) => {

          epic.parents.map((parent, l) => {

            // Check if epic is linked to initiative
            if (parent == initiative.key) {


              fixedVersions.map((FV, k) => {

                //Check if epic is linked to fixedVersion
                if (epic.fixVersions == FV.id) {
                  let test = FV.id;

                  // check if initiative and fixV are selected
                  if (FV.isSelected == true && initiative.isSelected == true) {
                    console.log("Ini: ", initiative.name, "FixV: ", FV.id, "ep: ", epic.name);
                    // Add epic to corresponding cell
                    element.[test] = epic.name;
                  };

                };
              });
            };
          });
        });

        temp_array.push(element);
      });


      return temp_array;
    }
  );



  const columns = React.useMemo(
    () => {
      let temp_array = [{
        Header: " ",
        accessor: "col1"
      }];

      fixedVersions.map((FV, i) => {
        let element = {
          Header: FV.name,
          accessor: FV.id
        };
        temp_array.push(element);
      });


      return temp_array;
    }
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <div>


      <table {...getTableProps()} style={{ border: "solid 1px black" }}>

        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    border: "solid 2px black",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",

                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  )

}