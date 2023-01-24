import Socials from './socials';
import YoutubeEmbed from "./youtubeEmbed";
import Card from './cards/card';
import JSON from './data.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const projects = JSON.projects.slice(0,3);

    return ( 
        <div className="home">

            <section id='hero' className='fullContainer'>
                <div className='hero'>
                    <div className="hero-content">
                        <h1>
                            <span>ADRI</span>
                        </h1>
                        <h2 className="des">
                            I'm a web developer
                        </h2>
                        <h3 style={{ fontSize: "2vw" }}>(in training)</h3>
                    </div>
                </div>
            </section>



            <section id='video' className='block'>
                <YoutubeEmbed embedId="oRDye9lIGQk" />
            </section>







            <section id='bio' className='containerFull'>
                <div className='project-header'>
                    <h1>hello there!</h1>
                </div>
                <div className='block'>
                    <p>
                        My name is Adriana Gallegos and I am currently in a Professional Certificate Program as a Full Stack Developer with MERN stack at MIT xPRo online institute. 
                        <br/><br/>
                        I have worked various jobs since I could and learned many different subjects because they sounded so much fun. I am a creative at heart but need logic to function and coding is definitely both!
                    </p>
                </div>
                <section className='fullContainer'>
                    <div>
                        <img className="img-container" src="images/photographs/family-full-portrait.jpg" alt=''/>
                        <img className="img-container" src="images/photographs/self-portrait-4.jpg" alt=''/>
                        <img className="img-container" src="images/photographs/family-closeup.jpg" alt=''/>
                    </div>
                </section>
                <div className='block'>
                    <p>
                        I am also a mom of one beautiful little girl, wife of a fabulous man, and a natural light family photographer. I love making beautiful things and can’t wait to show y'all what I am learning! If you need to reach me for any reason, here are my socials below!
                        <br/><br/>
                        (also if you want to check out my photography <a href="https://agphotographyetc.com">click here</a>. I made it using create-next-app and hope to make it more of a blog in the future)
                    </p>
                    <Socials />
                </div>
            </section>


            <section id='couple-projects' className='fullContainer'>
                <div className='project-header'>
                    <h1>projects</h1>
                </div>
                <div className="project-list">

                    {projects && projects.length>0 && projects.map(project => (
                        <Card 
                            image={project.image}
                            repo={project.repo}
                            demo={project.demo}
                            minidesc={project.minidesc}
                            description={project.description}
                            id={project.id}
                            key={project.id}
                        />
                    ))}

                </div>
                <div className='block text-center'>
                    <Link to='/projects'>
                        <button>
                            <h3 style={{ color: "white", margin: "8px 16px 8px" }}>see all projects</h3>
                        </button>
                    </Link>
                </div>
            </section>



            <section id='contact' className='fullContainer'>
                <div className="contact" id="contact" style={{ overflow: "hidden" }}>
                    <h2 style={{ color: "white" }}>let's get in touch</h2>
                    <h3 style={{ color: "#333", maxWidth: "800px"}}>I am currently still in that learning stage but I am more than happy to chat, so shoot me an email!</h3>

                    <a href="mailto:adriana.go1105@gmail.com">
                        <button>
                            <h3 style={{ color: "white", margin: "8px 16px 8px" }}>say hello!</h3>
                        </button>
                    </a>
                </div>
            </section>


        </div>
     );
}

export default Home;
