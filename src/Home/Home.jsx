import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import GroupMembers from "../Components/GroupMembers/GroupMembers"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"
import Project from "../Components/Project/Project"


const Home = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <Project />
            <GroupMembers />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
