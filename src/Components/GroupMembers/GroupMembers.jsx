import { ImLinkedin } from "react-icons/im"
import membersInfo from "./membersInfo"
import { FaGithubSquare, FaResearchgate } from "react-icons/fa"
import { FaSquareFacebook } from "react-icons/fa6"
import { RiGlobalLine } from "react-icons/ri"


const GroupMembers = () => {
    return (
        <>
            <div className="py-20 max-w-[1300px] mx-auto p-5">
                <h1 className="text-5xl font-bold">Team Members</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16">
                    {
                        membersInfo?.map((member, index) => (
                            <>
                                <div key={index} className="card bg-dark_green rounded-3xl shadow-sm hover:shadow-xl backdrop-blur-xl">
                                    <figure>
                                        <img
                                            src={member.image}
                                            alt="Shoes"
                                            className="w-full h-[400px] overflow-hidden object-cover" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-lg font-bold">{member.name}</h2>
                                        <h2 className="text-md font-medium">{member.education}</h2>
                                        <div className="card-actions justify-end">
                                            <a
                                                href={member?.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ImLinkedin size={29} color="#fff" />
                                            </a>
                                            {
                                                member?.github ?

                                                    <a
                                                        href={member?.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithubSquare size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            {
                                                member?.portfolio ?

                                                    <a
                                                        href={member?.portfolio}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <RiGlobalLine size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            {
                                                member?.researchGate ?
                                                    <a
                                                        href={member?.researchGate}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaResearchgate size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            <a
                                                href={member?.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaSquareFacebook size={30} color="#fff" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GroupMembers
