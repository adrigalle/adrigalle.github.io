function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('./projects.json'); // this gets info from the books.json file
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="content">
            <div class="project-header">
                <h1>projects</h1>
            </div>
            <div className="projects">
                <h1>React Components</h1>
                {loaded && data.projects.map((project,i) => 
                    <all-project key={i}
                        name={project.name} 
                        image={project.image}
                        playURL={project.playURL}
                        repoURL={project.repoURL}
                        description={project.description}
                    />
                )}
            </div>
        </div>         
    </>);   
}  

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
