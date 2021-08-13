import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import api, { route } from "@forge/api";
const apiHelper = require('../helper/apiHelper')

/**
 * 
 * @param {*} epicKey epic to get the issue off
 * @returns array of issue id's
 */
export async function storiesForEpic(epic) {
  const res = await api
    .asApp()
    .requestJira(`/rest/api/3/search?jql=\"Epic Link\"=${epic}&maxResults=200`)
    .then((res) => res.json())
    .then((res) => (res.issues).map((data) => data.key))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    })

  return res;
};

/**
 * 
 * @param {*} projectKey which project to fetch issues from
 * @returns issues values; key, issuetype, label
 */
export async function fetchIssueKeys(projectKey) {
  const res = await api
    .asApp()
    .requestJira(`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`)
    .then((res) => res.json())
    .then((res) => (res.issues).map((data) => {
      if (data.fields.issuetype.name == "Epic") {
        return {
          key: data.key,
          name: data.fields.summary,
          issueType: data.fields.issuetype.name,
          parentIDs: apiHelper.getSingleValueFromJsonArray(data.fields.issuelinks, 'key', 'outwardIssue'),
          fixVersion: apiHelper.getSingleValueFromJsonArray(data.fields.fixVersions, 'id')
        }

      }
      if (data.fields.issuetype.name == "Story") {
        return {
          key: data.key,
          name: data.fields.summary,
          issueType: data.fields.issuetype.name,
          children: apiHelper.getSingleValueFromJsonArray(data.fields.subtasks, 'key')
        }
      }
      if (data.fields.issuetype.name == "Initiative") {
        return {
          key: data.key,
          name: data.fields.summary,
          issueType: data.fields.issuetype.name,
          children: apiHelper.getSingleValueFromJsonArray(data.fields.issuelinks, 'key', 'inwardIssue'),
        }
      }
      else {
        return {
          key: data.key,
          name: data.fields.summary,
          issueType: data.fields.issuetype.name,
        }
      }
    }))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    })
  return res;
};

/**
 * 
 * @param {*} versionKey Project to return version keys of
 * @returns fixVersions id, name, startDate, endDate
 */
export async function fetchFixedVersions(projectKey) {
  console.log(projectKey);
  const res = await api
    .asApp()
    .requestJira(`/rest/api/3/project/${projectKey}/versions`)
    .then((res) => res.json())
    .then((res) => (res).map((data) => {
      return {
        id: data.id,
        name: data.name,
        startDate: apiHelper.checkIfValueExists(data.startDate),
        releaseDate: apiHelper.checkIfValueExists(data.releaseDate)
      }
    }))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  console.log(res)
  return res;
};



/**
 *
 * @param {*} versionKey version keys to search
 * @returns version values id, name, description, startDate, endDate
 */
// export async function fetchFixedVersions(versionKey){
  // versionKey = apiHelper.getFixedVersionKeys()
  // var response = [];
// 
  // await Promise.all(versionKey.map(async (key) => {
      // console.log(key);
      // const res = await api
      // .asApp()
      // .requestJira(route`/rest/api/3/version/${key}`)
      // .then((res) => res.json())
      // .then((res) => {
        // return {
          // id: res.id,
          // name: res.name,
          // startDate: res.startDate,
          // releaseDate: res.releaseDate        
        // }
      // })
      // .catch((error) => {
        // console.log("failed to Connect to the Api Endpoint :");
        // console.log(error);
      // })    
      // response.push(res)  
  // }))
  // return response;
// };

