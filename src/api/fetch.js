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
  
const fetchA = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
};

const fetchB = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
};

const fetchC = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
};

const fetchD = async (project) => {
    const res = await api
      .asApp()
      .requestJira(`/rest/api/3/search?jql=project=${project}&maxResults=200`);
  
    const data = await res.json();
    return data;
};


