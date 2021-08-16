import React, { useEffect, useState } from 'react';
import { invoke, view } from '@forge/bridge';



/*
async function getContext1() {

    const context = await view.getContext()
    return context;
    // set context to state or do other logics here
}
*/
 
function App() {

    
    //const key = view.getContext();
    //console.log(JSON.stringify(key))
    //const key1 = view.getContext().extension.project.key;
    
    view.getContext().then(console.log);

 
    const [data, setData] = useState(null);
    //const [issuekey, setKey] = useState(null);
    

    useEffect(() => {
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
        //invoke('getCtxt', { example: 'my-invoke-variable' }).then(setKey);
        //view.getContext().then(setData);
        //console.log(getContext1());
        //setData = getContext1();
    }, []);

    return (
        <div>
            {data ? data : 'Loading...' }
            {/*issuekey ? issuekey : 'Loading...' */}


            
        </div>
    );
}

export default App;
