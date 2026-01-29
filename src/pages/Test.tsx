import Cursor from "../components/cursor";
import { ProjectItem } from "../components/ProjectsItem";

const Test = () => {
    return (  
        <div className="h-screen w-full bg-[rgb(8,8,8)] flex justify-center items-center">
            <Cursor/>
            <ProjectItem/>
        </div>
    );
}
 
export default Test;