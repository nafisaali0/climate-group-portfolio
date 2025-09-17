import GroupMembers from "../Components/GroupMembers/GroupMembers"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <div> */}
                <GroupMembers />
            {/* </div> */}
        </>
    )
}

export default Home
