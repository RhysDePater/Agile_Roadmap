import Resolver from '@forge/resolver';
import api, { route } from "@forge/api";

const apiHelper = require("./helper/apiHelper");

const resolver = new Resolver();


resolver.define('getText', async ({payload, context}) => { 
  const res = await api
  .asApp()
  .requestJira(route`/rest/api/3/project/${payload.projectKey}/versions`)
  .then((res) => res.json())
  .then((res) => (res).map((data) => {
    return {
      id: data.id,
      name: data.name,
      startDate: apiHelper.checkIfValueExists(data.startDate),
      releaseDate: apiHelper.checkIfValueExists(data.releaseDate)
    }
  }))
  .catch((error) => {
    console.log("failed to Connect to the Api Endpoint :");
    console.log(error);
  });
  // console.log(res);
return (JSON.stringify(res));
});


export const handler = resolver.getDefinitions();

