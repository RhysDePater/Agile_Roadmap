import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';
import { fetchIssueKeys, fetchFixedVersions, storiesForEpic } from "./controller/api/fetch";
import { getAppContextKey, getAppContextId } from './controller/helper/contextLib';
import { filterJsonDataByFieldValue, appendValueToIssue } from './controller/helper/generalHelper';
import {fetchAllIssueInfo} from './controller/helper/apiHelper';

const App = () => {
    const issueKey = "CKRS-27";
    const contextKey = getAppContextKey();
    const contextId = getAppContextId();
    const [issues] = fetchAllIssueInfo(contextKey, fetchIssueKeys, storiesForEpic);
    const [fixedVersions] = useState(async () => await fetchFixedVersions(contextKey));
    const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'issueType', "epic"));
    // const [selectedValue] = useState(async () => await filterJsonDataByFieldValue(issues, 'fixVersion',"10003"));
    // const [value] = useState(async () => await isChildOrParent(issueKey));    

    return (
        <Fragment>
            <Text>Hello world 4! Project Key: {contextKey}, Project ID: {contextId}</Text>
            {/* <Text>value here: {JSON.stringify(value)}</Text> */}
            <Text>ISSUES{JSON.stringify(issues)}</Text>
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
