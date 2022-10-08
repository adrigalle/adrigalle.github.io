
function ProjectCard() {
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
// might even be able to create the little componenets thing for just one page for each thing, maybe have a better, longer description of it, maybe even little video that just pulls from the json file, but only do once....
