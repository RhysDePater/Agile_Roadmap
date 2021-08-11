import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import api,{route} from "@forge/api";
 
/**
 * 
 * @param {*} projectKey which project to fetch issues from
 * @returns issues values; key, issuetype, label
 */
export async function fetchIssueKeys(projectKey){
  const res = await api
    .asApp()
    .requestJira(route`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`)
    .then((res) => res.json())
    .then((res) => (res.issues).map((data) => {
      return {
        key: data.key,
        name: data.fields.summary,
        issuetype: data.fields.issuetype.name,
        fixVersion: getFixVersionsId(data.fields.fixVersions)
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
 * @param {*} versionKey version keys to search
 * @returns version values id, name, description, startDate, endDate
 */
export async function fetchFixedVersions(versionKey){
  versionKey = getFixedVersionKeys()
  var response = [];

  await Promise.all(versionKey.map(async (key) => {
      console.log(key);
      const res = await api
      .asApp()
      .requestJira(route`/rest/api/3/version/${key}`)
      .then((res) => res.json())
      .then((res) => {
        return {
          id: res.id,
          name: res.name,
          description: res.description,
          startDate: res.startDate,
          releaseDate: res.releaseDate        
        }
      })
      .catch((error) => {
        console.log("failed to Connect to the Api Endpoint :");
        console.log(error);
      })    
      response.push(res)  
  }))
  return response;
};

function getFixedVersionKeys(data){
  const mockKeys = ["10001", "10002", "10003"];
  return mockKeys;
}

function getFixVersionsId(jsonArray){
  if(jsonArray[0] == undefined || null){
    return "null";
  }else{
    return jsonArray[0].id;
  }
}