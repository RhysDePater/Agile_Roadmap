import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';
import { fetchIssueKeys, fetchFixedVersions, storiesForEpic } from "./controller/api/fetch";
import { getAppContextKey, getAppContextId } from './controller/helper/contextLib';
import { filterJsonDataByFieldValue, appendValueToIssue } from './controller/helper/generalHelper';
import {fetchAllIssueInfo} from './controller/helper/apiHelper';
import Resolver from '@forge/resolver';
import { view } from '@forge/bridge';

//const issueKey = "CKRS-27";
//const contextKey = getAppContextKey();
//const contextId = getAppContextId();
//const [issues] = fetchAllIssueInfo(contextKey);
//const [fixedVersions] = useState(async () => await fetchFixedVersions(contextKey));
//const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'issueType', "sub-task"));
// const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'fixVersion',"10003"));
// const [value] = useState(async () => await isChildOrParent(issueKey));   


const resolver = new Resolver();


resolver.define('getText', (req) => {
    console.log(req);
    return 'Hello World!';
});


/*
resolver.define('getCtxt', () => {
    //const context = view.getContext();
    //const context = useProductContext();
    return (JSON.stringify(context));
  });
*/

export const handler = resolver.getDefinitions();

