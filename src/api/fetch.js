import api, { route } from "@forge/api";
const apiHelper = require("./apiHelper");

/**
 *
 * @param {*} epicKey epic to get the issue off
 * @returns array of issue id's
 */
export async function fetchStoriesForEpic(epic) {
  const res = await api
    .asApp()
    .requestJira(
      route`/rest/api/3/search?jql=\"Epic Link\"=${epic}&maxResults=200`
    )
    .then((res) => res.json())
    .then((res) => res.issues.map((data) => data.key))
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    });
  return res;
}

export function progressForEpics(epics) {
  let length = epics.length;
  let done = 0;
  let progress = 0;
  let backlog = 0;
  let epicProgress = [];
  for (let i = 0; i < length; i++) {
    let [epicInfo] = useState(
      async () => await fetchStoriesForEpic(epics[i].key)
    );
    epicInfo = epicInfo.issues;
    for (let j = 0; j < epicInfo.length; j++) {
      let statusType = epicInfo.fields.status.name;
      if (statusType == "Done") {
        done += 1;
      } else if (
        statusType == "Backlog" ||
        statusType == "Selected For Development"
      ) {
        backlog += 1;
      } else {
        progress += 1;
      }
    }

    var eProgress = {
      key: epics[i].key,
      length: epicInfo.length,
      Done: done,
      Progress: progress,
      Backlog: backlog,
    };
    epicProgress.push(eProgress);
  }
  var test = {
    key: length,
    length: 2,
    Done: 3,
    Progress: 4,
    Backlog: 5,
  };
  epicProgress.push(test);
  return epicProgress;
}

/**
 *
 * @param {*} projectKey which project to fetch issues from
 * @returns issues values; key, issuetype, label
 */
export async function fetchIssueKeys(projectKey) {
  const res = await api
    .asApp()
    .requestJira(
      route`/rest/api/3/search?jql=project=${projectKey}&maxResults=200`
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
              childrens: apiHelper.getSingleValueFromJsonArray(
                data.fields.issuelinks,
                "key",
                "inwardIssue"
              ),
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
 * @param {*} versionKey Project to return version keys of
 * @returns fixVersions id, name, startDate, endDate
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
