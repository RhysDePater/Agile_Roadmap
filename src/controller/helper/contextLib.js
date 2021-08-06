import ForgeUI, { render, ProjectPage, Fragment, Text, useProductContext, useState } from '@forge/ui';

/**
 * 
 * @returns current project key
 */
export function getAppContextKey(){
    const context = useProductContext().platformContext.projectKey;
    console.log("key: " + context)
    return context;
}

/**
 * 
 * @returns current project id
 */
export function getAppContextId(){
    const context = useProductContext().platformContext.projectId;
    console.log("id: " + context)
    return context;
}
