import { Carousel } from "../../pages/Carousel";
import { ProjectItem } from "../ProjectsItem";

export const Projects = () => {
    return (  
        <div className="bg-[rgb(229,231,235)] pb-10">
            <Carousel/>
            <h1 className="text-5xl text-center font-bold my-10">Other projects</h1>
            <div className="grid grid-cols-4 gap-10">
                <div className="grid place-items-center">
                    <ProjectItem title="GPS Device" desc="GPS Device I made for our thesis" img="/p11.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="App Download Page" desc="A download page made for our mobile app in our thesis" img="/p10.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="TOTATS" desc="A scheduler website for a tattoo business" img="/p14.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Typetype" desc="Keyboard typing website made with MERN stack" img="/p13.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="ADirectory" desc="A startup pitch website created using Next.js" img="/p12.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Selfdevprog" desc="Self development website created using Next.js" img="/p0.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Motion-Driven UI" desc="Website made purely out of Javascript, HTML, and CSS" img="/p1.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Rock Paper Scissors" desc="RPS made purely out of Javascript, HTML, and CSS" img="/p4.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Stopwatch" desc="Stopwatch made purely out of Javascript, HTML, and CSS" img="/p5.png"/>
                </div>
                <div className="grid place-items-center">
                    <ProjectItem title="Tic-Tac-Toe" desc="Game made purely out of Javascript, HTML, and CSS" img="/p9.png"/>
                </div>
            </div>
        </div>
    );
}