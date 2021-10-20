import api, { route } from "@forge/api";
const apiHelper = require("./apiHelper");

/**
 *
 * @param {*} epicKey epic to get the issue off
 * @returns json array of issue id's
 */
export async function fetchStoriesForEpic(epic, startAt, maxResults) {
  const res = await api
    .asApp()
    .requestJira(
      route`/rest/api/3/search?jql=\"Epic Link\"=${epic}&startAt=${startAt}&maxResults=${maxResults}`
    )
    .then((res) => res.json())
    .then((res) => res.issues.map((data) => data))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  return res;
}

/**
 *
 * @param {*} projectKey which project to fetch issues from
 * @returns json array of issues data
 */
export async function fetchIssueKeys(projectKey, startAt, maxResults) {
  const res = await api
    .asApp()
    .requestJira(
      route`/rest/api/3/search?jql=project=${projectKey}&startAt=${startAt}&maxResults=${maxResults}`
    )
    .then((res) => res.json())
    .then((res) =>
      res.issues.map((data) => {
        switch (data.fields.issuetype.name) {
          case "Epic":
            return {
              key: data.key, //key
              name: data.fields.summary, //name
              issueType: data.fields.issuetype.name, //issuetype
              fixVersions: apiHelper.getSingleValueFromJsonArray(
                data.fields.fixVersions,
                "id"
              ), // fixVersions
              parents: apiHelper.getSingleValueFromJsonArray(
                data.fields.issuelinks,
                "key",
                "outwardIssue"
              ), //parents
              childrens: [],
              status: data.fields.status.name,
            };
          case "Story":
            return {
              key: data.key,
              name: data.fields.summary,
              issueType: data.fields.issuetype.name,
              fixVersions: [],
              parents: [],
              childrens: apiHelper.getSingleValueFromJsonArray(
                data.fields.subtasks,
                "key"
              ),
            };
          case "Initiative":
            return {
              key: data.key,
              name: data.fields.summary,
              issueType: data.fields.issuetype.name,
              fixVersions: [],
              parents: [],
              childrens: apiHelper.getChildIfNotBlocked(data.fields.issuelinks),
              dueDate: data.fields.duedate,
              isSelected: true,
            };
          default:
            return {
              key: data.key,
              name: data.fields.summary,
              issueType: data.fields.issuetype.name,
              fixVersions: [],
              parents: [],
              childrens: [],
            };
        }
      })
    )
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  return res;
}

/**
 *
 * @param {*} projectKey Project key to search for fixed version values
 * @returns json array of fixVersions id, name, startDate, endDate, isSelected
 */
export async function fetchFixedVersions(projectKey) {
  console.log(projectKey);
  const res = await api
    .asApp()
    .requestJira(route`/rest/api/3/project/${projectKey}/versions`)
    .then((res) => res.json())
    .then((res) =>
      res.map((data) => {
        return {
          id: data.id,
          name: data.name,
          startDate: apiHelper.checkIfValueExists(data.startDate),
          releaseDate: apiHelper.checkIfValueExists(data.releaseDate),
          isSelected: true,
        };
      })
    )
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  return res;
}
