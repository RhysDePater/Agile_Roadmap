import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import api from "@forge/api";
 
/**
 * 
 * @param {*} projectKey which project to fetch issues from
 * @returns issues values; key, issuetype, label
 */
export async function fetchIssueKeys(projectKey){
  const res = await api
    .asApp()
    .requestJira(`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`)
    .then((res) => res.json())
    .then((res) => (res.issues).map((data) => {
      return {
        key: data.key,
        name: data.fields.summary,
        issuetype: data.fields.issuetype.name,
        fixedVersion: "sprint: ",      
      }
    }))  
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    })    
  return res;
};

// export async function isChildOrParent(issueKey){
//   console.log(issueKey);
//   const res = await api
//     .asApp()
//     .requestJira(`/rest/api/3/issueLink/${issueKey}`)
//     .then((res) => (res).json())
//     .then((res => (res.fields.issuelinks)))
//     .then((res => (res)))
//     .catch((error) => {
//       console.log("failed to Connect to the Api Endpoint :");
//       console.log(error);
//     });  
//     // (res.fields).map((data) => {
//       // console.log(data.id)          
//     // });
//     console.log(res)
//   return res;

// }