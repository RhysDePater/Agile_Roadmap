import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';
import {} from "./api/fetch";

const fetchCommentsForIssue = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
  };
  
      
const App = () => {
    const context = useProductContext().platformContext.projectKey;
    const context2 = useProductContext().platformContext.projectId;
    const [comments] = useState(async () => await fetchCommentsForIssue(context));
    console.log("TEST")

    return (
        <Fragment>
            <Text>Hello world 4! Project Key: {context}, Project ID: {context2}</Text>
            <Text>{JSON.stringify(comments)}</Text>
        </Fragment>
    );
};

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);
