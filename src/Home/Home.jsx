import GroupMembers from "../Components/GroupMembers/GroupMembers"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"
import Project from "../Components/Project/Project"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <GroupMembers />
            <Project/>
        </>
    )
}

export default Home
