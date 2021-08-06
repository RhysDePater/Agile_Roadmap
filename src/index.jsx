import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
    console.log(req);
    
    return (
        <div><h1>HELOO</h1></div>
    );
});

export const handler = resolver.getDefinitions();

