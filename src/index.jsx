import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';
import {fetchIssueKeys, fetchFixedVersions, storiesForEpic} from "./controller/api/fetch";
import {getAppContextKey, getAppContextId } from './controller/helper/contextLib';
import {filterJsonDataByFieldValue, appendValueToIssue} from './controller/helper/generalHelper';

const App = () => {       
    const issueKey = "CKRS-27";
    const contextKey = getAppContextKey();
    const contextId = getAppContextId();
    const [issues] = useState(async () => await fetchIssueKeys(contextKey));    
    const [fixedVersions] = useState(async () => await fetchFixedVersions(contextKey));
    const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'issueType',"sub-task"));
    // const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'fixVersion',"10003"));
    // const [value] = useState(async () => await isChildOrParent(issueKey));    

    for(let i =0;i<issues.length;i++)
    {
        if(issues[i].issueType == "Epic")
        {
            let [issuesKeys] = useState(async () => await storiesForEpic(issues[i].key));
            issues[i].children = issuesKeys;
        }
    }

    return (
        <Fragment>
            <Text>Hello world 4! Project Key: {contextKey}, Project ID: {contextId}</Text>
            {/* <Text>value here: {JSON.stringify(value)}</Text> */}
            <Text>ISSUES{JSON.stringify(issues)}</Text>
            <Text>{JSON.stringify(issues[0])}</Text>
            <Text>FIXED VERSIONS{JSON.stringify(fixedVersions)}</Text>
            <Text>FilterTest{JSON.stringify(selectedValue)}</Text>
        </Fragment>
    );
}; 

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);
