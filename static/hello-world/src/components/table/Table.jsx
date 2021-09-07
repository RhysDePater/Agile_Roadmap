import React, { useEffect, useState } from "react";
import {useTable} from "react-table";

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
    const {fixedVersions, setFixedVersions} = useAppContext();
    const {initiatives, setInitiatives} = useAppContext();
    const {epics, setEpics} = useAppContext();

    const data = React.useMemo(
      () => {
          let temp_array = [];
          fixedVersions.map((version, i) => {
            epics.map((epic, j) => {
                if(epics[j][3] == fixedVersions[i][0]){
                    let element = {
                        col1: epics[j][1]
                    }
                }
            });
          });
            
    
        }
    )
    //     [
    //     {
    //       col1: 'Hello',
    //       col2: 'World',
    //     },
    //     {
    //       col1: 'react-table',
    //       col2: 'rocks',
    //     },
    //     {
    //       col1: 'whatever',
    //       col2: 'you want',
    //     },
    //   ],
    //   []
    // )
  
    const columns = React.useMemo(
      () => {
          let rowHeader = {
            Header: "",
            accessor: "rowHeader",
          };
          let temp_array = [];
          fixedVersions.map((version, i) => {
            let element = {
                Header: fixedVersions[i][1],
                accessor: fixedVersions[i][0], // accessor is the "key" in the data      
            };
            temp_array.push(element);             
          })
          temp_array.unshift(rowHeader);
          return temp_array;
      }
    )
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ columns, data })
  
    return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }