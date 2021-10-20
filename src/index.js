import Resolver from "@forge/resolver";
import api, { route } from "@forge/api";

const fetchLib = require("./api/fetch");
const apiHelper = require("./api/apiHelper");
const resolver = new Resolver();

//resolver functions work as middleware to link backend api calls with frontend ui -documentaion @forge/bridge

resolver.define("getFixedVersions", async ({ payload, context }) => {
  return fetchLib.fetchFixedVersions(payload.projectKey);
});

resolver.define("getIssues", async ({ payload, context }) => {
  return fetchLib.fetchIssueKeys(payload.Key, payload.start, payload.max);
});

resolver.define("getStoriesForEpics", async ({ payload, context }) => {
  return fetchLib.fetchStoriesForEpic(payload.Key, payload.start, payload.max);
});

export const handler = resolver.getDefinitions();
