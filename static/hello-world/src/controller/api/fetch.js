import api from "@forge/api";
  
//get all issue keys -- /rest/api/3/search?jql=project=${projectKey}&maxResults=200
//get issue type of issue keys (intiivate/epic/feature) -- /rest/api/3/issue/${issueKey}
//return initiatives and thier child features -- ~fields/issuelinks/${featurekey} - to do

/**
 * 
 * @param {*} projectKey which project to fetch issues from
 * @returns issues values; key, issuetype, fixedVersion(custom sprint value)
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
        fixedVersion: "sprint: " + data.fields.fixedVersions,
      }
    }))    
    .catch((error) => {
      console.log("failed to Connect to the Api Endpoint :");
      console.log(error);
    })
    console.log("api run check")
  return res;
};