import Team from "./Team";
import TeamClass from "./TeamClass";
import User from "../context/User";
import { useContext } from "react";

const About = () => {
    const {userName} = useContext(User);
    return (
        <div>
            {userName}
            <Team name="Adarsh Raj" position="Associate Software Engineer" email="i07adarsh@gmail.com"/>
            {/* <TeamClass name="Adarsh Raj" position="Associate Software Engineer" email="i07adarsh@gmail.com" /> */}
        </div>
    )
}

export default About;