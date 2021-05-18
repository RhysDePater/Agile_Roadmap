import ForgeUI, {
  render,
  ProjectPage,
  Fragment,
  Text,
  useProductContext,
  useState,
} from "@forge/ui";
import React from "react";
import api from "@forge/api";
import { fetch } from '@forge/api';

export async function fetchCommentsForIssue() {
  const res = await api
      .asApp()
      .requestJira(`/rest/api/3/issue/CKRS-29`);
  
    const data = await res.json();
    return data;
  };
  
      
const App = () => {
  const context = useProductContext();
  const [comments] = useState(async () => await fetchCommentsForIssue());
  console.log("TEST");

  return (
    <Fragment>
      <Text> Agile Roadmap world 4! </Text> <Text> {JSON.stringify(comments)} </Text>{" "}
    </Fragment>
  );
};

export const run = render(
  <ProjectPage>
    <App />
  </ProjectPage>
);
