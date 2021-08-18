import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import api, { route } from "@forge/api";
import { fetchIssueKeys, fetchFixedVersions, storiesForEpic } from "../api/fetch";


/**
 * 
 * @param {*} jsonArray array to parse
 * @param {*} fieldToReturn json field to return value of
 * @param {*} tertiaryField fieldValue for going an extra array level deep
 * @returns single field value from dynamic length json array
 */
export function getSingleValueFromJsonArray(jsonArray, fieldToReturn, tertiaryField) {
  const fieldArray = [];
  if (tertiaryField == null || undefined) {
    for (let i = 0; i < jsonArray.length; i++) {
      if (jsonArray[i] == undefined || null) {
        return "null";
      } else {
        fieldArray.push(jsonArray[i][fieldToReturn]);
      }
    }
    return fieldArray;
  } else {

    for (let i = 0; i < jsonArray.length; i++) {
      if (jsonArray[i] == undefined || null) {
        return "null";
      } else {
        const temp = jsonArray[i][tertiaryField];
        fieldArray.push(temp[fieldToReturn]);
      }
    }
    return fieldArray;
  }
}

/**
   * 
   * @param {*} jsonValue JSON value to parse
   * @returns returns value is exists
   */
export function checkIfValueExists(jsonValue) {
  if (jsonValue == undefined || null) {
    return "null"
  } else {
    return jsonValue
  }
}

/**
   * 
   * @param {*} contextKey project context key
   * @param {*} apiCall1 fetch issues api call
   * @param {*} apiCall2 fetch children api call
   * @returns returns combined 2 api calls values into a single array of arrays
   */
export function fetchAllIssueInfo(contextKey, apiCall1, apiCall2) {
  const [issues] = useState(async () => await apiCall1(contextKey));

  for(let i =0;i<issues.length;i++)
  {
      if(issues[i][2] == "Epic")
      {
        let [issuesKeys] = useState(async () => await apiCall2(issues[i][0]));
        issues[i].push(issuesKeys);
      }
  }
  return [issues];
}