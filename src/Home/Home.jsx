import GroupMembers from "../Components/GroupMembers/GroupMembers"
import Hero from "../Components/Hero/Hero"
import Navbar from "../Components/Navbar/Navbar"


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="my-20">
                <GroupMembers />
            </div>
        </>
    )
}

export default Home
