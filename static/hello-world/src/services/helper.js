import { view, invoke } from "@forge/bridge";
// export function parseIssues(issuesData){
//     var temp_array = [];
//     for(let i = 0; i < issuesData[0].length; i++){
//         var element = issuesData[0][i];
//         temp_array.push(element);
//     }
//     return temp_array;
// }

export function parseByIssueType(issuesData, issueTypeFilter) {
  var temp_array = [];
  issuesData.map((issue, i) => {
    if (issue.issueType == issueTypeFilter) {
      temp_array.push(issue);
    }
  });
  console.log(temp_array);
  return temp_array;
}

export async function progressForEpics(epics) {
  let length = epics.length;
  let done = 0;
  let progress = 0;
  let backlog = 0;
  let epicProgress = [];
  console.log(epics);
  epics.map((epic, i) => {
    invoke("getStoriesForEpics", { epicKey: epic.key }).then((data) => {
      let done = 0;
      let progress = 0;
      let backlog = 0;
      console.log(data);
      data.map((epicInfo, j) => {
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
        key: epic.key,
        length: data.length,
        Done: done,
        Progress: progress,
        Backlog: backlog,
      };
      epicProgress.push(eProgress);
    });
  });
  console.log(epicProgress);
  return epicProgress;
}

/**
 *
 * @param {*} contextKey project context key
 * @param {*} apiCall1 fetch issues api call
 * @param {*} apiCall2 fetch children api call
 * @returns returns combined 2 api calls values into a single array of arrays
 */
export async function fetchAllIssueInfo(epicKeys, issues) {
  for (let i = 0; i < issues.length; i++) {
    if (issues[i][2] == "Epic") {
      let issuesKeys = await apiCall2(issues[i][0]);
      issues[i].push(issuesKeys);
    }
  }
  return [issues];
}
