import Resolver from '@forge/resolver';
import api, { route } from "@forge/api";

const fetchLib = require("./fetch");
const apiHelper = require("./helper/apiHelper");
const resolver = new Resolver();


resolver.define('getFixedVersions', async ({payload, context}) => { 
  return (fetchLib.fetchFixedVersions(payload.projectKey));
});

resolver.define('getIssues', async ({payload, context}) => { 
  const issues = apiHelper.fetchAllIssueInfo(payload.projectKey, fetchLib.fetchIssueKeys, fetchLib.fetchStoriesForEpic);
  return issues;
});


export const handler = resolver.getDefinitions();

