import api, { route } from "@forge/api";
const apiHelper = require('./apiHelper')

/**
 * 
 * @param {*} epicKey epic to get the issue off
 * @returns array of issue id's
 */
export async function fetchStoriesForEpic(epic) {
  const res = await api
    .asApp()
    .requestJira(route`/rest/api/3/search?jql=\"Epic Link\"=${epic}&maxResults=200`)
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
    .requestJira(route`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`)
    .then((res) => res.json())
    .then((res) => (res.issues).map((data) => {
      switch(data.fields.issuetype.name)
      {
        case "Epic":
          return [
            data.key, //key
            data.fields.summary, //name
            data.fields.issuetype.name, //issuetype
            apiHelper.getSingleValueFromJsonArray(data.fields.fixVersions, 'id'),      // fixVersions     
            apiHelper.getSingleValueFromJsonArray(data.fields.issuelinks, 'key', 'outwardIssue'), //parents
          ]
        case "Story":
          return [
            data.key,
            data.fields.summary,
            data.fields.issuetype.name,
            [],
            [],
            apiHelper.getSingleValueFromJsonArray(data.fields.subtasks, 'key')
          ]
        case "Initiative":
          return [
            data.key,
            data.fields.summary,
            data.fields.issuetype.name,
            [],
            [],
            apiHelper.getSingleValueFromJsonArray(data.fields.issuelinks, 'key', 'inwardIssue')
          ]
        default:
          return [
            data.key,
            data.fields.summary,
            data.fields.issuetype.name,
            [],
            [],
            []
          ]
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
    .requestJira(route`/rest/api/3/project/${projectKey}/versions`)
    .then((res) => res.json())
    .then((res) => (res).map((data) => {
      return [
        data.id,
        data.name,
        apiHelper.checkIfValueExists(data.startDate),
        apiHelper.checkIfValueExists(data.releaseDate)
      ]
    }))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  return res;
};