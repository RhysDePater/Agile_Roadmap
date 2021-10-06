import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";

const fetchLib = require("./api/fetch");
const apiHelper = require("./api/apiHelper");
const resolver = new Resolver();

resolver.define("getFixedVersions", async ({ payload, context }) => {
  return fetchLib.fetchFixedVersions(payload.projectKey);
});

resolver.define("getIssues", async ({ payload, context }) => {
  return fetchLib.fetchIssueKeys(payload.Key, payload.start, payload.max);
  // return(apiHelper.fetchAllIssueInfo(payload.projectKey, fetchLib.fetchIssueKeys, fetchLib.fetchStoriesForEpic));
});

resolver.define("getStoriesForEpics", async ({ payload, context }) => {
  return fetchLib.fetchStoriesForEpic(payload.Key, payload.start, payload.max);
});

resolver.define("getProgressForEpics", async ({ payload, context }) => {
  return fetchLib.progressForEpics(payload.epicKey);
});

export const handler = resolver.getDefinitions();
