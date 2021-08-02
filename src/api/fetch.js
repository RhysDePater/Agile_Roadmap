import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";

export async function fetchCommentsForIssue(projectKey){
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`);
  
    const data = await res.json();
    return data;
};
  
//get all issue keys -- /rest/api/3/search?jql=project=${projectKey}&maxResults=200
//get issue type of issue keys (intiivate/epic/feature) -- /rest/api/3/issue/${issueKey}
//return initiatives and thier child features -- ~fields/issuelinks/${featurekey} - to do

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
        issuetype: data.fields.issuetype.name,
        label: data.fields.labels,
        // childfeatures: data.fields.issuelinks.inwardissue.key,
      }
    }))    
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    })
    
  return res;
};