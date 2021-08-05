import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';
import React from 'react';
import api from "@forge/api";
import { fetch } from '@forge/api';

const fetchCommentsForIssue = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
  };
  
  const issuesForEpic = async (epic) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=\"Epic Link\"=${epic}&maxResults=200`);
  
    const data = await res.json();
    return data;
  };
      
const App = () => {
    const context = useProductContext().platformContext.projectKey;
    const context2 = useProductContext().platformContext.projectId;
    const [comments] = useState(async () => await fetchCommentsForIssue(context));
    console.log("TEST");
    const issues = comments.issues;
    const intiatives = [];
    const epics = [];
    const stories = [];
    const subtasks = [];
    const epicsLinkedStories = [];

    for(let i = 0; i<issues.length;i++)
    {
        switch(issues[i].fields.issuetype.name)
        {
            case "Initiative":
                intiatives[intiatives.length] = [[issues[i].key,
                issues[i].id,
                issues[i].fields.summary]];
                break;
            case "Epic":
                let length = epics.length;
                epics[epics.length] = [issues[i].key,
                issues[i].id,
                issues[i].fields.summary];
                let [linkedIssues] = useState(async () => await issuesForEpic(issues[i].key));
                let linkedIssues2 = linkedIssues.issues;
                for (let j = 0;j<linkedIssues2.length;j++)
                {
                    epics[length]+=[, "Epic link " +  linkedIssues2[j].key];
                }
                break;
            case "Story":
                stories[stories.length] = [issues[i].key,
                issues[i].id,
                issues[i].fields.summary];
                break;
            case "Sub-task":
                subtasks[subtasks.length] = [issues[i].key,
                issues[i].id,
                issues[i].fields.summary];
                break;
        }
    }

    return (
        <Fragment>
            <Text>Hello world 4! Project Key: {context}, Project ID: {context2}</Text>
            <Text>Initiatives</Text>
            <Text>{intiatives.toString()}</Text>
            <Text>Epics with their linked stories</Text>
            <Text>{epics.toString()}</Text>
            <Text>Epics 1</Text>
            <Text>{epics[0].toString()}</Text>
            <Text>Epics 2</Text>
            <Text>{epics[1].toString()}</Text>
            <Text>Epics 3</Text>
            <Text>{epics[2].toString()}</Text>
            <Text>Epics 4</Text>
            <Text>{epics[3].toString()}</Text>
            <Text>Epics 5</Text>
            <Text>{epics[4].toString()}</Text>
            <Text>Epics 6</Text>
            <Text>{epics[5].toString()}</Text>
            <Text>Stories</Text>
            <Text>{stories.toString()}</Text>
            <Text>Sub tasks</Text>
            <Text>{subtasks.toString()}</Text>
        </Fragment>
    );
};

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);
