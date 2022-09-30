
function Projects() {
    const [projList, setProjList] = React.useState();
    // need to bring in the item, set up so that I can grab all of the individual things

    return (
        <>
            <img className="projects cards">{item.image}</img>
            <h3 className="projects">{item.name}</h3>
            <p className="projects">{item.description}</p>
            <div className="projects cards links">
                <a href={item.play}>play</a>
                <a href={item.repo}>repo</a>
            </div>
        </>
    )
}
// might need to make a separate component for the little play and repo things