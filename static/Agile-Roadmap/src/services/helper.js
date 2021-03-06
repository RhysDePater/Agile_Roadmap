import { view, invoke, router } from "@forge/bridge";

/**
 *
 * @param {*} issuesData data to parse through
 * @param {*} issueTypeFilter issueType to return
 * @returns json array of issues filtered by issue type
 */
export function parseByIssueType(issuesData, issueTypeFilter) {
  var temp_array = [];
  issuesData.map((issue, i) => {
    if (issue.issueType == issueTypeFilter) {
      temp_array.push(issue);
    }
  });
  return temp_array;
}

/**
 *
 * @param {*} initiatives initiatives json array
 * @param {*} epics epics json array
 * @param {*} fixedVersions fix versions json array
 * @returns json array of progress for initiatives
 */
export function progressForInitiatives(initiatives, epics, fixedVersions) {
  //establish array ot return
  var initiativesProgress = [];
  //map thourhg all initiatives
  initiatives.map((init, i) => {
    //establish values to return
    let amountOfEpics = 0;
    let done = 0;
    let progress = 0;
    let backlog = 0;
    //map through children of each initiative
    init.childrens.map((epicKey, j) => {
      //map through all the epics
      epics.map((epic, k) => {
        //if epics are chidlren of initiative
        if (epicKey == epic.key) {
          //map fixed versions
          fixedVersions.map((version, v) => {
            //if children exist within a fixed versions and the version is currently displayed
            if (
              epic.fixVersions[0] == version.id &&
              version.isSelected == true
            ) {
              console.log(epic.fixVersions[0] + "==" + version.id);
              console.log(version.isSelected);
              //add value based on value progress
              if (epic.status == "Done") {
                done += 1;
              } else if (
                epic.status == "Backlog" ||
                epic.status == "Selected For Development"
              ) {
                backlog += 1;
              } else {
                progress += 1;
              }
              //add to total amount of childrens
              amountOfEpics += 1;
            }
          });
        }
      });
    });
    //add values to json array
    var iProgress = {
      key: init.key,
      length: amountOfEpics,
      Done: done,
      Progress: progress,
      Backlog: backlog,
    };
    //push to array to return
    initiativesProgress.push(iProgress);
  });
  console.log(initiativesProgress);
  return initiativesProgress;
}

/**
 *
 * @param {*} epic json array containing epics
 * @param {*} key epic key to check progress of
 * @returns
 */
export async function progressForEpics(epic, key) {
  //refer to progressForInitiatives on how this works as that function is based of this one
  let done = 0;
  let progress = 0;
  let backlog = 0;
  epic.map((epicInfo, j) => {
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
  });

  var eProgress = {
    key: key,
    length: epic.length,
    Done: done,
    Progress: progress,
    Backlog: backlog,
  };
  return eProgress;
}

/**
 *
 * @param {*} contextKey project context key
 * @param {*} apiCall1 fetch issues api call
 * @param {*} apiCall2 fetch children api call
 * @returns returns combined 2 api calls values into a single array of arrays
 */
export async function fetchAllIssueInfo(epicKeys, issues) {
  //I believe this function isn't used anymore but kept as could be useful
  for (let i = 0; i < issues.length; i++) {
    if (issues[i][2] == "Epic") {
      let issuesKeys = await apiCall2(issues[i][0]);
      issues[i].push(issuesKeys);
    }
  }
  return [issues];
}

/**
 *
 * @param {*} key key given to api call
 * @param {*} apiFunction API function to be used in the function
 * @returns returns all issues from api function after applying pagination
 */
export async function paginationApiCalls(key, apiFunction) {
  let maxResults = 100;
  let size = 100;
  let startAt = 0;
  let tempIssues = [];

  //while there are still items being returned by the api
  while (size >= maxResults || size > 0) {
    //invoke the api call
    await invoke(apiFunction, {
      Key: key,
      start: startAt,
      max: maxResults,
    }).then((data) => {
      //map the data then push each element into tempissues
      //has to be done this way due to how the data is returned by Jira
      data.map((issue) => {
        tempIssues.push(issue);
      });
      size = data.length;
      console.log(size);
      startAt += size;
    });
  }
  return tempIssues;
}
