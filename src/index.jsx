import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';
import {fetchCommentsForIssue, fetchIssueKeys} from "./api/fetch";
import {getAppContextKey, getAppContextId } from './helper/contextLib';


const App = () => {       
    const contextKey = getAppContextKey();
    const contextId = getAppContextId();
    const [issues] = useState(async () => await fetchIssueKeys(contextKey));    

    return (
        <Fragment>
            <Text>Hello world 4! Project Key: {contextKey}, Project ID: {contextId}</Text>
            <Text>{JSON.stringify(issues)}</Text>
        </Fragment>
    );
};

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);
